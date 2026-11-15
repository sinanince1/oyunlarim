/* ==========================================================================
   hesap.js — Sinan Öğretmen Akademi · İsteğe bağlı üyelik ve ilerleme senkronu
   Sinan İnce 2026

   NASIL ÇALIŞIR
   - Misafir: hiçbir şey değişmez. Firebase yüklenmez, oyunlar localStorage'a yazar.
   - Üye: oyunların localStorage kayıtları Firestore'a kopyalanır
       uyeler/{uid}                     → ad, kullanici, olusturma, son
       uyeler/{uid}/kayitlar/k_{anahtar} → a (anahtar), d (değer), t (ms), s (silindi), st (sunucu zamanı)
       kurtarma/{kullanici}             → şifrenin kurtarma koduyla şifrelenmiş kopyası (AES-GCM)
   - Oyunlara dokunulmaz: değişiklikler "storage" olayı + düzenli tarama ile yakalanır.
   - Çıkışta oyun kayıtları cihazdan silinir, misafir ilerlemesi geri gelir.
   - "Ortak cihaz" seçilirse sekme kapanınca oturum biter, sonraki açılışta cihaz temizlenir.

   index.html'in kullandığı arayüz: Hesap.firebase(), Hesap.oyunOncesi(), Hesap.oyunKapandi()
   ========================================================================== */
(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // A) SABİTLER
  // --------------------------------------------------------------------------
  const FB_SURUM = '10.12.0';
  const FB_CONFIG = { apiKey: "AIzaSyCfG9-e_6DjyDnKhptvwgR0SIIjIl8NNsw", authDomain: "hikayesehri-3162b.firebaseapp.com", projectId: "hikayesehri-3162b" };
  const ALAN = 'uye.sinanince.com';            // kullanıcı adı → ad@uye.sinanince.com (gerçek e-posta değil)
  const META = 'hs_meta', DURUM = 'hs_durum', MISAFIR = 'hs_misafir', OTURUM = 'hs_oturum';
  // Senkronlanmayan anahtarlar: hesap.js'in kendi kayıtları, Firebase, site ayarları
  const HARIC = ['hs_', 'firebase', 'firestore', 'fikirGonderim', 'kutlama-', 'seciliSinif'];
  const AZAMI = 900000;                         // Firestore belge sınırının altında kal
  const KOD_ALFABE = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // 0/O, 1/I/L yok
  const PBKDF2_TUR = 310000;

  // --------------------------------------------------------------------------
  // B) KÜÇÜK YARDIMCILAR
  // --------------------------------------------------------------------------
  const lsAl = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsYaz = (k, v) => { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } };
  const lsSil = k => { try { localStorage.removeItem(k); } catch (e) {} };
  const ssAl = k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } };
  const ssYaz = (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) {} };
  const ssSil = k => { try { sessionStorage.removeItem(k); } catch (e) {} };
  const jsonAl = (k, vars) => { try { const v = JSON.parse(lsAl(k)); return v == null ? vars : v; } catch (e) { return vars; } };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const bekle = ms => new Promise(r => setTimeout(r, ms));

  function oyunAnahtari(k) { return k != null && !HARIC.some(o => k.indexOf(o) === 0); }
  function oyunAnahtarlari() {
    const l = [];
    try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (oyunAnahtari(k)) l.push(k); } } catch (e) {}
    return l;
  }
  function oyunKayitlari() { const o = {}; oyunAnahtarlari().forEach(k => { const v = lsAl(k); if (v != null) o[k] = v; }); return o; }

  // Hızlı özet (cyrb53) — değişiklik tespiti için, güvenlik için değil
  function ozet(s) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36) + ':' + s.length;
  }
  const belgeId = k => 'k_' + encodeURIComponent(k).slice(0, 1400);

  function kullaniciAdiDuzelt(s) {
    return String(s || '').trim().toLocaleLowerCase('tr')
      .replace(/[çğıöşüâîû]/g, c => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i', û: 'u' }[c]))
      .replace(/\s+/g, '');
  }
  const kullaniciAdiGecerli = k => /^[a-z0-9](?:[a-z0-9._]{1,18})[a-z0-9]$/.test(k) && !/\.\./.test(k);
  const eposta = k => k + '@' + ALAN;

  // --------------------------------------------------------------------------
  // C) KURTARMA KODU KASASI (WebCrypto)
  //    Şifre, kurtarma kodundan türetilen anahtarla şifrelenip saklanır.
  //    Kodu bilen, şifreyi çözüp yeni şifre belirleyebilir. Sunucu gerekmez.
  // --------------------------------------------------------------------------
  const b64 = buf => { let s = ''; new Uint8Array(buf).forEach(b => { s += String.fromCharCode(b); }); return btoa(s); };
  const b64Ac = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  function kodUret() {
    const out = []; const r = new Uint8Array(1);
    while (out.length < 8) { crypto.getRandomValues(r); if (r[0] < 248) out.push(KOD_ALFABE[r[0] % 31]); } // 248 = 31*8, eşit dağılım
    return out.slice(0, 4).join('') + '-' + out.slice(4).join('');
  }
  function kodDuzelt(s) {
    const t = String(s || '').toLocaleUpperCase('en').replace(/[^A-Z0-9]/g, '');
    return t.length === 8 ? t.slice(0, 4) + '-' + t.slice(4) : t;
  }
  async function kasaAnahtari(kod, tuz) {
    const km = await crypto.subtle.importKey('raw', new TextEncoder().encode(kod), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', salt: tuz, iterations: PBKDF2_TUR, hash: 'SHA-256' }, km, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
  }
  async function kasaKilitle(sifre, kod) {
    const tuz = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
    const a = await kasaAnahtari(kod, tuz);
    const c = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, a, new TextEncoder().encode(sifre));
    return { kasa: b64(c), tuz: b64(tuz), iv: b64(iv), tur: PBKDF2_TUR };
  }
  async function kasaAc(v, kod) {
    const a = await kasaAnahtari(kod, b64Ac(v.tuz));
    const p = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64Ac(v.iv) }, a, b64Ac(v.kasa));
    return new TextDecoder().decode(p);
  }

  // --------------------------------------------------------------------------
  // D) FIREBASE YÜKLEYİCİ (index.html de bunu paylaşır)
  // --------------------------------------------------------------------------
  let fbSoz = null;
  function fbYukle() {
    if (fbSoz) return fbSoz;
    const yukle = src => new Promise((ok, hata) => { const e = document.createElement('script'); e.src = src; e.onload = ok; e.onerror = hata; document.head.appendChild(e); });
    const kok = 'https://www.gstatic.com/firebasejs/' + FB_SURUM + '/';
    fbSoz = (window.firebase && window.firebase.initializeApp ? Promise.resolve() : yukle(kok + 'firebase-app-compat.js'))
      .then(() => (firebase.auth ? null : yukle(kok + 'firebase-auth-compat.js')))
      .then(() => (firebase.firestore ? null : yukle(kok + 'firebase-firestore-compat.js')))
      .then(() => { if (!firebase.apps.length) firebase.initializeApp(FB_CONFIG); return firebase; });
    fbSoz.catch(() => { fbSoz = null; });
    return fbSoz;
  }
  const db = () => firebase.firestore();
  const sunucuZamani = () => firebase.firestore.FieldValue.serverTimestamp();
  const kayitRef = uid => db().collection('uyeler').doc(uid).collection('kayitlar');

  // --------------------------------------------------------------------------
  // E) DURUM
  //    hs_durum: { uid, ad, kullanici, ortak }  — giriş yapılmış mı (Firebase'i yüklemeden bilmek için)
  //    hs_meta : { uid, kayit: { anahtar: { h, t, kirli?, sil? } }, sonCekme }
  // --------------------------------------------------------------------------
  let aktifUid = null, islemde = false, gonderiliyor = false, tekrarGonder = false;
  let zamanlayici = null, sonCekmeAni = 0, cekmeSoz = null, senkDurum = 'bos', ilkSoz = null;

  const durumAl = () => jsonAl(DURUM, null);
  const durumYaz = d => lsYaz(DURUM, JSON.stringify(d));
  const metaAl = () => { const m = jsonAl(META, null); return m && m.kayit ? m : { uid: null, kayit: {}, sonCekme: 0 }; };
  const metaYaz = m => lsYaz(META, JSON.stringify(m));
  const girisli = () => !!durumAl();

  // Cihazı misafir hâline döndür (ağ gerekmez)
  function yerelTemizle() {
    oyunAnahtarlari().forEach(lsSil);
    const y = jsonAl(MISAFIR, null);
    if (y && typeof y === 'object') Object.keys(y).forEach(k => lsYaz(k, y[k]));
    lsSil(MISAFIR); lsSil(META); lsSil(DURUM); ssSil(OTURUM);
    aktifUid = null; senkDurum = 'bos';
    clearTimeout(zamanlayici);
  }

  // --------------------------------------------------------------------------
  // F) SENKRON
  // --------------------------------------------------------------------------
  // Yereldeki değişiklikleri bul, "kirli" işaretle
  function tara() {
    const m = metaAl(); if (!m.uid) return 0;
    const simdi = Date.now(); let n = 0;
    oyunAnahtarlari().forEach(a => {
      const v = lsAl(a); if (v == null || v.length > AZAMI) return;
      const h = ozet(v), e = m.kayit[a];
      if (!e || e.h !== h) { m.kayit[a] = { h, t: simdi, kirli: 1 }; n++; }
    });
    Object.keys(m.kayit).forEach(a => {
      const e = m.kayit[a];
      if (!e.sil && lsAl(a) === null) { m.kayit[a] = { h: '', t: simdi, kirli: 1, sil: 1 }; n++; }
    });
    if (n) metaYaz(m);
    return n;
  }

  function zamanla(ms) {
    if (!aktifUid) return;
    clearTimeout(zamanlayici);
    const d = durumAl();
    zamanlayici = setTimeout(gonder, ms != null ? ms : (d && d.ortak ? 4000 : 15000));
  }

  async function gonder() {
    clearTimeout(zamanlayici);
    if (!aktifUid || !window.firebase || !firebase.auth || !firebase.auth().currentUser) return false;
    tara();
    const m = metaAl(); if (m.uid !== aktifUid) return false;
    const kirli = Object.keys(m.kayit).filter(a => m.kayit[a].kirli).map(a => [a, m.kayit[a]]);
    if (!kirli.length) { senkGoster('kayitli'); return true; }
    if (gonderiliyor) { tekrarGonder = true; return false; }
    gonderiliyor = true; senkGoster('kaydediliyor');
    const uid = aktifUid;
    try {
      const ref = kayitRef(uid);
      for (let i = 0; i < kirli.length; i += 400) {
        const b = db().batch();
        kirli.slice(i, i + 400).forEach(([a, e]) => {
          const v = e.sil ? null : lsAl(a);
          b.set(ref.doc(belgeId(a)), { a, d: v, t: e.t, s: v === null, st: sunucuZamani() });
        });
        if (i === 0) b.set(db().collection('uyeler').doc(uid), { son: sunucuZamani() }, { merge: true });
        await b.commit();
      }
      const m2 = metaAl();
      if (m2.uid === uid) {
        kirli.forEach(([a, e]) => { const c = m2.kayit[a]; if (c && c.t === e.t && c.h === e.h) delete c.kirli; });
        metaYaz(m2);
      }
      senkGoster('kayitli');
      return true;
    } catch (err) {
      console.warn('[hesap] kaydedilemedi:', err && err.code);
      senkGoster('hata');
      zamanla(60000);
      return false;
    } finally {
      gonderiliyor = false;
      if (tekrarGonder) { tekrarGonder = false; zamanla(2000); }
    }
  }

  // Buluttaki değişiklikleri indir. tam=true → hepsini, değilse yalnızca son çekmeden sonrakileri
  function cek(tam) {
    if (cekmeSoz) return cekmeSoz;
    cekmeSoz = (async () => {
      if (!aktifUid) return;
      const uid = aktifUid;
      let m = metaAl();
      let q = kayitRef(uid);
      if (!tam && m.sonCekme) q = q.where('st', '>', firebase.firestore.Timestamp.fromMillis(m.sonCekme));
      const snap = await q.get();
      m = metaAl(); if (m.uid !== uid) return;
      let enSon = m.sonCekme || 0, degisti = 0;
      snap.forEach(doc => {
        const x = doc.data(); if (!x || typeof x.a !== 'string' || !oyunAnahtari(x.a)) return;
        if (x.st && x.st.toMillis) enSon = Math.max(enSon, x.st.toMillis());
        const silindi = x.s || x.d == null;
        const h = silindi ? '' : ozet(String(x.d));
        const e = m.kayit[x.a];
        if (e && e.kirli && e.t >= x.t) return;             // yereldeki daha yeni → o yüklenecek
        if (e && !e.kirli && e.h === h) { e.t = Math.max(e.t, x.t || 0); return; } // zaten aynı
        if (e && !e.kirli && e.t > x.t) return;            // eldeki daha yeni (olmamalı)
        if (silindi) lsSil(x.a); else if (!lsYaz(x.a, String(x.d))) return;
        m.kayit[x.a] = silindi ? { h: '', t: x.t || 0, sil: 1 } : { h, t: x.t || 0 };
        degisti++;
      });
      m.sonCekme = enSon;
      metaYaz(m);
      sonCekmeAni = Date.now();
      return degisti;
    })().catch(err => { console.warn('[hesap] indirilemedi:', err && err.code); senkGoster('hata'); })
      .finally(() => { cekmeSoz = null; });
    return cekmeSoz;
  }

  // Giriş/kayıt sonrası: misafir verisini yedekle, (isteğe göre) hesaba ekle, bulutla birleştir
  async function girisSonrasi(user, yeniHesap) {
    aktifUid = user.uid;
    const m = metaAl();
    if (m.uid !== user.uid) {
      const misafir = oyunKayitlari();
      const varMi = Object.keys(misafir).length > 0;
      if (varMi && !lsAl(MISAFIR)) lsYaz(MISAFIR, JSON.stringify(misafir));
      const ekle = yeniHesap ? varMi : (varMi ? await sor('Bu cihazda misafir olarak oynanmış ilerleme var.', 'Hesabına eklensin mi? Hesabında aynı oyunun kaydı varsa hesabındaki korunur.', '➕ Evet, ekle', 'Hayır') : false);
      const yeni = { uid: user.uid, kayit: {}, sonCekme: 0 };
      Object.keys(misafir).forEach(a => {
        if (ekle && misafir[a].length <= AZAMI) yeni.kayit[a] = { h: ozet(misafir[a]), t: 1, kirli: 1 }; // t=1: bulutta varsa bulut kazanır
        else lsSil(a);
      });
      metaYaz(yeni);
      await cek(true);
      const m2 = metaAl(), simdi = Date.now();
      Object.keys(m2.kayit).forEach(a => { if (m2.kayit[a].kirli && m2.kayit[a].t === 1) m2.kayit[a].t = simdi; });
      metaYaz(m2);
    } else {
      await cek(false);
    }
    await gonder();
    arayuzGuncelle();
  }

  // Sayfa açılışında kayıtlı oturumu sürdür; ilkSoz ilk eşitleme bitince çözülür
  function oturumuIzle() {
    let coz; ilkSoz = new Promise(r => { coz = r; });
    fbYukle().then(fb => {
      fb.auth().onAuthStateChanged(u => {
        if (islemde) return;
        if (u) { if (aktifUid !== u.uid && girisli()) girisSonrasi(u, false).catch(() => {}).finally(coz); else coz(); }
        else { if (girisli()) { yerelTemizle(); arayuzGuncelle(); } coz(); }
      });
    }).catch(() => { senkGoster('hata'); coz(); });
  }

  // --------------------------------------------------------------------------
  // G) HESAP İŞLEMLERİ
  // --------------------------------------------------------------------------
  const HATALAR = {
    'auth/email-already-in-use': 'Bu kullanıcı adı alınmış. Başka bir tane dener misin?',
    'auth/invalid-credential': 'Kullanıcı adı ya da şifre yanlış.',
    'auth/invalid-login-credentials': 'Kullanıcı adı ya da şifre yanlış.',
    'auth/wrong-password': 'Kullanıcı adı ya da şifre yanlış.',
    'auth/user-not-found': 'Kullanıcı adı ya da şifre yanlış.',
    'auth/too-many-requests': 'Çok fazla deneme oldu. Biraz bekleyip tekrar dene.',
    'auth/network-request-failed': 'İnternet bağlantısı yok gibi görünüyor.',
    'auth/weak-password': 'Şifre en az 6 karakter olmalı.',
    'auth/operation-not-allowed': 'Üyelik şu an kapalı. Öğretmenine haber verir misin?',
    'auth/requires-recent-login': 'Güvenlik için çıkış yapıp yeniden girmen gerekiyor.',
    'permission-denied': 'Kayıt izni yok (sunucu ayarı). Öğretmenine haber verir misin?',
    'hs/kod-yok': 'Bu kullanıcı adı için kurtarma kodu bulunamadı.',
    'hs/kod-yanlis': 'Kurtarma kodu yanlış. Harfleri kontrol eder misin?',
    'hs/yukleme': 'Bağlantı kurulamadı. İnterneti ya da reklam engelleyiciyi kontrol eder misin?'
  };
  const hataMetni = e => HATALAR[e && e.code] || 'Bir sorun oldu. Tekrar dener misin?';

  async function fbHazir(ortak) {
    let fb; try { fb = await fbYukle(); } catch (e) { throw { code: 'hs/yukleme' }; }
    if (ortak != null) await fb.auth().setPersistence(ortak ? fb.auth.Auth.Persistence.SESSION : fb.auth.Auth.Persistence.LOCAL);
    return fb;
  }
  function oturumKaydet(uid, ad, kullanici, ortak) {
    durumYaz({ uid, ad, kullanici, ortak: !!ortak });
    if (ortak) ssYaz(OTURUM, '1');
  }

  async function kayitOl(ad, kullanici, sifre, ortak) {
    const fb = await fbHazir(ortak);
    islemde = true;
    try {
      const c = await fb.auth().createUserWithEmailAndPassword(eposta(kullanici), sifre);
      const kod = kodUret();
      const kasa = await kasaKilitle(sifre, kod);
      const b = db().batch();
      b.set(db().collection('uyeler').doc(c.user.uid), { ad, kullanici, olusturma: sunucuZamani(), son: sunucuZamani() });
      b.set(db().collection('kurtarma').doc(kullanici), Object.assign({ uid: c.user.uid, t: sunucuZamani() }, kasa));
      await b.commit();
      oturumKaydet(c.user.uid, ad, kullanici, ortak);
      await girisSonrasi(c.user, true);
      return kod;
    } finally { islemde = false; }
  }

  async function profilAdi(uid, kullanici) {
    try { const p = await db().collection('uyeler').doc(uid).get(); return (p.exists && p.data().ad) || kullanici; }
    catch (e) { return kullanici; }
  }

  async function girisYap(kullanici, sifre, ortak) {
    const fb = await fbHazir(ortak);
    islemde = true;
    try {
      const c = await fb.auth().signInWithEmailAndPassword(eposta(kullanici), sifre);
      oturumKaydet(c.user.uid, await profilAdi(c.user.uid, kullanici), kullanici, ortak);
      await girisSonrasi(c.user, false);
    } finally { islemde = false; }
  }

  async function sifreKurtar(kullanici, kod, yeniSifre, ortak) {
    const fb = await fbHazir(ortak);
    const d = await db().collection('kurtarma').doc(kullanici).get();
    if (!d.exists) throw { code: 'hs/kod-yok' };
    let eski; try { eski = await kasaAc(d.data(), kod); } catch (e) { throw { code: 'hs/kod-yanlis' }; }
    islemde = true;
    try {
      const c = await fb.auth().signInWithEmailAndPassword(eposta(kullanici), eski);
      await c.user.updatePassword(yeniSifre);
      const kasa = await kasaKilitle(yeniSifre, kod); // aynı kod geçerli kalır
      await db().collection('kurtarma').doc(kullanici).set(Object.assign({ uid: c.user.uid, t: sunucuZamani() }, kasa));
      oturumKaydet(c.user.uid, await profilAdi(c.user.uid, kullanici), kullanici, ortak);
      await girisSonrasi(c.user, false);
    } finally { islemde = false; }
  }

  async function yenidenDogrula(sifre) {
    const fb = await fbHazir(null);
    const u = fb.auth().currentUser; if (!u) throw { code: 'auth/requires-recent-login' };
    await u.reauthenticateWithCredential(fb.auth.EmailAuthProvider.credential(u.email, sifre));
    return u;
  }

  // Şifre değişince kasa da yenilenir → yeni kurtarma kodu verilir
  async function sifreDegistir(eski, yeni) {
    const u = await yenidenDogrula(eski);
    await u.updatePassword(yeni);
    const d = durumAl(); const kod = kodUret();
    await db().collection('kurtarma').doc(d.kullanici).set(Object.assign({ uid: u.uid, t: sunucuZamani() }, await kasaKilitle(yeni, kod)));
    return kod;
  }

  async function cikisYap(zorla) {
    if (aktifUid && !zorla) {
      const ok = await gonder();
      if (!ok && Object.values(metaAl().kayit).some(e => e.kirli)) return false; // kaydedilmemiş ilerleme var
    }
    try { if (window.firebase && firebase.auth) { islemde = true; await firebase.auth().signOut(); } } catch (e) {} finally { islemde = false; }
    yerelTemizle();
    arayuzGuncelle();
    return true;
  }

  async function hesapSil(sifre) {
    const u = await yenidenDogrula(sifre);
    const d = durumAl();
    const snap = await kayitRef(u.uid).get();
    const belgeler = snap.docs.map(x => x.ref);
    for (let i = 0; i < belgeler.length; i += 400) { const b = db().batch(); belgeler.slice(i, i + 400).forEach(r => b.delete(r)); await b.commit(); }
    const b = db().batch();
    b.delete(db().collection('uyeler').doc(u.uid));
    if (d && d.kullanici) b.delete(db().collection('kurtarma').doc(d.kullanici));
    await b.commit();
    islemde = true;
    try { await u.delete(); } finally { islemde = false; }
    yerelTemizle();
    arayuzGuncelle();
  }

  // --------------------------------------------------------------------------
  // H) ARAYÜZ
  // --------------------------------------------------------------------------
  const CSS = `
  .hs-btn{display:flex;align-items:center;gap:7px;background:#fff;color:#00A88C;font-family:'Nunito',sans-serif;font-weight:900;font-size:.95rem;border:none;cursor:pointer;padding:10px 18px;border-radius:999px;box-shadow:0 4px 0 rgba(0,0,0,.15);transition:transform .2s;white-space:nowrap;max-width:220px}
  .hs-btn:hover{transform:translateY(-2px)} .hs-btn:active{transform:translateY(2px);box-shadow:0 1px 0 rgba(0,0,0,.15)}
  .hs-btn .hs-ad{overflow:hidden;text-overflow:ellipsis}
  .hs-nokta{width:9px;height:9px;border-radius:50%;background:#bbb;flex:none}
  .hs-nokta.kayitli{background:#00C9A7}.hs-nokta.kaydediliyor{background:#FFB000;animation:hsNabiz 1s infinite}.hs-nokta.hata{background:#FF4D8D}
  @keyframes hsNabiz{50%{opacity:.3}}
  @media (max-width:600px){.hs-btn{padding:9px 13px}.hs-btn .hs-ad{max-width:80px}}
  .hs-ov{display:none;position:fixed;inset:0;z-index:10050;background:rgba(20,20,40,.55);align-items:center;justify-content:center;padding:16px;font-family:'Nunito',sans-serif}
  .hs-ov.acik{display:flex}
  .hs-kart{background:#fff;border-radius:24px;box-shadow:0 10px 0 rgba(0,0,0,.12);width:100%;max-width:430px;max-height:92vh;overflow:auto;padding:26px 24px 22px;position:relative;color:#333}
  .hs-kapat{position:absolute;top:12px;right:12px;width:38px;height:38px;border-radius:50%;border:none;background:#FFE4EE;color:#FF4D8D;font-weight:900;font-size:1rem;cursor:pointer}
  .hs-kart h2{margin:0 0 6px;font-size:1.45rem;font-weight:900;color:#FF6B35;padding-right:40px}
  .hs-kart p{margin:0 0 12px;font-size:.95rem;line-height:1.45;color:#555}
  .hs-sekme{display:flex;gap:6px;background:#FFF1E6;border-radius:999px;padding:5px;margin:12px 0 14px}
  .hs-sekme button{flex:1;border:none;background:none;border-radius:999px;padding:9px;font:900 .95rem 'Nunito',sans-serif;color:#C9773F;cursor:pointer}
  .hs-sekme button.secili{background:#FF6B35;color:#fff}
  .hs-kart label.hs-alan{display:block;font-weight:800;font-size:.88rem;color:#444;margin:10px 0 4px}
  .hs-kart input[type=text],.hs-kart input[type=password]{width:100%;box-sizing:border-box;border:3px solid #FFE0CC;border-radius:14px;padding:11px 13px;font:700 1.05rem 'Nunito',sans-serif;outline:none;background:#FFFCF9}
  .hs-kart input:focus{border-color:#FF6B35}
  .hs-sifre{position:relative}.hs-sifre input{padding-right:46px!important}
  .hs-goz{position:absolute;right:6px;top:50%;transform:translateY(-50%);border:none;background:none;font-size:1.15rem;cursor:pointer;padding:6px}
  .hs-ipucu{font-size:.8rem;color:#999;margin-top:3px}
  .hs-kutu{display:flex;gap:9px;align-items:flex-start;margin:12px 0 0;font-size:.86rem;color:#555;line-height:1.35;cursor:pointer}
  .hs-kutu input{width:20px;height:20px;flex:none;margin:0;accent-color:#00C9A7}
  .hs-ana{display:block;width:100%;margin-top:16px;border:none;border-radius:999px;padding:13px;font:900 1.08rem 'Nunito',sans-serif;color:#fff;background:linear-gradient(135deg,#FF6B35,#FF4D8D);box-shadow:0 5px 0 rgba(0,0,0,.15);cursor:pointer}
  .hs-ana:disabled{opacity:.5;cursor:default}
  .hs-ikinci{display:block;width:100%;margin-top:10px;border:3px solid #E8E8F0;border-radius:999px;padding:10px;font:900 .98rem 'Nunito',sans-serif;color:#555;background:#fff;cursor:pointer}
  .hs-link{background:none;border:none;color:#4D9FFF;font:800 .9rem 'Nunito',sans-serif;cursor:pointer;padding:6px 0;margin-top:8px;text-decoration:underline}
  .hs-hata{color:#E0245E;font-weight:800;font-size:.9rem;min-height:1.2em;margin-top:10px}
  .hs-kod{font:900 2.1rem/1 'Courier New',monospace;letter-spacing:4px;text-align:center;background:#FFF8D6;border:3px dashed #FFD600;border-radius:18px;padding:18px 8px;margin:12px 0;color:#333;user-select:all}
  .hs-durum{background:#F0FBF8;border-radius:14px;padding:12px 14px;font-weight:800;font-size:.95rem;color:#078a73;margin:10px 0}
  .hs-durum.hata{background:#FFF0F4;color:#E0245E}.hs-durum.kaydediliyor{background:#FFF8E1;color:#B07800}
  .hs-kvkk{font-size:.8rem;color:#666;background:#F7F7FB;border-radius:12px;padding:10px 12px;margin-top:8px;line-height:1.45}
  .hs-kucuk{font-size:.82rem;color:#888;text-align:center;margin-top:12px}
  .hs-tehlike{color:#E0245E!important;border-color:#FFD3E0!important}
  `;

  let ov, kart, sorCoz = null;

  function arayuzKur() {
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    ov = document.createElement('div'); ov.className = 'hs-ov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Üyelik');
    kart = document.createElement('div'); kart.className = 'hs-kart';
    ov.appendChild(kart); document.body.appendChild(ov);
    ov.addEventListener('click', e => { if (e.target === ov && !sorCoz && !kart.dataset.kilit) kapat(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('acik') && !sorCoz && !kart.dataset.kilit) kapat(); });

    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'hs-btn'; btn.id = 'hs-btn';
    btn.addEventListener('click', () => ac());
    const yer = document.querySelector('.header-right');
    const hakkimda = yer && yer.querySelector('.about-btn');
    if (yer) yer.insertBefore(btn, hakkimda || null); else document.body.appendChild(btn);
    arayuzGuncelle();
  }

  function arayuzGuncelle() {
    const btn = document.getElementById('hs-btn'); if (!btn) return;
    const d = durumAl();
    if (d) btn.innerHTML = '<span class="hs-nokta ' + senkDurum + '"></span><span class="hs-ad">' + esc(d.ad) + '</span>';
    else btn.innerHTML = '☁️ <span class="hs-ad">Giriş Yap</span>';
    btn.title = d ? 'Hesabım' : 'Giriş yap / Üye ol — ilerlemeni kaydet';
    if (ov && ov.classList.contains('acik') && kart.dataset.ekran === 'profil') ekranProfil();
  }

  function senkGoster(s) {
    senkDurum = s;
    const n = document.querySelector('#hs-btn .hs-nokta'); if (n) n.className = 'hs-nokta ' + s;
    const k = document.getElementById('hs-senk'); if (k) senkKutu(k);
  }
  function senkKutu(k) {
    k.className = 'hs-durum ' + (senkDurum === 'hata' ? 'hata' : senkDurum === 'kaydediliyor' ? 'kaydediliyor' : '');
    k.textContent = senkDurum === 'hata' ? '⚠️ Şu an kaydedilemedi. İnternet gelince tekrar denenecek; ilerlemen bu cihazda duruyor.'
      : senkDurum === 'kaydediliyor' ? '⏳ Kaydediliyor…' : '☁️ Tüm ilerlemen hesabında kayıtlı.';
  }

  function ac() { if (girisli()) ekranProfil(); else ekranGiris('giris'); ov.classList.add('acik'); }
  function kapat() { ov.classList.remove('acik'); delete kart.dataset.kilit; }

  const $k = id => kart.querySelector('#' + id);
  function sifreAlani(id, etiket, oto) {
    return '<label class="hs-alan" for="' + id + '">' + etiket + '</label><div class="hs-sifre"><input type="password" id="' + id + '" autocomplete="' + oto + '" maxlength="64"><button type="button" class="hs-goz" data-goz="' + id + '" aria-label="Şifreyi göster">👁️</button></div>';
  }
  function gozleriBagla() {
    kart.querySelectorAll('[data-goz]').forEach(b => b.onclick = () => { const i = $k(b.dataset.goz); i.type = i.type === 'password' ? 'text' : 'password'; b.textContent = i.type === 'password' ? '👁️' : '🙈'; });
  }
  const kapatBtn = () => '<button type="button" class="hs-kapat" data-kapat aria-label="Kapat">✕</button>';
  function ortakKutu() { return '<label class="hs-kutu"><input type="checkbox" id="hs-ortak"> <span>Bu <b>ortak bir cihaz</b> (akıllı tahta, okul bilgisayarı). Sayfa kapanınca çıkış yapılsın.</span></label>'; }
  function bagla() {
    gozleriBagla();
    const k = kart.querySelector('[data-kapat]'); if (k) k.onclick = kapat;
  }
  async function calistir(btn, metin, is) {
    const h = $k('hs-hata'); h.textContent = ''; const eski = btn.textContent;
    btn.disabled = true; btn.textContent = metin; kart.dataset.kilit = '1';
    try { await is(); } catch (e) {
      console.warn('[hesap]', e);
      if (kart.contains(h)) h.textContent = hataMetni(e); else ekranBilgi('⚠️ Bir sorun oldu', hataMetni(e));
    } finally { btn.disabled = false; btn.textContent = eski; if (kart.dataset.ekran !== 'kod') delete kart.dataset.kilit; }
  }

  function ekranGiris(sekme) {
    kart.dataset.ekran = 'giris';
    const uye = sekme === 'uye';
    kart.innerHTML = kapatBtn() +
      '<h2>☁️ İlerlemeni Kaydet</h2>' +
      '<p>Üye olursan oyunlardaki ilerlemen hesabında saklanır. Başka bir cihazdan girince kaldığın yerden devam edersin. Üye olmadan da bütün oyunlar ücretsiz! 🎮</p>' +
      '<div class="hs-sekme" role="tablist"><button type="button" data-sekme="giris" class="' + (uye ? '' : 'secili') + '">Giriş Yap</button><button type="button" data-sekme="uye" class="' + (uye ? 'secili' : '') + '">Üye Ol</button></div>' +
      (uye
        ? '<label class="hs-alan" for="hs-ad">Adın</label><input type="text" id="hs-ad" maxlength="20" autocomplete="given-name" placeholder="Örn. Ayşe">' +
          '<label class="hs-alan" for="hs-kullanici">Kullanıcı adı</label><input type="text" id="hs-kullanici" maxlength="20" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="Örn. ayse2a"><div class="hs-ipucu">Harf ve rakam, en az 3 karakter. Türkçe harfler otomatik düzelir (ş → s).</div>' +
          sifreAlani('hs-sifre', 'Şifre', 'new-password') + '<div class="hs-ipucu">En az 6 karakter.</div>' +
          sifreAlani('hs-sifre2', 'Şifre (tekrar)', 'new-password') +
          ortakKutu() +
          '<label class="hs-kutu"><input type="checkbox" id="hs-veli"> <span><b>Velimle birlikte üye oluyorum.</b> <button type="button" class="hs-link" id="hs-kvkk-ac" style="margin:0;padding:0;font-size:.86rem">Bilgilendirme metni</button></span></label>' +
          '<div class="hs-kvkk" id="hs-kvkk" hidden>' +
            '<b>Kişisel verilerin korunması hakkında bilgilendirme</b><br>' +
            'Veri sorumlusu: Sinan İnce (sinanince.com).<br>' +
            'Toplanan bilgiler: çocuğun adı, seçtiği kullanıcı adı ve oyunlardaki ilerleme kayıtları. E-posta, soyad, okul ya da telefon <b>istenmez</b>.<br>' +
            'Amaç: yalnızca oyun ilerlemesini saklamak ve başka cihazdan devam edebilmek. Reklam, satış ya da üçüncü kişilerle paylaşım yoktur.<br>' +
            'Saklama: Google Firebase altyapısında (sunucular yurt dışında olabilir).<br>' +
            'Haklarınız: Hesap sayfasındaki “Hesabımı sil” düğmesiyle tüm bilgiler kalıcı olarak silinir. Sorularınız için “Hakkımda” sayfasındaki iletişim bilgilerini kullanabilirsiniz.' +
          '</div>' +
          '<div class="hs-hata" id="hs-hata" role="alert"></div>' +
          '<button type="button" class="hs-ana" id="hs-git">🚀 Üye Ol</button>'
        : '<label class="hs-alan" for="hs-kullanici">Kullanıcı adı</label><input type="text" id="hs-kullanici" maxlength="20" autocomplete="username" autocapitalize="none" spellcheck="false">' +
          sifreAlani('hs-sifre', 'Şifre', 'current-password') +
          ortakKutu() +
          '<div class="hs-hata" id="hs-hata" role="alert"></div>' +
          '<button type="button" class="hs-ana" id="hs-git">Giriş Yap</button>' +
          '<button type="button" class="hs-link" id="hs-unuttum">Şifremi unuttum</button>');
    bagla();
    kart.querySelectorAll('[data-sekme]').forEach(b => b.onclick = () => ekranGiris(b.dataset.sekme));
    if (uye) {
      $k('hs-kvkk-ac').onclick = e => { e.preventDefault(); $k('hs-kvkk').hidden = !$k('hs-kvkk').hidden; };
      $k('hs-git').onclick = function () {
        const h = $k('hs-hata');
        const ad = $k('hs-ad').value.trim().replace(/\s+/g, ' ').slice(0, 20);
        const k = kullaniciAdiDuzelt($k('hs-kullanici').value), s = $k('hs-sifre').value, s2 = $k('hs-sifre2').value;
        if (ad.length < 2) return (h.textContent = 'Adını yazar mısın? 🙂');
        if (!kullaniciAdiGecerli(k)) return (h.textContent = 'Kullanıcı adı 3–20 karakter olmalı; harf, rakam, nokta ya da alt çizgi kullanabilirsin.');
        if (s.length < 6) return (h.textContent = 'Şifre en az 6 karakter olmalı.');
        if (s !== s2) return (h.textContent = 'İki şifre aynı değil.');
        if (!$k('hs-veli').checked) return (h.textContent = 'Üye olmak için velinden onay almalısın. Kutuyu işaretler misin?');
        const ortak = $k('hs-ortak').checked;
        calistir(this, 'Hesap açılıyor…', async () => { const kod = await kayitOl(ad, k, s, ortak); ekranKod(kod, 'Hoş geldin, ' + ad + '! 🎉'); });
      };
    } else {
      $k('hs-unuttum').onclick = ekranKurtar;
      $k('hs-git').onclick = function () {
        const h = $k('hs-hata');
        const k = kullaniciAdiDuzelt($k('hs-kullanici').value), s = $k('hs-sifre').value;
        if (!k || !s) return (h.textContent = 'Kullanıcı adını ve şifreni yazar mısın?');
        const ortak = $k('hs-ortak').checked;
        calistir(this, 'Giriş yapılıyor…', async () => { await girisYap(k, s, ortak); kapat(); arayuzGuncelle(); });
      };
      $k('hs-sifre').addEventListener('keydown', e => { if (e.key === 'Enter') $k('hs-git').click(); });
    }
    setTimeout(() => { const i = kart.querySelector('input[type=text]'); if (i) i.focus(); }, 50);
  }

  function ekranKurtar() {
    kart.dataset.ekran = 'kurtar';
    kart.innerHTML = kapatBtn() +
      '<h2>🔑 Şifremi Unuttum</h2>' +
      '<p>Üye olurken sana verilen <b>kurtarma kodunu</b> yaz, sonra yeni bir şifre seç.</p>' +
      '<label class="hs-alan" for="hs-kullanici">Kullanıcı adı</label><input type="text" id="hs-kullanici" maxlength="20" autocapitalize="none" spellcheck="false">' +
      '<label class="hs-alan" for="hs-kod">Kurtarma kodu</label><input type="text" id="hs-kod" maxlength="11" autocapitalize="characters" spellcheck="false" placeholder="ABCD-2345" style="letter-spacing:2px;text-transform:uppercase">' +
      sifreAlani('hs-sifre', 'Yeni şifre', 'new-password') +
      sifreAlani('hs-sifre2', 'Yeni şifre (tekrar)', 'new-password') +
      ortakKutu() +
      '<div class="hs-hata" id="hs-hata" role="alert"></div>' +
      '<button type="button" class="hs-ana" id="hs-git">Şifremi Yenile</button>' +
      '<button type="button" class="hs-link" id="hs-geri">← Girişe dön</button>' +
      '<div class="hs-kucuk">Kodu da kaybettiysen öğretmenine haber ver.</div>';
    bagla();
    $k('hs-geri').onclick = () => ekranGiris('giris');
    $k('hs-git').onclick = function () {
      const h = $k('hs-hata');
      const k = kullaniciAdiDuzelt($k('hs-kullanici').value), kod = kodDuzelt($k('hs-kod').value), s = $k('hs-sifre').value, s2 = $k('hs-sifre2').value;
      if (!k) return (h.textContent = 'Kullanıcı adını yazar mısın?');
      if (!/^[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(kod)) return (h.textContent = 'Kurtarma kodu 8 karakter olmalı (ör. ABCD-2345).');
      if (s.length < 6) return (h.textContent = 'Şifre en az 6 karakter olmalı.');
      if (s !== s2) return (h.textContent = 'İki şifre aynı değil.');
      const ortak = $k('hs-ortak').checked;
      calistir(this, 'Kontrol ediliyor…', async () => { await sifreKurtar(k, kod, s, ortak); ekranBilgi('✅ Şifren yenilendi', 'Giriş yaptın. Kurtarma kodun aynı kaldı, saklamaya devam et.'); });
    };
  }

  function ekranKod(kod, baslik) {
    kart.dataset.ekran = 'kod'; kart.dataset.kilit = '1';
    const d = durumAl() || {};
    kart.innerHTML =
      '<h2>' + esc(baslik) + '</h2>' +
      '<p>Bu senin <b>kurtarma kodun</b>. Şifreni unutursan bu kodla yeni şifre alırsın. <b>Velinle birlikte bir yere yaz</b> ya da yazdır. Bu kodu bir daha gösteremeyiz.</p>' +
      '<div class="hs-kod" id="hs-kodyazi">' + esc(kod) + '</div>' +
      '<p style="text-align:center;margin:0">Kullanıcı adın: <b>' + esc(d.kullanici || '') + '</b></p>' +
      '<button type="button" class="hs-ikinci" id="hs-yazdir">🖨️ Yazdır</button>' +
      '<label class="hs-kutu"><input type="checkbox" id="hs-yazdim"> <span>Kodu bir yere yazdım.</span></label>' +
      '<div class="hs-hata" id="hs-hata"></div>' +
      '<button type="button" class="hs-ana" id="hs-git" disabled>Oyunlara Dön 🎮</button>';
    $k('hs-yazdim').onchange = e => { $k('hs-git').disabled = !e.target.checked; };
    $k('hs-git').onclick = () => { kapat(); arayuzGuncelle(); };
    $k('hs-yazdir').onclick = () => yazdir(d.ad, d.kullanici, kod);
  }

  function yazdir(ad, kullanici, kod) {
    const w = window.open('', '_blank', 'width=520,height=640');
    if (!w) { $k('hs-hata').textContent = 'Yazdırma penceresi açılamadı. Kodu bir kâğıda yazar mısın?'; return; }
    w.document.write('<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8"><title>Kurtarma kodu</title><style>body{font-family:Arial,sans-serif;padding:30px;color:#222}.k{border:3px dashed #999;border-radius:16px;padding:24px;max-width:380px}.kod{font:bold 34px "Courier New",monospace;letter-spacing:4px;margin:12px 0}</style></head><body><div class="k"><h2 style="margin-top:0">Sinan Öğretmen Akademi</h2><p>Öğrenci: <b>' + esc(ad) + '</b><br>Kullanıcı adı: <b>' + esc(kullanici) + '</b></p><p>Kurtarma kodu:</p><div class="kod">' + esc(kod) + '</div><p style="font-size:13px">Şifre unutulursa sinanince.com → Giriş Yap → “Şifremi unuttum” bölümünde bu kodla yeni şifre alınır. Kodu kimseyle paylaşmayın.</p></div><script>window.onload=function(){window.print()}<\/script></body></html>');
    w.document.close();
  }

  function ekranBilgi(baslik, metin) {
    kart.dataset.ekran = 'bilgi';
    kart.innerHTML = kapatBtn() + '<h2>' + esc(baslik) + '</h2><p>' + esc(metin) + '</p><button type="button" class="hs-ana" id="hs-git">Tamam</button>';
    bagla(); $k('hs-git').onclick = () => { kapat(); arayuzGuncelle(); };
  }

  function ekranProfil() {
    kart.dataset.ekran = 'profil';
    const d = durumAl(); if (!d) return ekranGiris('giris');
    kart.innerHTML = kapatBtn() +
      '<h2>Merhaba ' + esc(d.ad) + ' 👋</h2>' +
      '<p>Kullanıcı adın: <b>' + esc(d.kullanici) + '</b>' + (d.ortak ? '<br>🏫 Ortak cihaz: sayfa kapanınca çıkış yapılacak.' : '') + '</p>' +
      '<div id="hs-senk" class="hs-durum"></div>' +
      '<div class="hs-hata" id="hs-hata" role="alert"></div>' +
      '<button type="button" class="hs-ikinci" id="hs-simdi">🔄 Şimdi kaydet</button>' +
      '<button type="button" class="hs-ikinci" id="hs-sifredegis">🔑 Şifremi değiştir</button>' +
      '<button type="button" class="hs-ana" id="hs-cikis">🚪 Çıkış Yap</button>' +
      '<button type="button" class="hs-link" id="hs-sil" style="display:block;margin:14px auto 0;color:#E0245E">Hesabımı sil</button>';
    bagla(); senkKutu($k('hs-senk'));
    $k('hs-simdi').onclick = function () { calistir(this, 'Kaydediliyor…', async () => { await cek(false); const ok = await gonder(); if (!ok) throw { code: 'auth/network-request-failed' }; }); };
    $k('hs-sifredegis').onclick = ekranSifreDegis;
    $k('hs-sil').onclick = ekranSil;
    $k('hs-cikis').onclick = function () {
      calistir(this, 'Kaydediliyor…', async () => {
        if (await cikisYap(false)) return kapat();
        const zorla = await sor('İlerlemen şu an kaydedilemedi.', 'İnternet bağlantısı yok gibi görünüyor. Yine de çıkarsan bu cihazdaki son ilerlemen kaybolabilir.', 'Yine de çık', 'Vazgeç');
        if (zorla) { await cikisYap(true); kapat(); } else ekranProfil();
      });
    };
  }

  function ekranSifreDegis() {
    kart.dataset.ekran = 'sifre';
    kart.innerHTML = kapatBtn() +
      '<h2>🔑 Şifremi Değiştir</h2><p>Şifreni değiştirince sana <b>yeni bir kurtarma kodu</b> verilir; eski kod geçersiz olur.</p>' +
      sifreAlani('hs-eski', 'Şu anki şifren', 'current-password') +
      sifreAlani('hs-sifre', 'Yeni şifre', 'new-password') +
      sifreAlani('hs-sifre2', 'Yeni şifre (tekrar)', 'new-password') +
      '<div class="hs-hata" id="hs-hata" role="alert"></div>' +
      '<button type="button" class="hs-ana" id="hs-git">Değiştir</button><button type="button" class="hs-link" id="hs-geri">← Geri</button>';
    bagla(); $k('hs-geri').onclick = ekranProfil;
    $k('hs-git').onclick = function () {
      const h = $k('hs-hata'), e = $k('hs-eski').value, s = $k('hs-sifre').value, s2 = $k('hs-sifre2').value;
      if (!e) return (h.textContent = 'Şu anki şifreni yazar mısın?');
      if (s.length < 6) return (h.textContent = 'Yeni şifre en az 6 karakter olmalı.');
      if (s !== s2) return (h.textContent = 'İki şifre aynı değil.');
      calistir(this, 'Değiştiriliyor…', async () => { const kod = await sifreDegistir(e, s); ekranKod(kod, '✅ Şifren değişti'); });
    };
  }

  function ekranSil() {
    kart.dataset.ekran = 'sil';
    kart.innerHTML = kapatBtn() +
      '<h2>Hesabımı Sil</h2><p>Hesabın, adın ve buluttaki bütün oyun ilerlemen <b>kalıcı olarak</b> silinir. Bu işlem geri alınamaz.</p>' +
      sifreAlani('hs-eski', 'Onaylamak için şifren', 'current-password') +
      '<div class="hs-hata" id="hs-hata" role="alert"></div>' +
      '<button type="button" class="hs-ikinci hs-tehlike" id="hs-git">Evet, hesabımı sil</button><button type="button" class="hs-link" id="hs-geri">← Vazgeç</button>';
    bagla(); $k('hs-geri').onclick = ekranProfil;
    $k('hs-git').onclick = function () {
      const s = $k('hs-eski').value; if (!s) return ($k('hs-hata').textContent = 'Şifreni yazar mısın?');
      calistir(this, 'Siliniyor…', async () => { await hesapSil(s); ekranBilgi('Hesabın silindi', 'Bütün bilgilerin silindi. Oyunları misafir olarak oynamaya devam edebilirsin.'); });
    };
  }

  // Evet/Hayır sorusu (Promise döner)
  function sor(baslik, metin, evet, hayir) {
    return new Promise(coz => {
      const onceki = ov.classList.contains('acik');
      sorCoz = coz; kart.dataset.ekran = 'soru';
      kart.innerHTML = '<h2>' + esc(baslik) + '</h2><p>' + esc(metin) + '</p><button type="button" class="hs-ana" id="hs-evet">' + esc(evet) + '</button><button type="button" class="hs-ikinci" id="hs-hayir">' + esc(hayir) + '</button>';
      ov.classList.add('acik');
      const bitir = v => { if (sorCoz !== coz) return; sorCoz = null; if (!onceki) { ov.classList.remove('acik'); kart.innerHTML = ''; } coz(v); };
      $k('hs-evet').onclick = () => bitir(true);
      $k('hs-hayir').onclick = () => bitir(false);
    });
  }

  // --------------------------------------------------------------------------
  // I) OLAYLAR VE BAŞLANGIÇ
  // --------------------------------------------------------------------------
  // Oyun (iframe) localStorage'a yazınca bu sayfaya "storage" olayı gelir
  window.addEventListener('storage', e => {
    if (!aktifUid || e.storageArea !== localStorage) return;
    if (e.key === null || oyunAnahtari(e.key)) { tara(); zamanla(); }
  });
  document.addEventListener('visibilitychange', () => {
    if (!aktifUid) return;
    if (document.visibilityState === 'hidden') gonder();
    else if (Date.now() - sonCekmeAni > 120000) cek(false);
  });
  window.addEventListener('pagehide', () => { if (aktifUid) gonder(); });
  setInterval(() => { if (aktifUid && tara()) zamanla(); }, 60000); // güvenlik ağı

  function baslat() {
    let d = durumAl();
    // Ortak cihazda sekme kapanmışsa: önceki öğrencinin verisini hemen temizle
    if (d && d.ortak && !ssAl(OTURUM)) { yerelTemizle(); d = null; }
    // Yarım kalmış bir oturum (durum yok ama meta var) → temizle
    if (!d && lsAl(META)) yerelTemizle();
    arayuzKur();
    if (d) { senkGoster(Object.values(metaAl().kayit).some(e => e.kirli) ? 'kaydediliyor' : 'kayitli'); oturumuIzle(); }
  }

  window.Hesap = {
    firebase: fbYukle,
    girisli,
    ac,
    // Oyun açılmadan önce buluttaki son ilerlemeyi indir (en fazla 1,5 sn bekle)
    oyunOncesi() {
      if (!aktifUid) {
        // Giriş var ama ilk eşitleme sürüyorsa en fazla 2 sn bekle
        return girisli() && ilkSoz ? Promise.race([ilkSoz, bekle(2000)]) : Promise.resolve();
      }
      const is = Date.now() - sonCekmeAni > 120000 ? cek(false) : cekmeSoz;
      return is ? Promise.race([is, bekle(1500)]) : Promise.resolve();
    },
    oyunKapandi() { if (aktifUid) { tara(); gonder(); } },
    // test için
    _ic: { tara, gonder, cek, girisSonrasi, yerelTemizle, metaAl, oyunAnahtari, ozet, kodUret, kodDuzelt, kasaKilitle, kasaAc, kullaniciAdiDuzelt, kullaniciAdiGecerli, kayitOl, girisYap, sifreKurtar, cikisYap, hesapSil, sifreDegistir }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', baslat); else baslat();
})();

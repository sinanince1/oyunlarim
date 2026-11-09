/* 10 Kasım anma açılışı — sinanince.com
   Sadece 10 Kasım'da, tarayıcı oturumu başına bir kez görünür.
   Deneme için: index.html?anma=1
   Fotoğraf eklemek için: RESIM'e dosya adını yazın (ör. 'ataturk.jpg'), dosyayı repoya koyun.
   Dosya yoksa animasyon fotoğrafsız düzende çalışır.
   Sinan İnce 2026 */
(function () {
  'use strict';
  var RESIM = 'ataturk.jpg';
  var OTOMATIK_KAPANMA_MS = 22000;

  var zorla = /[?&]anma=1\b/.test(location.search);
  var d = new Date();
  if (!zorla && !(d.getMonth() === 10 && d.getDate() === 10)) return;
  try { if (!zorla && sessionStorage.getItem('anma10kasim') === '1') return; } catch (e) {}

  var yil = d.getFullYear() - 1938;
  var azHareket = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Bayrak geometrisi (Türk Bayrağı Kanunu oranları, G = 100)
  function yildiz(cx, cy, R) {
    var r = R * Math.cos(Math.PI * 2 / 5) / Math.cos(Math.PI / 5), p = [];
    for (var i = 0; i < 10; i++) {
      var a = Math.PI + i * Math.PI / 5, rr = i % 2 ? r : R;
      p.push((cx + rr * Math.cos(a)).toFixed(2) + ',' + (cy + rr * Math.sin(a)).toFixed(2));
    }
    return p.join(' ');
  }
  var bayrak =
    '<svg class="ak-direk" viewBox="0 0 200 620" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="akDirekG" x1="0" x2="1"><stop offset="0" stop-color="#8d8d96"/><stop offset=".45" stop-color="#f1f1f4"/><stop offset="1" stop-color="#6c6c75"/></linearGradient>' +
        '<radialGradient id="akTopuz" cx=".35" cy=".35"><stop offset="0" stop-color="#fff3c4"/><stop offset=".5" stop-color="#e2b543"/><stop offset="1" stop-color="#8a6516"/></radialGradient>' +
        '<linearGradient id="akParilti" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".18"/><stop offset=".3" stop-color="#fff" stop-opacity=".14"/><stop offset=".55" stop-color="#000" stop-opacity=".16"/><stop offset=".8" stop-color="#fff" stop-opacity=".1"/><stop offset="1" stop-color="#000" stop-opacity=".2"/></linearGradient>' +
        '<clipPath id="akKes"><rect x="0" y="0" width="150" height="100"/></clipPath>' +
      '</defs>' +
      '<rect x="22" y="22" width="9" height="590" rx="4" fill="url(#akDirekG)"/>' +
      '<circle cx="26.5" cy="16" r="11" fill="url(#akTopuz)"/>' +
      '<rect x="12" y="604" width="29" height="10" rx="3" fill="#55555d"/>' +
      '<g class="ak-bayrak-konum"><g class="ak-bayrak" transform="translate(31 0)">' +
        '<g clip-path="url(#akKes)">' +
          '<rect width="150" height="100" fill="#E30A17"/>' +
          '<circle cx="50" cy="50" r="25" fill="#fff"/>' +
          '<circle cx="56.25" cy="50" r="20" fill="#E30A17"/>' +
          '<polygon fill="#fff" points="' + yildiz(82.08, 50, 12.5) + '"/>' +
          '<rect class="ak-dalga" x="-150" width="450" height="100" fill="url(#akParilti)"/>' +
        '</g>' +
      '</g></g>' +
    '</svg>';

  var css =
    '#akAnma{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;overflow:hidden;' +
      'background:radial-gradient(ellipse at 50% 45%,#1d1d24 0%,#0c0c10 60%,#050507 100%);color:#f4efe6;' +
      'font-family:Nunito,system-ui,sans-serif;opacity:0;transition:opacity 1.2s ease}' +
    '#akAnma.ak-acik{opacity:1}#akAnma.ak-kapan{opacity:0;transition:opacity 1.1s ease}' +
    '#akAnma *{box-sizing:border-box}' +
    '.ak-toz{position:absolute;inset:0;pointer-events:none}' +
    '.ak-toz i{position:absolute;bottom:-10px;width:3px;height:3px;border-radius:50%;background:#fff;opacity:0;animation:akToz linear infinite}' +
    '@keyframes akToz{0%{transform:translateY(0);opacity:0}15%{opacity:.35}85%{opacity:.25}100%{transform:translateY(-105vh);opacity:0}}' +
    '.ak-sahne{position:relative;display:flex;align-items:center;justify-content:center;gap:clamp(18px,5vw,70px);width:min(1150px,94vw);padding:20px}' +
    '.ak-direk{height:min(78vh,620px);width:auto;flex:0 0 auto;opacity:0;animation:akBelir 1.2s .4s ease forwards}' +
    '.ak-bayrak-konum{transform:translateY(22px);animation:akIndir 3.6s 1.4s cubic-bezier(.45,.05,.3,1) forwards}' +
    '@keyframes akIndir{to{transform:translateY(250px)}}' +
    '.ak-bayrak{transform-box:fill-box;transform-origin:0 50%;animation:akSalin 4.5s ease-in-out infinite}' +
    '@keyframes akSalin{0%,100%{transform:translate(31px,0) skewY(0deg) scaleX(1)}50%{transform:translate(31px,0) skewY(2.2deg) scaleX(.97)}}' +
    '.ak-dalga{animation:akDalga 3.2s linear infinite}@keyframes akDalga{to{transform:translateX(150px)}}' +
    '.ak-metin{flex:1 1 auto;max-width:640px;text-align:center;display:flex;flex-direction:column;align-items:center}' +
    '.ak-foto{display:none;flex:0 0 auto;height:min(64vh,500px);aspect-ratio:278/400;' +
      '-webkit-mask-image:radial-gradient(ellipse 50% 50% at 50% 50%,#000 48%,transparent 88%);mask-image:radial-gradient(ellipse 50% 50% at 50% 50%,#000 48%,transparent 88%)}' +
    '.ak-foto.var{display:block}' +
    '.ak-foto img{display:block;width:100%;height:100%;object-fit:cover;filter:sepia(.25) saturate(.8) contrast(1.05);animation:akYakin 22s ease-out forwards}' +
    '@keyframes akYakin{from{transform:scale(1.12)}to{transform:scale(1)}}' +
    '.ak-s{opacity:0;transform:translateY(14px);animation:akYukari 1.4s ease forwards}' +
    '@keyframes akYukari{to{opacity:1;transform:none}}@keyframes akBelir{to{opacity:1}}' +
    '.ak-tarih{font-weight:800;letter-spacing:.32em;font-size:clamp(.8rem,1.6vw,1.05rem);color:#e2b543;text-transform:uppercase}' +
    '.ak-cizgi{width:0;height:2px;margin:clamp(10px,2vh,18px) 0;background:linear-gradient(90deg,transparent,#E30A17,transparent);animation:akCiz 1.6s ease forwards}' +
    '@keyframes akCiz{to{width:min(360px,70%)}}' +
    '.ak-isim{font-family:Georgia,"Times New Roman",serif;font-weight:400;font-size:clamp(1.9rem,5.4vw,3.8rem);line-height:1.1;letter-spacing:.01em;margin:0;color:#fff;text-shadow:0 2px 30px rgba(255,255,255,.12)}' +
    '.ak-yazi{font-size:clamp(1rem,2.2vw,1.4rem);line-height:1.55;font-weight:600;color:#ddd6ca;margin:clamp(10px,2vh,18px) 0 0}' +
    '.ak-yazi b{color:#fff;font-weight:800}' +
    '.ak-soz{font-family:Georgia,"Times New Roman",serif;font-style:italic;font-size:clamp(.95rem,1.9vw,1.2rem);line-height:1.6;color:#bdb5a8;margin:clamp(16px,3.4vh,30px) 0 0;max-width:520px}' +
    '.ak-soz span{display:block;font-style:normal;font-family:Nunito,system-ui,sans-serif;font-weight:800;font-size:.8em;letter-spacing:.12em;color:#e2b543;margin-top:8px}' +
    '.ak-gir{margin-top:clamp(18px,3.6vh,32px);font:800 clamp(1rem,1.8vw,1.15rem) Nunito,system-ui,sans-serif;color:#fff;background:rgba(255,255,255,.06);' +
      'border:1.5px solid rgba(255,255,255,.35);border-radius:999px;padding:12px 30px;cursor:pointer;transition:background .25s,border-color .25s}' +
    '.ak-gir:hover,.ak-gir:focus-visible{background:#E30A17;border-color:#E30A17;outline:none}' +
    '.ak-gec{position:absolute;top:16px;right:18px;font:700 .85rem Nunito,system-ui,sans-serif;color:rgba(255,255,255,.55);background:none;border:0;cursor:pointer;padding:8px 10px;opacity:0;animation:akBelir .8s 1.5s forwards}' +
    '.ak-gec:hover{color:#fff}' +
    '.ak-imza{position:absolute;bottom:14px;left:0;right:0;text-align:center;font-weight:700;font-size:.8rem;letter-spacing:.14em;color:rgba(255,255,255,.3);opacity:0;animation:akBelir 1.5s 9s forwards}' +
    '@media (max-width:720px){.ak-sahne{flex-direction:column;gap:6px}.ak-direk{height:30vh}}' +
    '@media (max-width:720px) and (max-height:700px){.ak-soz{display:none}}' +
    '@media (max-width:720px){#akAnma:has(.ak-foto.var) .ak-sahne{display:grid;grid-template-columns:auto auto;grid-template-areas:"d f" "m m";justify-content:center;align-items:end;column-gap:4px}' +
      '#akAnma:has(.ak-foto.var) .ak-direk{grid-area:d;height:28vh}.ak-foto{grid-area:f;height:28vh}.ak-metin{grid-area:m}#akAnma:has(.ak-foto.var) .ak-soz{display:none}#akAnma:has(.ak-foto.var) .ak-yazi{font-size:1rem}}' +
    '@media (min-width:721px) and (max-width:1100px){#akAnma:has(.ak-foto.var) .ak-foto{height:min(46vh,380px)}#akAnma:has(.ak-foto.var) .ak-soz{display:none}#akAnma:has(.ak-foto.var) .ak-yazi{font-size:1rem}}' +
    '@media (prefers-reduced-motion:reduce){#akAnma *{animation-duration:.01s!important;animation-delay:0s!important}.ak-bayrak{animation:none}.ak-dalga,.ak-toz{display:none}}';

  function kur() {
    if (document.getElementById('akAnma')) return;
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);

    var el = document.createElement('div');
    el.id = 'akAnma';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', '10 Kasım anma');
    var toz = '';
    if (!azHareket) for (var i = 0; i < 26; i++) {
      toz += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;animation-duration:' + (14 + Math.random() * 16).toFixed(1) +
        's;animation-delay:' + (-Math.random() * 20).toFixed(1) + 's;transform:scale(' + (0.5 + Math.random()).toFixed(2) + ')"></i>';
    }
    el.innerHTML =
      '<div class="ak-toz">' + toz + '</div>' +
      '<button class="ak-gec" type="button">Geç ✕</button>' +
      '<div class="ak-sahne">' + bayrak +
        '<div class="ak-metin">' +
          '<div class="ak-s ak-tarih" style="animation-delay:2.2s">10 Kasım 1938 · 09.05</div>' +
          '<div class="ak-cizgi" style="animation-delay:2.8s"></div>' +
          '<h1 class="ak-s ak-isim" style="animation-delay:3.4s">Mustafa Kemal Atatürk</h1>' +
          '<p class="ak-s ak-yazi" style="animation-delay:5s">Cumhuriyetimizin kurucusu Ulu&nbsp;Önder\'i,<br>aramızdan ayrılışının ' + yil + '. yılında<br><b>saygı, sevgi ve minnetle anıyoruz.</b></p>' +
          '<p class="ak-s ak-soz" style="animation-delay:7.2s">“Küçük hanımlar, küçük beyler! Sizler hepiniz geleceğin bir gülü, yıldızı, bir ikbal ışığısınız.”<span>— M. KEMAL ATATÜRK</span></p>' +
          '<button class="ak-s ak-gir" type="button" style="animation-delay:9s">Siteye Gir</button>' +
        '</div>' +
        '<div class="ak-s ak-foto" style="animation-delay:1.6s"><img alt="Mustafa Kemal Atatürk"></div>' +
      '</div>' +
      '<div class="ak-imza">SİNAN ÖĞRETMEN AKADEMİ</div>';

    var img = el.querySelector('.ak-foto img');
    if (RESIM) {
      img.onload = function () { el.querySelector('.ak-foto').classList.add('var'); };
      img.src = RESIM;
    }

    var eskiTasma = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.appendChild(el);
    requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add('ak-acik'); }); });

    var kapandi = false, zaman;
    function kapat() {
      if (kapandi) return; kapandi = true;
      clearTimeout(zaman);
      try { sessionStorage.setItem('anma10kasim', '1'); } catch (e) {}
      el.classList.add('ak-kapan');
      setTimeout(function () {
        el.remove(); st.remove();
        document.documentElement.style.overflow = eskiTasma;
        document.removeEventListener('keydown', tus);
      }, 1150);
    }
    function tus(e) { if (e.key === 'Escape') kapat(); }
    el.querySelector('.ak-gir').addEventListener('click', kapat);
    el.querySelector('.ak-gec').addEventListener('click', kapat);
    document.addEventListener('keydown', tus);
    zaman = setTimeout(kapat, OTOMATIK_KAPANMA_MS);
    setTimeout(function () { try { el.querySelector('.ak-gir').focus({ preventScroll: true }); } catch (e) {} }, 9200);
  }

  if (document.body) kur();
  else document.addEventListener('DOMContentLoaded', kur);
})();

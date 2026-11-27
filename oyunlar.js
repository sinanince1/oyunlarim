/* ============================================================
   sinanince.com — OYUN VERİLERİ
   index.html bu dosyayı ana betikten ÖNCE yükler. Yeni oyun eklerken
   sadece bu dosya değişir: categories (1.–2. sınıf dersleri) ve
   hiddenCategories (3.–4. sınıf) dizileri. Her oyunda: name, file, desc,
   sinif, eklenme ("YYYY-AA-GG"), customThumb (SVG), thumbBg …
   Sinan İnce 2026
   ============================================================ */
// ============================================================
// OYUN VERİLERİ — Buraya kendi oyunlarını ekle!
// her oyun için: name, file (html dosya yolu), desc, emoji
// ============================================================
const categories = [
  {
    name: "📖 Türkçe",
    color: "#00C9A7",
    iconBg: "linear-gradient(135deg, #00C9A7, #4D9FFF)",
    lineColor: "linear-gradient(90deg, #00C9A7, #4D9FFF)",
    games: [
      {
        name: "Okyanus Kâşifi",
        file: "okyanus_kasifi.html",
        desc: "Metinleri oku, kabuk, inci ve kristal topla! Denizaltını güçlendir, derin okyanusa dal, 100 deniz canlısını keşfet. 🌊",
        sinif: "2-3. Sınıf — Okuduğunu anlama",
        beceri: "Okuduğunu anlama",
        grades: [2, 3],
        eklenme: "2026-11-22",
        isSpecial: true,
        ozelEtiket: "⭐ ÖZEL OYUN",
        thumbBg: "linear-gradient(180deg,#7EE8F2 0%,#1FA6C9 45%,#103E78 100%)",
        customThumb: `
<div class="okk-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="okkSu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EE8F2"/><stop offset=".45" stop-color="#1FA6C9"/><stop offset="1" stop-color="#103E78"/></linearGradient>
    <linearGradient id="okkIsik" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#FFF6B8" stop-opacity=".85"/><stop offset="1" stop-color="#FFF6B8" stop-opacity="0"/></linearGradient>
    <radialGradient id="okkCam" cx=".35" cy=".35" r=".8"><stop offset="0" stop-color="#E9FBFF"/><stop offset="1" stop-color="#5FC6DD"/></radialGradient>
    <radialGradient id="okkHale" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".35" stop-color="currentColor" stop-opacity=".8"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="240" height="150" fill="url(#okkSu)"/>
  <!-- güneş ışınları -->
  <g fill="#fff"><path class="okk-isin" d="M30 0 L52 0 L84 150 L44 150 Z"/><path class="okk-isin" d="M110 0 L126 0 L150 150 L118 150 Z" style="animation-delay:1.3s"/><path class="okk-isin" d="M178 0 L198 0 L232 150 L196 150 Z" style="animation-delay:2.4s"/></g>
  <!-- uzak kayalık -->
  <path d="M0 128 Q30 108 62 120 Q92 100 128 118 Q160 104 196 120 Q220 110 240 118 V150 H0 Z" fill="#0E3566" opacity=".55"/>
  <!-- yosunlar -->
  <g fill="#2BAA7C"><path class="okk-yosun" d="M14 150 Q8 128 16 112 Q22 128 18 150 Z"/><path class="okk-yosun" d="M22 150 Q22 124 30 106 Q34 128 26 150 Z" style="animation-delay:.8s"/><path class="okk-yosun" d="M214 150 Q208 126 218 110 Q224 128 220 150 Z" style="animation-delay:.4s"/><path class="okk-yosun" d="M226 150 Q226 130 234 116 Q238 132 230 150 Z" style="animation-delay:1.2s"/></g>
  <!-- deniz tabanı + mercan -->
  <path d="M0 140 Q60 130 120 138 Q180 146 240 136 V150 H0 Z" fill="#F2D59B"/>
  <g fill="#FF7B6B"><path d="M190 140 V126 M190 132 L184 124 M190 130 L197 122" stroke="#FF7B6B" stroke-width="3.4" stroke-linecap="round"/></g>
  <!-- açık kitap ve kabarcık harfler -->
  <g transform="translate(36 124)">
    <path d="M0 6 Q12 1 24 6 V18 Q12 13 0 18 Z" fill="#FFF8F0" stroke="#24508C" stroke-width="1.4"/>
    <path d="M24 6 Q36 1 48 6 V18 Q36 13 24 18 Z" fill="#FFF8F0" stroke="#24508C" stroke-width="1.4"/>
    <path d="M5 9 H19 M5 13 H17 M29 9 H43 M29 13 H41" stroke="#9CC7E6" stroke-width="1.2" stroke-linecap="round"/>
  </g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="11" text-anchor="middle"><text class="okk-harf" x="54" y="124" fill="#FFE066">A</text><text class="okk-harf" x="62" y="122" fill="#fff" style="animation-delay:1.2s">K</text><text class="okk-harf" x="50" y="120" fill="#B6F0FF" style="animation-delay:2.4s">Ş</text></g>
  <!-- parlayan, henüz keşfedilmemiş canlılar -->
  <g class="okk-parla" style="color:#FFD54A;animation-delay:.2s"><circle cx="206" cy="98" r="15" fill="url(#okkHale)"/><path d="M200 98 Q206 92 213 98 Q206 104 200 98 Z M212 98 L217 94 V102 Z" fill="#FFD54A"/></g>
  <g class="okk-parla" style="color:#C77DFF;animation-delay:.9s"><circle cx="160" cy="122" r="12" fill="url(#okkHale)"/><circle cx="160" cy="122" r="4" fill="#E2C2FF"/></g>
  <g class="okk-parla" style="color:#7CFFB2;animation-delay:1.5s"><circle cx="104" cy="112" r="11" fill="url(#okkHale)"/><path d="M99 112 Q104 107 110 112 Q104 117 99 112 Z" fill="#7CFFB2"/></g>
  <!-- geçen balık sürüsü -->
  <g class="okk-balik" fill="#FFB45C"><path d="M0 34 Q6 29 12 34 Q6 39 0 34 Z M11 34 L16 30 V38 Z"/><path d="M18 42 Q24 37 30 42 Q24 47 18 42 Z M29 42 L34 38 V46 Z"/><path d="M8 50 Q14 45 20 50 Q14 55 8 50 Z M19 50 L24 46 V54 Z"/></g>
  <!-- denizaltı -->
  <g class="okk-denizalti">
    <path d="M76 99 L2 70 L2 130 Z" fill="url(#okkIsik)" opacity=".75"/>
    <g transform="translate(62 54) scale(.3)">
      <rect x="250" y="14" width="52" height="18" rx="9" fill="#E6A817" stroke="#5A3A12" stroke-opacity=".5" stroke-width="4"/>
      <g stroke="#5A3A12" stroke-opacity=".5" stroke-width="4" stroke-linejoin="round"><rect x="250" y="20" width="14" height="70" rx="7" fill="#E6A817"/><path d="M168 92 Q176 54 214 52 L276 52 Q300 52 304 92 Z" fill="#E6A817"/></g>
      <g transform="translate(374 150)"><rect x="-8" y="-9" width="22" height="18" rx="5" fill="#E6A817"/><g class="okk-pervane"><ellipse cx="22" cy="-19" rx="8" ry="19" fill="#E6A817"/><ellipse cx="22" cy="19" rx="8" ry="19" fill="#E6A817"/></g></g>
      <path d="M40 150 A170 78 0 1 0 380 150 A170 78 0 1 0 40 150Z" fill="#FFC93C" stroke="#5A3A12" stroke-opacity=".5" stroke-width="4"/>
      <ellipse cx="170" cy="108" rx="110" ry="18" fill="#fff" opacity=".3"/>
      <g stroke="#5A3A12" stroke-opacity=".5" stroke-width="3"><circle cx="178" cy="146" r="25" fill="#E6A817"/><circle cx="238" cy="146" r="25" fill="#E6A817"/><circle cx="298" cy="146" r="25" fill="#E6A817"/></g>
      <g fill="url(#okkCam)"><circle cx="178" cy="146" r="18"/><circle cx="238" cy="146" r="18"/><circle cx="298" cy="146" r="18"/></g>
      <circle cx="86" cy="140" r="9" fill="#2B2B2B"/><circle cx="89" cy="137" r="3" fill="#fff"/>
      <circle cx="74" cy="168" r="11" fill="#FF8FA3" opacity=".55"/>
      <path d="M70 182 Q86 196 104 184" fill="none" stroke="#2B2B2B" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="48" cy="200" r="11" fill="#E6A817"/><circle cx="46" cy="200" r="7" fill="#FFE066"/>
    </g>
  </g>
  <!-- kabarcıklar -->
  <g fill="none" stroke="#fff" stroke-width="1.3"><circle class="okk-kabarcik" cx="178" cy="100" r="3"/><circle class="okk-kabarcik" cx="184" cy="96" r="2" style="animation-delay:.9s"/><circle class="okk-kabarcik" cx="174" cy="94" r="2.5" style="animation-delay:1.8s"/><circle class="okk-kabarcik" cx="182" cy="104" r="1.8" style="animation-delay:2.6s"/></g>
</svg>
</div>
`
      },
      {
        name: "Okuma Rallisi",
        file: "okuma_rallisi.html",
        desc: "Metinleri oku, soruları çöz, jeton kazan! Arabanı modifiye et, yarışlarda birinci ol, galeride herkese sergile. 🏎️",
        sinif: "2-3. Sınıf — Okuduğunu anlama",
        beceri: "Okuduğunu anlama",
        grades: [2, 3],
        eklenme: "2026-10-27",
        isSpecial: true,
        ozelEtiket: "⭐ ÖZEL OYUN",
        thumbBg: "linear-gradient(180deg,#1E1250 0%,#6D28D9 60%,#FF7A59 100%)",
        customThumb: `
<div class="orl-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="orlGok" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1E1250"/><stop offset=".55" stop-color="#6D28D9"/><stop offset="1" stop-color="#FF7A59"/></linearGradient>
    <radialGradient id="orlGunes" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFE38A"/><stop offset=".5" stop-color="#FFB15C" stop-opacity=".6"/><stop offset="1" stop-color="#FF7A59" stop-opacity="0"/></radialGradient>
    <linearGradient id="orlYol" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B3F5C"/><stop offset="1" stop-color="#1F2240"/></linearGradient>
    <pattern id="orlBorduur" width="16" height="6" patternUnits="userSpaceOnUse"><rect width="8" height="6" fill="#EF4444"/><rect x="8" width="8" height="6" fill="#fff"/></pattern>
    <pattern id="orlDama" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#fff"/><rect width="4" height="4" fill="#1F2340"/><rect x="4" y="4" width="4" height="4" fill="#1F2340"/></pattern>
  </defs>
  <rect width="240" height="150" fill="url(#orlGok)"/>
  <circle class="orl-gunes" cx="168" cy="92" r="46" fill="url(#orlGunes)"/>
  <g fill="#fff"><circle class="orl-yildiz" cx="18" cy="14" r="1.3"/><circle class="orl-yildiz" cx="96" cy="10" r="1.1" style="animation-delay:.9s"/><circle class="orl-yildiz" cx="140" cy="22" r="1.4" style="animation-delay:1.6s"/><circle class="orl-yildiz" cx="210" cy="12" r="1.2" style="animation-delay:.4s"/><circle class="orl-yildiz" cx="74" cy="28" r="1" style="animation-delay:2.1s"/></g>
  <!-- kayan şehir silüeti -->
  <g class="orl-sehir" fill="#2A1A66" opacity=".85">
    <path d="M0 104 V84 h14 v-10 h10 v16 h12 V70 h16 v34 h10 V80 h14 v-8 h8 v32 h12 V88 h18 v16 h12 V76 h14 v28 h10 V82 h16 v22 h12 V72 h14 v32 h14 V86 h14 v18 Z"/>
    <path transform="translate(240 0)" d="M0 104 V84 h14 v-10 h10 v16 h12 V70 h16 v34 h10 V80 h14 v-8 h8 v32 h12 V88 h18 v16 h12 V76 h14 v28 h10 V82 h16 v22 h12 V72 h14 v32 h14 V86 h14 v18 Z"/>
  </g>
  <!-- kitap: sayfası çevrilir, harfler uçar -->
  <g transform="translate(14 44)">
    <path d="M0 14 Q15 8 30 14 V36 Q15 30 0 36 Z" fill="#FFF8F0" stroke="#7C3AED" stroke-width="1.6"/>
    <path d="M30 14 Q45 8 60 14 V36 Q45 30 30 36 Z" fill="#FFF8F0" stroke="#7C3AED" stroke-width="1.6"/>
    <g stroke="#C4B5FD" stroke-width="1.3" stroke-linecap="round"><path d="M6 19 H24 M6 24 H22 M6 29 H24 M36 19 H54 M36 24 H52"/></g>
    <path class="orl-sayfa" d="M30 14 Q45 8 60 14 V36 Q45 30 30 36 Z" fill="#FFE9F2" stroke="#7C3AED" stroke-width="1.6"/>
  </g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="1000" font-size="14" text-anchor="middle"><text class="orl-harf" x="40" y="40" style="animation-delay:0s" fill="#FFD600">A</text><text class="orl-harf" x="46" y="36" style="animation-delay:0.7s" fill="#fff">B</text><text class="orl-harf" x="36" y="34" style="animation-delay:1.4s" fill="#7DE3FF">Ç</text><text class="orl-harf" x="44" y="42" style="animation-delay:2.1s" fill="#FFB3D1">R</text></g>
  <!-- bitiş bayrağı -->
  <line x1="222" y1="34" x2="222" y2="106" stroke="#E5E7EB" stroke-width="2.4" stroke-linecap="round"/>
  <rect class="orl-bayrak" x="196" y="35" width="26" height="17" fill="url(#orlDama)" stroke="#1F2340" stroke-width=".8"/>
  <!-- yol -->
  <rect y="104" width="240" height="46" fill="url(#orlYol)"/>
  <rect class="orl-bordur" x="-16" y="101" width="272" height="5" fill="url(#orlBorduur)"/>
  <line class="orl-serit" x1="-30" y1="142" x2="270" y2="142" stroke="#FFD600" stroke-width="2.6" stroke-dasharray="14 12"/>
  <!-- toplanacak nitro yıldızı -->
  <g class="orl-odul"><circle cx="0" cy="0" r="7" fill="#3B82F6" stroke="#fff" stroke-width="1.6"/><path d="M0 -4 L1.2 -1.2 L4 -1 L1.8 0.9 L2.5 3.8 L0 2.2 L-2.5 3.8 L-1.8 0.9 L-4 -1 L-1.2 -1.2 Z" fill="#FFD600"/></g>
  <!-- hız çizgileri -->
  <g stroke="#fff" stroke-linecap="round" opacity=".8"><line class="orl-hiz" x1="6" y1="96" x2="40" y2="96" stroke-width="2.4"/><line class="orl-hiz" x1="0" y1="110" x2="38" y2="110" stroke-width="2.8" style="animation-delay:.25s"/><line class="orl-hiz" x1="14" y1="84" x2="42" y2="84" stroke-width="2" style="animation-delay:.5s"/><line class="orl-hiz" x1="4" y1="122" x2="30" y2="122" stroke-width="2" style="animation-delay:.6s"/></g>
  <!-- araba -->
  <g class="orl-araba"><g transform="translate(40 69) scale(.38)"> <defs><linearGradient id="orl3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient> <clipPath id="orl0"><path d="M24 124 L24 104 Q26 94 40 92 L126 84 L176 60 Q190 54 214 54 L250 56 Q270 58 290 72 L382 104 Q394 108 394 118 L394 128 Q394 136 384 136 L34 136 Q24 136 24 128 Z"/></clipPath><clipPath id="orl1"><path d="M182 80 L198 64 Q208 60 222 60 L248 62 Q264 64 280 78 L282 82 Z"/></clipPath></defs> <ellipse cx="208" cy="162" rx="182" ry="9" fill="#000" opacity=".22"/> <rect x="-20" y="118" width="26" height="2.7" rx="1.3" fill="#EF4444"/><rect x="-20" y="120.6" width="26" height="2.7" rx="1.3" fill="#FFD600"/><rect x="-20" y="123.2" width="26" height="2.7" rx="1.3" fill="#22C55E"/><rect x="-20" y="125.8" width="26" height="2.7" rx="1.3" fill="#3B82F6"/><rect x="-20" y="128.4" width="26" height="2.7" rx="1.3" fill="#A855F7"/><rect x="6" y="120" width="24" height="7" rx="3.5" fill="#E5E7EB" stroke="#6B7280" stroke-width="1.5"/><rect x="8" y="127.5" width="22" height="6" rx="3" fill="#E5E7EB" stroke="#6B7280" stroke-width="1.5"/><path d="M8 123 Q-4 119 -20 124 Q-4 126 -12 131 Q-2 129 8 130 Z" fill="#60A5FA" opacity=".9"/><path d="M8 124.5 Q0 123 -8 125.5 Q0 127 8 128 Z" fill="#E0F2FE"/> <path d="M24 124 L24 104 Q26 94 40 92 L126 84 L176 60 Q190 54 214 54 L250 56 Q270 58 290 72 L382 104 Q394 108 394 118 L394 128 Q394 136 384 136 L34 136 Q24 136 24 128 Z" fill="#FF4D8D"/> <g clip-path="url(#orl0)"><g fill="#fff" opacity=".6"><path d="M28.2 55.6L30.4 60.7L35.9 61.1L31.7 64.7L32.9 70.1L28.2 67.2L23.5 70.1L24.8 64.7L20.6 61.1L26.1 60.7Z"/><path d="M56.7 60.9L58.9 66.0L64.4 66.4L60.2 70.0L61.4 75.3L56.7 72.5L52.0 75.3L53.3 70.0L49.1 66.4L54.6 66.0Z"/><path d="M104.0 54.8L106.1 59.9L111.6 60.3L107.4 63.9L108.7 69.3L104.0 66.4L99.3 69.3L100.6 63.9L96.4 60.3L101.9 59.9Z"/><path d="M139.7 59.6L141.8 64.7L147.3 65.1L143.1 68.7L144.4 74.1L139.7 71.2L135.0 74.1L136.3 68.7L132.1 65.1L137.6 64.7Z"/><path d="M179.7 54.5L181.8 59.6L187.3 60.0L183.1 63.6L184.4 69.0L179.7 66.1L175.0 69.0L176.3 63.6L172.1 60.0L177.6 59.6Z"/><path d="M214.8 58.5L216.9 63.6L222.4 64.0L218.3 67.6L219.5 73.0L214.8 70.1L210.1 73.0L211.4 67.6L207.2 64.0L212.7 63.6Z"/><path d="M258.4 56.9L260.5 62.0L266.0 62.5L261.8 66.0L263.1 71.4L258.4 68.5L253.7 71.4L255.0 66.0L250.8 62.5L256.3 62.0Z"/><path d="M295.6 56.4L297.7 61.5L303.2 61.9L299.0 65.5L300.3 70.8L295.6 68.0L290.9 70.8L292.1 65.5L287.9 61.9L293.4 61.5Z"/><path d="M332.3 56.3L334.4 61.4L339.9 61.8L335.7 65.4L337.0 70.8L332.3 67.9L327.6 70.8L328.9 65.4L324.7 61.8L330.2 61.4Z"/><path d="M372.0 59.7L374.1 64.8L379.6 65.2L375.4 68.8L376.7 74.2L372.0 71.3L367.3 74.2L368.5 68.8L364.4 65.2L369.9 64.8Z"/><path d="M407.3 58.1L409.4 63.2L414.9 63.6L410.7 67.2L412.0 72.6L407.3 69.7L402.6 72.6L403.9 67.2L399.7 63.6L405.2 63.2Z"/><path d="M45.0 82.1L47.1 87.2L52.6 87.6L48.4 91.2L49.7 96.5L45.0 93.7L40.3 96.5L41.6 91.2L37.4 87.6L42.9 87.2Z"/><path d="M77.1 80.5L79.2 85.5L84.7 86.0L80.5 89.6L81.8 94.9L77.1 92.1L72.4 94.9L73.7 89.6L69.5 86.0L75.0 85.5Z"/><path d="M124.8 80.6L126.9 85.7L132.4 86.2L128.2 89.7L129.5 95.1L124.8 92.2L120.1 95.1L121.4 89.7L117.2 86.2L122.7 85.7Z"/><path d="M152.0 86.6L154.1 91.7L159.6 92.2L155.4 95.8L156.7 101.1L152.0 98.2L147.3 101.1L148.5 95.8L144.3 92.2L149.8 91.7Z"/><path d="M199.4 81.0L201.5 86.1L207.0 86.5L202.8 90.1L204.1 95.4L199.4 92.6L194.7 95.4L196.0 90.1L191.8 86.5L197.3 86.1Z"/><path d="M228.7 84.0L230.8 89.1L236.3 89.5L232.1 93.1L233.4 98.4L228.7 95.6L224.0 98.4L225.2 93.1L221.0 89.5L226.5 89.1Z"/><path d="M265.2 83.6L267.4 88.7L272.9 89.1L268.7 92.7L269.9 98.1L265.2 95.2L260.5 98.1L261.8 92.7L257.6 89.1L263.1 88.7Z"/><path d="M314.9 83.9L317.0 89.0L322.5 89.4L318.3 93.0L319.6 98.4L314.9 95.5L310.2 98.4L311.5 93.0L307.3 89.4L312.8 89.0Z"/><path d="M343.0 81.9L345.1 87.0L350.6 87.4L346.4 91.0L347.7 96.4L343.0 93.5L338.3 96.4L339.6 91.0L335.4 87.4L340.9 87.0Z"/><path d="M388.0 82.8L390.2 87.9L395.6 88.3L391.5 91.9L392.7 97.2L388.0 94.4L383.3 97.2L384.6 91.9L380.4 88.3L385.9 87.9Z"/><path d="M18.8 111.9L20.9 117.0L26.4 117.5L22.2 121.1L23.5 126.4L18.8 123.5L14.1 126.4L15.3 121.1L11.2 117.5L16.7 117.0Z"/><path d="M60.6 106.1L62.7 111.2L68.2 111.6L64.0 115.2L65.3 120.6L60.6 117.7L55.9 120.6L57.2 115.2L53.0 111.6L58.5 111.2Z"/><path d="M104.7 112.3L106.8 117.4L112.3 117.8L108.1 121.4L109.4 126.8L104.7 123.9L100.0 126.8L101.2 121.4L97.1 117.8L102.6 117.4Z"/><path d="M134.4 106.2L136.5 111.3L142.0 111.8L137.8 115.4L139.1 120.7L134.4 117.8L129.7 120.7L131.0 115.4L126.8 111.8L132.3 111.3Z"/><path d="M176.4 108.7L178.6 113.8L184.0 114.2L179.9 117.8L181.1 123.2L176.4 120.3L171.7 123.2L173.0 117.8L168.8 114.2L174.3 113.8Z"/><path d="M215.1 108.8L217.2 113.9L222.7 114.3L218.5 117.9L219.8 123.3L215.1 120.4L210.4 123.3L211.7 117.9L207.5 114.3L213.0 113.9Z"/><path d="M251.9 108.7L254.0 113.8L259.5 114.3L255.3 117.8L256.6 123.2L251.9 120.3L247.2 123.2L248.4 117.8L244.3 114.3L249.7 113.8Z"/><path d="M284.1 112.5L286.2 117.6L291.7 118.1L287.5 121.6L288.8 127.0L284.1 124.1L279.4 127.0L280.6 121.6L276.5 118.1L282.0 117.6Z"/><path d="M322.1 112.2L324.2 117.3L329.7 117.7L325.5 121.3L326.8 126.7L322.1 123.8L317.4 126.7L318.7 121.3L314.5 117.7L320.0 117.3Z"/><path d="M363.2 109.4L365.3 114.5L370.8 115.0L366.6 118.5L367.9 123.9L363.2 121.0L358.5 123.9L359.8 118.5L355.6 115.0L361.1 114.5Z"/><path d="M405.8 112.2L407.9 117.3L413.4 117.7L409.2 121.3L410.5 126.7L405.8 123.8L401.1 126.7L402.4 121.3L398.2 117.7L403.7 117.3Z"/><path d="M36.9 139.5L39.0 144.6L44.5 145.0L40.3 148.6L41.6 154.0L36.9 151.1L32.2 154.0L33.5 148.6L29.3 145.0L34.8 144.6Z"/><path d="M79.1 135.4L81.3 140.5L86.7 141.0L82.6 144.6L83.8 149.9L79.1 147.0L74.4 149.9L75.7 144.6L71.5 141.0L77.0 140.5Z"/><path d="M122.3 133.1L124.4 138.2L129.9 138.6L125.7 142.2L127.0 147.6L122.3 144.7L117.6 147.6L118.8 142.2L114.6 138.6L120.1 138.2Z"/><path d="M150.9 138.1L153.0 143.2L158.5 143.6L154.3 147.2L155.6 152.6L150.9 149.7L146.2 152.6L147.4 147.2L143.3 143.6L148.7 143.2Z"/><path d="M201.5 138.9L203.6 144.0L209.1 144.4L204.9 148.0L206.2 153.4L201.5 150.5L196.8 153.4L198.1 148.0L193.9 144.4L199.4 144.0Z"/><path d="M227.0 134.2L229.1 139.3L234.6 139.7L230.5 143.3L231.7 148.7L227.0 145.8L222.3 148.7L223.6 143.3L219.4 139.7L224.9 139.3Z"/><path d="M268.4 134.0L270.5 139.1L276.0 139.5L271.9 143.1L273.1 148.5L268.4 145.6L263.7 148.5L265.0 143.1L260.8 139.5L266.3 139.1Z"/><path d="M314.1 133.4L316.2 138.5L321.7 139.0L317.5 142.5L318.8 147.9L314.1 145.0L309.4 147.9L310.7 142.5L306.5 139.0L312.0 138.5Z"/><path d="M342.1 131.9L344.2 137.0L349.7 137.4L345.5 141.0L346.8 146.4L342.1 143.5L337.4 146.4L338.6 141.0L334.5 137.4L340.0 137.0Z"/><path d="M385.8 136.1L388.0 141.2L393.5 141.6L389.3 145.2L390.5 150.6L385.8 147.7L381.1 150.6L382.4 145.2L378.2 141.6L383.7 141.2Z"/></g><rect x="-24" y="124" width="430" height="20" fill="#000" opacity=".18"/></g> <path d="M24 124 L24 104 Q26 94 40 92 L126 84 L176 60 Q190 54 214 54 L250 56 Q270 58 290 72 L382 104 Q394 108 394 118 L394 128 Q394 136 384 136 L34 136 Q24 136 24 128 Z" fill="url(#orl3)"/> <g color="#FF4D8D"><path d="M112 100 L160 96 L150 112 L110 112 Z" fill="#000" opacity=".28"/><path d="M290 112 L370 112" stroke="#000" stroke-opacity=".15" stroke-width="2"/></g> <path d="M182 80 L198 64 Q208 60 222 60 L248 62 Q264 64 280 78 L282 82 Z" fill="#BFE6FF"/><g clip-path="url(#orl1)"><clipPath id="orl2"><circle cx="240" cy="72" r="11"/></clipPath> <circle cx="240" cy="72" r="11" fill="#FFD600" stroke="#1F2340" stroke-opacity=".4" stroke-width="1.4"/> <g clip-path="url(#orl2)"><path d="M237.79999999999998 65.4 L233.67499999999998 71.72500000000001 L236.42499999999998 71.72500000000001 L235.325 76.4 L239.725 69.80000000000001 L236.975 69.80000000000001 Z" fill="#FFD600"/></g> <path d="M240.55 68.15 Q251.22 67.82 250.67 75.08 L242.2 74.42 Z" fill="#1F2340" opacity=".85"/> <path d="M243.85 69.58 Q247.92 69.36 248.8 71.45" stroke="#fff" stroke-width="1.4" opacity=".7" fill="none"/></g><path d="M182 80 L198 64 Q208 60 222 60 L248 62 Q264 64 280 78 L282 82 Z" fill="#BFE6FF" opacity=".35" stroke="#fff" stroke-width="3" stroke-linejoin="round"/> <path d="M236 61 L236 81" stroke="#FF4D8D" stroke-width="6"/> <path d="M196 76 L208 66" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".75" fill="none"/> <path d="M236 85 L236 130" stroke="#000" stroke-opacity=".15" stroke-width="2"/> <ellipse cx="382" cy="110" rx="8" ry="6" fill="#FFF3B0" stroke="#fff" stroke-width="2"/> <rect x="24" y="104" width="10" height="12" rx="3" fill="#FF3B3B"/> <rect x="50" y="117" width="280" height="4" rx="2" fill="#3B82F6" opacity=".85"/><rect x="84" y="80" width="40" height="9" rx="4.5" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.5"/><rect x="96" y="80" width="5" height="9" fill="#fff" opacity=".85"/><rect x="122" y="82" width="5" height="5" rx="1.5" fill="#E5E7EB"/><rect x="84" y="71" width="40" height="9" rx="4.5" fill="#3B82F6" stroke="#1E40AF" stroke-width="1.5"/><rect x="96" y="71" width="5" height="9" fill="#fff" opacity=".85"/><rect x="122" y="73" width="5" height="5" rx="1.5" fill="#E5E7EB"/><circle cx="356" cy="110" r="7.5" fill="#3B82F6" stroke="#fff" stroke-width="2"/><text x="356" y="113.6" text-anchor="middle" font-size="10" font-weight="900" fill="#fff" font-family="Nunito Variable,Nunito,sans-serif">N</text> <circle cx="196" cy="112" r="14" fill="#fff"/> <text x="196" y="117.6" text-anchor="middle" font-size="15.819999999999999" font-weight="900" fill="#1F2340" font-family="Nunito Variable,Nunito,sans-serif">1</text> <g transform="translate(262 112) scale(0.9285714285714286)"><circle r="14" fill="#fff" stroke="#1F2340" stroke-opacity=".25" stroke-width="1.5"/><path d="M2 -10 L-5.5 1.5 L-0.5 1.5 L-2.5 10 L5.5 -2 L0.5 -2 Z" fill="#FFD600" stroke="#F59E0B" stroke-width="1"/></g> <g transform="rotate(18.1 313 81.5)"><rect x="300" y="74.5" width="26" height="9" rx="3" fill="#1F2340" stroke="#E5E7EB" stroke-width="1.6"/><rect x="303" y="76.5" width="20" height="2.6" rx="1.3" fill="#4B5563"/></g><g transform="rotate(18.1 343 91.3)"><rect x="330" y="84.3" width="26" height="9" rx="3" fill="#1F2340" stroke="#E5E7EB" stroke-width="1.6"/><rect x="333" y="86.3" width="20" height="2.6" rx="1.3" fill="#4B5563"/></g><path d="M46 92 L50 67 M74 89 L76 67" stroke="#1F2340" stroke-width="5" stroke-linecap="round"/><rect x="14" y="59" width="80" height="8" rx="4" fill="#1F2340"/><rect x="12" y="54" width="5" height="18" rx="2" fill="#1F2340"/><rect x="91" y="54" width="5" height="18" rx="2" fill="#1F2340"/><rect x="18" y="60.5" width="72" height="2.5" rx="1.2" fill="#FFD600"/><path d="M352 135 L400 133 L398 140 L354 140 Z" fill="#1F2340"/><rect x="130" y="131" width="150" height="6" rx="3" fill="#1F2340"/> <circle cx="96" cy="130" r="37" fill="#1F2340" opacity=".35"/> <g class="orl-teker" transform="rotate(0 96 130)"><circle cx="96" cy="130" r="32" fill="#23242B"/><g stroke="#454652" stroke-width="3.2" stroke-linecap="round"><path d="M123.0 130.0 L127.5 130.0"/><path d="M120.9 140.3 L125.1 142.1"/><path d="M115.1 149.1 L118.3 152.3"/><path d="M106.3 154.9 L108.1 159.1"/><path d="M96.0 157.0 L96.0 161.5"/><path d="M85.7 154.9 L83.9 159.1"/><path d="M76.9 149.1 L73.7 152.3"/><path d="M71.1 140.3 L66.9 142.1"/><path d="M69.0 130.0 L64.5 130.0"/><path d="M71.1 119.7 L66.9 117.9"/><path d="M76.9 110.9 L73.7 107.7"/><path d="M85.7 105.1 L83.9 100.9"/><path d="M96.0 103.0 L96.0 98.5"/><path d="M106.3 105.1 L108.1 100.9"/><path d="M115.1 110.9 L118.3 107.7"/><path d="M120.9 119.7 L125.1 117.9"/></g> <circle cx="96" cy="130" r="24.5" fill="none" stroke="#FFD600" stroke-width="2.6"/></g> <path d="M85.77 112.33 A19.6 19.6 0 0 1 113.67 121.63" stroke="#EF4444" stroke-width="7" fill="none" stroke-linecap="round"/> <g class="orl-teker" transform="rotate(0 96 130)"><circle cx="96" cy="130" r="18.6" fill="#FBBF24" stroke="#B45309" stroke-width="1.5"/><g stroke="#B45309" stroke-width="3" stroke-linecap="round"><path d="M96 130 L111.6 130.0"/><path d="M96 130 L103.8 143.5"/><path d="M96 130 L88.2 143.5"/><path d="M96 130 L80.4 130.0"/><path d="M96 130 L88.2 116.5"/><path d="M96 130 L103.8 116.5"/></g><circle cx="89.49" cy="123.49" r="3.3480000000000003" fill="#FEF3C7"/><circle cx="96" cy="130" r="4.5" fill="#6B7280"/></g><circle cx="318" cy="130" r="37" fill="#1F2340" opacity=".35"/> <g class="orl-teker" transform="rotate(0 318 130)"><circle cx="318" cy="130" r="32" fill="#23242B"/><g stroke="#454652" stroke-width="3.2" stroke-linecap="round"><path d="M345.0 130.0 L349.5 130.0"/><path d="M342.9 140.3 L347.1 142.1"/><path d="M337.1 149.1 L340.3 152.3"/><path d="M328.3 154.9 L330.1 159.1"/><path d="M318.0 157.0 L318.0 161.5"/><path d="M307.7 154.9 L305.9 159.1"/><path d="M298.9 149.1 L295.7 152.3"/><path d="M293.1 140.3 L288.9 142.1"/><path d="M291.0 130.0 L286.5 130.0"/><path d="M293.1 119.7 L288.9 117.9"/><path d="M298.9 110.9 L295.7 107.7"/><path d="M307.7 105.1 L305.9 100.9"/><path d="M318.0 103.0 L318.0 98.5"/><path d="M328.3 105.1 L330.1 100.9"/><path d="M337.1 110.9 L340.3 107.7"/><path d="M342.9 119.7 L347.1 117.9"/></g> <circle cx="318" cy="130" r="24.5" fill="none" stroke="#FFD600" stroke-width="2.6"/></g> <path d="M307.77 112.33 A19.6 19.6 0 0 1 335.67 121.63" stroke="#EF4444" stroke-width="7" fill="none" stroke-linecap="round"/> <g class="orl-teker" transform="rotate(0 318 130)"><circle cx="318" cy="130" r="18.6" fill="#FBBF24" stroke="#B45309" stroke-width="1.5"/><g stroke="#B45309" stroke-width="3" stroke-linecap="round"><path d="M318 130 L333.6 130.0"/><path d="M318 130 L325.8 143.5"/><path d="M318 130 L310.2 143.5"/><path d="M318 130 L302.4 130.0"/><path d="M318 130 L310.2 116.5"/><path d="M318 130 L325.8 116.5"/></g><circle cx="311.49" cy="123.49" r="3.3480000000000003" fill="#FEF3C7"/><circle cx="318" cy="130" r="4.5" fill="#6B7280"/></g> </g></g>
  <ellipse class="orl-parilti" cx="176" cy="100" rx="3" ry="3" fill="#fff"/>
</svg>
</div>
`
      },
      {
        name: "Sözcük Müzesi",
        file: "sozcuk_muzesi.html",
        desc: "Sözcük kartlarını cümledeki anlamına göre gerçek, mecaz ya da terim anlam salonuna taşı!",
        sinif: "4. Sınıf — Gerçek, mecaz ve terim anlam (T.4.3.10)",
        eklenme: "2026-10-23",
        thumbBg: "linear-gradient(180deg, #FBF5EA, #EADFCB)",
        customThumb: `
<div class="sozcuk-muzesi-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="smSpot" cx=".5" cy="0" r=".9"><stop offset="0" stop-color="#FFF0B8"/><stop offset="1" stop-color="#FFF0B8" stop-opacity="0"/></radialGradient></defs>
  <rect width="240" height="150" fill="#FBF5EA"/>
  <!-- müze duvarı: sütunlar -->
  <g fill="#F3EADB" stroke="#D9C9AC" stroke-width="1.5">
    <rect x="6" y="6" width="12" height="122"/><rect x="222" y="6" width="12" height="122"/>
  </g>
  <rect y="126" width="240" height="24" fill="#E4D6BF"/>
  <rect y="126" width="240" height="3" fill="#CDBD9F"/>
  <!-- vitrin -->
  <rect x="72" y="8" width="96" height="40" rx="6" fill="url(#smSpot)" stroke="#fff" stroke-width="2.5"/>
  <rect x="72" y="8" width="96" height="40" rx="6" fill="none" stroke="#1F2A4D" stroke-opacity=".15" stroke-width="1"/>
  <rect x="80" y="44" width="80" height="4" rx="1.5" fill="#D9C9AC"/>
  <!-- salon kapıları -->
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle" font-size="7.5">
    <path d="M26 126 V94 a24 24 0 0 1 48 0 V126 Z" fill="#FCEBCF" stroke="#E08A1E" stroke-width="3"/>
    <circle cx="50" cy="100" r="7" fill="#E08A1E"/><path d="M50 93 q2 -4 5 -5" stroke="#E08A1E" stroke-width="1.6" fill="none"/>
    <text x="50" y="120" fill="#E08A1E">GERÇEK</text>
    <path class="sm-isik" d="M90 126 V94 a30 30 0 0 1 60 0 V126 Z" fill="#8B5CF6" opacity=".35"/>
    <path d="M96 126 V94 a24 24 0 0 1 48 0 V126 Z" fill="#EDE4FF" stroke="#8B5CF6" stroke-width="3"/>
    <path d="M111 94 c6 3 12 3 18 0 v6 c0 7 -4 11 -9 11 s-9 -4 -9 -11 z" fill="#8B5CF6"/>
    <path d="M115 99 h3 M122 99 h3" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><path d="M115 104 q5 3 10 0" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <circle class="sm-isik" cx="120" cy="76" r="3.5" fill="#8B5CF6"/>
    <text x="120" y="120" fill="#8B5CF6">MECAZ</text>
    <path d="M166 126 V94 a24 24 0 0 1 48 0 V126 Z" fill="#D3F2F2" stroke="#0E9FA3" stroke-width="3"/>
    <g stroke="#0E9FA3" stroke-width="2.2" stroke-linecap="round" fill="none"><circle cx="190" cy="92" r="2.4" fill="#0E9FA3"/><path d="M190 94 l-6 15 M190 94 l6 15"/></g>
    <text x="190" y="120" fill="#0E9FA3">TERİM</text>
  </g>
  <!-- baykuş rehber -->
  <g transform="translate(28 22)">
    <path d="M-10 -12 l3 -7 l5 5 z M10 -12 l-3 -7 l-5 5 z" fill="#8B5E3C"/>
    <ellipse cx="0" cy="2" rx="14" ry="16" fill="#8B5E3C"/>
    <ellipse cx="0" cy="8" rx="8" ry="9" fill="#EAD5B3"/>
    <circle cx="-5.5" cy="-4" r="5" fill="#fff" stroke="#C9A227" stroke-width="1.3"/><circle cx="5.5" cy="-4" r="5" fill="#fff" stroke="#C9A227" stroke-width="1.3"/>
    <circle cx="-5" cy="-3.5" r="2.2" fill="#1F2A4D"/><circle cx="5" cy="-3.5" r="2.2" fill="#1F2A4D"/>
    <ellipse class="sm-kapak" cx="-5.5" cy="-4" rx="5.2" ry="5.2" fill="#8B5E3C"/><ellipse class="sm-kapak" cx="5.5" cy="-4" rx="5.2" ry="5.2" fill="#8B5E3C"/>
    <path d="M0 0 l-2 3 l2 2.5 l2 -2.5 z" fill="#F0A030"/>
  </g>
  <!-- sözcük kartı -->
  <g class="sm-kart">
    <rect x="-40" y="-11" width="80" height="22" rx="4" fill="#fff" stroke="#EADFCB" stroke-width="1.5"/>
    <text x="0" y="3.5" font-family="Nunito, Segoe UI, sans-serif" font-weight="800" font-size="9" fill="#2A2A35" text-anchor="middle">Kavganın <tspan fill="#8C2F39" font-weight="900" text-decoration="underline">kökü</tspan></text>
  </g>
</svg>
</div>
`
      },
      {
        name: "Hikâye Sahnesi",
        file: "hikaye_sahnesi.html",
        desc: "Hikâyeyi oku; kahramanı, yeri, zamanı ve olayı bul. Perde açılsın, hikâye sahnelensin!",
        sinif: "2. Sınıf — Hikâye unsurları",
        thumbBg: "linear-gradient(170deg, #4A0F22 0%, #2A0A14 100%)",
        customThumb: `
<div class="hikaye-sahnesi-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <!-- fon: park, sabah -->
  <rect x="0" y="0" width="240" height="118" fill="#BFE7FF"/>
  <circle cx="58" cy="40" r="14" fill="#FFD25A"/>
  <path d="M0 96Q60 78 120 92T240 88V118H0Z" fill="#7BD389"/>
  <g fill="#fff"><ellipse cx="150" cy="30" rx="18" ry="7"/><ellipse cx="163" cy="26" rx="12" ry="8"/></g>
  <!-- sahne zemini -->
  <rect x="0" y="116" width="240" height="22" fill="#C8874A"/>
  <rect x="0" y="114" width="240" height="3" fill="#8E5A2B"/>
  <!-- kumdan kale (olay) -->
  <g class="hs-kale">
    <path d="M136 118V100H140V95H146V100H152V95H158V100H164V95H170V100H176V95H184V118Z" fill="#EBC883" stroke="#C9A05A" stroke-width="1.5"/>
    <path d="M148 100V88H152V84H156V88H160V84H164V88H168V100Z" fill="#EBC883" stroke="#C9A05A" stroke-width="1.5"/>
    <path d="M158 84V68" stroke="#6B4A2B" stroke-width="1.6"/><path d="M158.8 68L172 72L158.8 76Z" fill="#FF4D8D"/>
  </g>
  <!-- kahraman: Elif -->
  <g class="hs-elif">
    <rect x="96" y="104" width="6" height="14" rx="3" fill="#F5CFA8"/><rect x="106" y="104" width="6" height="14" rx="3" fill="#F5CFA8"/>
    <rect x="93" y="80" width="22" height="26" rx="8" fill="#FF4D8D"/>
    <path d="M93 95H115L119 106Q104 109 89 106Z" fill="#4D9FFF"/>
    <rect x="91" y="62" width="26" height="20" rx="8" fill="#4A2C1A"/>
    <circle cx="104" cy="70" r="11" fill="#F5CFA8"/>
    <path d="M93 68A11 11 0 0 1 115 68Q104 63 93 68Z" fill="#4A2C1A"/>
    <circle cx="100" cy="71" r="1.6" fill="#2B2340"/><circle cx="108" cy="71" r="1.6" fill="#2B2340"/>
    <path d="M100.5 75Q104 77.5 107.5 75" stroke="#2B2340" stroke-width="1.3" fill="none" stroke-linecap="round"/>
  </g>
  <!-- perde ve saçak -->
  <rect class="hs-perde-sol" x="0" y="0" width="64" height="138" fill="#C21845"/>
  <rect class="hs-perde-sag" x="176" y="0" width="64" height="138" fill="#C21845"/>
  <path d="M0 0H240V16Q228 24 216 16Q204 24 192 16Q180 24 168 16Q156 24 144 16Q132 24 120 16Q108 24 96 16Q84 24 72 16Q60 24 48 16Q36 24 24 16Q12 24 0 16Z" fill="#7A0C28"/>
  <rect x="0" y="136" width="240" height="14" fill="#6B3A1E"/>
  <g fill="#FFF2B8"><circle cx="20" cy="143" r="2.5"/><circle cx="60" cy="143" r="2.5"/><circle cx="100" cy="143" r="2.5"/><circle cx="140" cy="143" r="2.5"/><circle cx="180" cy="143" r="2.5"/><circle cx="220" cy="143" r="2.5"/></g>
</svg>
</div>`,
      },
      {
        name: "Sözlük Postası",
        file: "sozluk_postasi.html",
        desc: "Evleri sözlük sırasına diz, mektupları doğru iki evin arasına götür!",
        sinif: "2. Sınıf — Sözlük sıralaması",
        thumbBg: "linear-gradient(170deg, #E6F3FF 0%, #FFF8F0 100%)",
        customThumb: `
<div class="sozluk-postasi-thumb">
<svg class="sp-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <!-- bulutlar -->
  <g fill="#fff" opacity=".95">
    <ellipse cx="38" cy="24" rx="20" ry="9"/><ellipse cx="54" cy="20" rx="16" ry="11"/>
    <ellipse cx="150" cy="30" rx="18" ry="8"/><ellipse cx="164" cy="26" rx="13" ry="9"/>
  </g>
  <!-- yol -->
  <rect x="0" y="128" width="240" height="16" fill="#C9C2B8"/>
  <line x1="4" y1="136" x2="240" y2="136" stroke="#fff" stroke-width="2.5" stroke-dasharray="10 8"/>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="12" fill="#2B2340">
  <g class="sp-ev sp-ev1">
    <polygon points="13,79 40,55 67,79" fill="#FF4D8D" stroke="#FF4D8D" stroke-width="4" stroke-linejoin="round"/>
    <rect x="19" y="76" width="42" height="52" rx="4" fill="#FFFDF8" stroke="#EADFD3" stroke-width="2"/>
    <rect x="34" y="108" width="12" height="20" rx="2" fill="#FF4D8D"/>
    <rect x="15" y="84" width="50" height="17" rx="4" fill="#fff" stroke="#2B2340" stroke-width="2"/>
    <text x="40" y="97" text-anchor="middle">arı</text>
  </g>
  <g class="sp-ev sp-ev2">
    <polygon points="93,79 120,55 147,79" fill="#4D9FFF" stroke="#4D9FFF" stroke-width="4" stroke-linejoin="round"/>
    <rect x="99" y="76" width="42" height="52" rx="4" fill="#FFFDF8" stroke="#EADFD3" stroke-width="2"/>
    <rect x="114" y="108" width="12" height="20" rx="2" fill="#4D9FFF"/>
    <rect x="95" y="84" width="50" height="17" rx="4" fill="#fff" stroke="#2B2340" stroke-width="2"/>
    <text x="120" y="97" text-anchor="middle">kedi</text>
  </g>
  <g class="sp-ev sp-ev3">
    <polygon points="173,79 200,55 227,79" fill="#00C9A7" stroke="#00C9A7" stroke-width="4" stroke-linejoin="round"/>
    <rect x="179" y="76" width="42" height="52" rx="4" fill="#FFFDF8" stroke="#EADFD3" stroke-width="2"/>
    <rect x="194" y="108" width="12" height="20" rx="2" fill="#00C9A7"/>
    <rect x="175" y="84" width="50" height="17" rx="4" fill="#fff" stroke="#2B2340" stroke-width="2"/>
    <text x="200" y="97" text-anchor="middle">top</text>
  </g>
  </g>
  <!-- posta kutusu: arı ile kedi arası -->
  <rect x="78.5" y="106" width="3" height="22" fill="#8D93A8"/>
  <rect x="71" y="93" width="18" height="14" rx="6" fill="#4D9FFF" stroke="#2F7FE0" stroke-width="1.5"/>
  <rect x="75" y="98" width="10" height="2.4" rx="1.2" fill="#1E5FB8"/>
  <rect x="89" y="86" width="1.6" height="10" fill="#8D93A8"/>
  <rect class="sp-bayrak" x="90.6" y="86" width="5" height="4" fill="#C9C2B8"/>
  <!-- teslim edilen mektup etiketi -->
  <g class="sp-gelen">
    <rect x="62" y="62" width="36" height="15" rx="5" fill="#fff" stroke="#00C9A7" stroke-width="2"/>
    <text x="80" y="73.5" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="10" fill="#2B2340">elma</text>
  </g>
  <!-- uçan zarf -->
  <g class="sp-zarf">
    <rect x="0" y="0" width="38" height="25" rx="4" fill="#fff" stroke="#EADFD3" stroke-width="2"/>
    <path d="M2 3 L19 14 L36 3" stroke="#EADFD3" stroke-width="2" fill="none"/>
    <rect x="28" y="4" width="7" height="6" rx="1" fill="#FF4D8D"/>
    <text x="17" y="21.5" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="8.5" fill="#2B2340">elma</text>
  </g>
</svg>
</div>`,
      },
      {
        name: "Satır Sonu Makası",
        file: "satir_sonu_makasi.html",
        desc: "Satıra sığmayan kelimeyi hecesinden kes, kısa çizgiyi doğru yere koy!",
        sinif: "2. Sınıf — Satır sonunda kelime bölme",
        thumbBg: "linear-gradient(160deg, #6FB2FF 0%, #4D9FFF 100%)",
        customThumb: `
<div class="satir-makasi-thumb">
<svg class="sm-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <!-- defter sayfası -->
  <rect x="14" y="50" width="172" height="92" rx="6" fill="#fff"/>
  <line x1="32" y1="50" x2="32" y2="142" stroke="#FF9C9C" stroke-width="2"/>
  <line x1="36" y1="90" x2="186" y2="90" stroke="#BFD7FF" stroke-width="2.4"/>
  <line x1="36" y1="132" x2="186" y2="132" stroke="#BFD7FF" stroke-width="2.4"/>
  <line x1="186" y1="50" x2="186" y2="142" stroke="#2B2340" stroke-width="3" stroke-dasharray="7 5" opacity=".55"/>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="19">
    <text x="40" y="84" fill="#2B2340">Mavi bir</text>
    <text class="sm-kele" x="122" y="84" fill="#FF6B35">kele</text>
    <text class="sm-cizgi" x="161" y="84" fill="#FF6B35">-</text>
    <text class="sm-bek" x="0" y="0">bek</text>
    <text class="sm-kalan" x="78" y="126" fill="#2B2340">uçtu.</text>
  </g>
  <!-- makas -->
  <g class="sm-makas">
    <g transform="translate(-11,0) scale(.34)">
      <circle cx="18" cy="16" r="11" fill="#FF4D8D" stroke="#2B2340" stroke-width="5"/>
      <circle cx="46" cy="16" r="11" fill="#FF4D8D" stroke="#2B2340" stroke-width="5"/>
      <path d="M24 25 L36 90 L31 90 Z" fill="#C9D3E6" stroke="#2B2340" stroke-width="4" stroke-linejoin="round"/>
      <path d="M40 25 L28 90 L33 90 Z" fill="#E6ECF6" stroke="#2B2340" stroke-width="4" stroke-linejoin="round"/>
    </g>
  </g>
</svg>
</div>`,
      },
      {
        name: "Hece Smaçı",
        file: "hece_smaci.html",
        desc: "Harf ve hece sorularını bil, topu file üstünden aşır, smacı bas!",
        sinif: "2. Sınıf — Harf ve hece bilgisi",
        thumbBg: "linear-gradient(165deg, #EAF6FF 0%, #CFE9FF 46%, #FFE3C6 100%)",
        customThumb: `
<div class="hece-smaci-thumb">
<svg class="hs-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hsZemin" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFC58F"/><stop offset="1" stop-color="#FF9A56"/>
    </linearGradient>
  </defs>

  <!-- salon zemini -->
  <polygon points="26,150 214,150 186,92 54,92" fill="url(#hsZemin)"/>
  <polygon points="44,150 196,150 176,100 64,100" fill="none" stroke="#fff" stroke-width="2.4" opacity=".85"/>
  <line x1="36" y1="126" x2="204" y2="126" stroke="#fff" stroke-width="2" opacity=".6"/>

  <!-- file -->
  <g class="hs-file">
    <line x1="58" y1="96" x2="58" y2="44" stroke="#1F2740" stroke-width="5" stroke-linecap="round"/>
    <line x1="182" y1="96" x2="182" y2="44" stroke="#1F2740" stroke-width="5" stroke-linecap="round"/>
    <rect x="58" y="44" width="124" height="7" fill="#fff" stroke="#1F2740" stroke-width="2.4"/>
    <g stroke="#fff" stroke-width="1.6" opacity=".75">
      <line x1="58" y1="62" x2="182" y2="62"/><line x1="58" y1="78" x2="182" y2="78"/>
      <line x1="58" y1="94" x2="182" y2="94"/>
      <line x1="78" y1="51" x2="78" y2="95"/><line x1="100" y1="51" x2="100" y2="95"/>
      <line x1="122" y1="51" x2="122" y2="95"/><line x1="144" y1="51" x2="144" y2="95"/>
      <line x1="164" y1="51" x2="164" y2="95"/>
    </g>
  </g>

  <!-- hece baloncukları -->
  <g class="hs-hece hs-hece1">
    <rect x="-17" y="-13" width="34" height="26" rx="9" fill="#FFD600" stroke="#1F2740" stroke-width="2.6"/>
    <text x="0" y="6" font-size="15" font-weight="900" text-anchor="middle" fill="#1F2740"
          font-family="Nunito, Segoe UI, sans-serif">he</text>
  </g>
  <g class="hs-hece hs-hece2">
    <rect x="-17" y="-13" width="34" height="26" rx="9" fill="#00C9A7" stroke="#1F2740" stroke-width="2.6"/>
    <text x="0" y="6" font-size="15" font-weight="900" text-anchor="middle" fill="#fff"
          font-family="Nunito, Segoe UI, sans-serif">ce</text>
  </g>

  <!-- smaç patlaması -->
  <g class="hs-patlama">
    <path d="M0,-22 L5,-7 20,-11 9,0 20,11 5,7 0,22 -5,7 -20,11 -9,0 -20,-11 -5,-7 Z"
          fill="#FFD600" stroke="#FF6B35" stroke-width="2.4" stroke-linejoin="round"/>
  </g>

  <!-- gölge -->
  <ellipse class="hs-golge" cx="0" cy="0" rx="11" ry="4" fill="rgba(31,39,64,.22)"/>

  <!-- top -->
  <g class="hs-top">
    <g class="hs-top-don">
      <circle r="13" fill="#F5F8FD" stroke="#16203B" stroke-width="2.4"/>
      <path d="M-12.4 -4 A13 13 0 0 1 3.5 -12.5" stroke="#2F7FF0" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M12.6 3 A13 13 0 0 1 0.5 12.9" stroke="#F8C61E" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M-13 -1 C-5 -7 5 -7 13 -1" fill="none" stroke="#16203B" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M-3 -12.7 C-8 -5 -7 5 -2 12.8" fill="none" stroke="#16203B" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M7.5 -10.6 C11 -4 10 5 4 12.2" fill="none" stroke="#16203B" stroke-width="1.8" stroke-linecap="round"/>
    </g>
  </g>
</svg>
</div>`,
      },
      {
        name: "Hikaye Şehri",
        file: "hikayesehri.html",
        beceri: "Okuduğunu anlama",
        desc: "Hikayeleri okuyarak şehrini istediğin gibi inşa et!",
        sinif: "1. - 2. Sınıf",
        emoji: "🏙️",
        thumbBg: "linear-gradient(180deg,#BFE7FF,#EAF7FF)",
        customThumb: `
<div class="hikaye-sehri-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="hsrGok" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BFE7FF"/><stop offset="1" stop-color="#EAF7FF"/></linearGradient></defs>
  <rect width="240" height="150" fill="url(#hsrGok)"/>
  <circle cx="214" cy="24" r="12" fill="#FFD600"/>
  <g class="hsr-bulut" fill="#fff" opacity=".9"><ellipse cx="52" cy="26" rx="18" ry="8"/><ellipse cx="66" cy="22" rx="12" ry="9"/></g>
  <g fill="#D4E6F5"><rect x="0" y="86" width="26" height="44"/><rect x="150" y="92" width="22" height="38"/><rect x="176" y="100" width="18" height="30"/></g>
  <rect y="126" width="240" height="24" fill="#9CD08C"/>
  <g stroke="#2B2340" stroke-width="2">
    <rect x="18" y="66" width="42" height="60" rx="3" fill="#FF6B35"/>
    <rect x="70" y="50" width="46" height="76" rx="3" fill="#4D9FFF"/>
    <rect x="126" y="80" width="38" height="46" rx="3" fill="#00C9A7"/>
  </g>
  <g fill="#FFF3C4">
    <rect x="25" y="74" width="10" height="10" rx="2"/><rect class="hsr-isik" x="43" y="74" width="10" height="10" rx="2"/><rect x="25" y="92" width="10" height="10" rx="2"/><rect x="43" y="92" width="10" height="10" rx="2"/>
    <rect class="hsr-isik hsr-isik2" x="78" y="58" width="10" height="10" rx="2"/><rect x="96" y="58" width="10" height="10" rx="2"/><rect x="78" y="76" width="10" height="10" rx="2"/><rect class="hsr-isik" x="96" y="76" width="10" height="10" rx="2"/><rect x="78" y="94" width="10" height="10" rx="2"/><rect x="96" y="94" width="10" height="10" rx="2"/>
    <rect x="133" y="88" width="9" height="9" rx="2"/><rect class="hsr-isik hsr-isik2" x="148" y="88" width="9" height="9" rx="2"/><rect x="133" y="104" width="9" height="9" rx="2"/>
  </g>
  <g stroke="#F2A900" stroke-width="5" stroke-linecap="round"><line x1="206" y1="126" x2="206" y2="28"/><line x1="206" y1="30" x2="152" y2="30"/></g>
  <line x1="206" y1="28" x2="228" y2="50" stroke="#F2A900" stroke-width="3"/>
  <g class="hsr-blok">
    <line x1="164" y1="30" x2="164" y2="58" stroke="#2B2340" stroke-width="2"/>
    <rect x="152" y="58" width="24" height="16" rx="3" fill="#A855F7" stroke="#2B2340" stroke-width="2"/>
  </g>
  <g stroke="#2B2340" stroke-width="2">
    <path d="M96 146V132Q108 126 120 132Q132 126 144 132V146Q132 141 120 146Q108 141 96 146Z" fill="#fff"/>
    <line x1="120" y1="132" x2="120" y2="146"/>
  </g>
</svg>
</div>
`,
      },
      {
        name: "1. Sınıflar Yarışması",
        file: "yarisma.html",
        beceri: "Genel tekrar",
        desc: "Sınıfta bilgimizi yarıştıralım!",
        sinif: "1. Sınıf",
        emoji: "🏆",
        thumbBg: "linear-gradient(180deg,#2A2145,#4A3A7A)",
        customThumb: `
<div class="yarisma-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="yrsFon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A2145"/><stop offset="1" stop-color="#4A3A7A"/></linearGradient></defs>
  <rect width="240" height="150" fill="url(#yrsFon)"/>
  <g class="yrs-spot" fill="#FFF8D0" opacity=".14"><polygon points="40,0 10,150 100,150"/></g>
  <g class="yrs-spot yrs-spot2" fill="#FFF8D0" opacity=".14"><polygon points="200,0 140,150 230,150"/></g>
  <g class="yrs-konfeti"><rect x="30" y="-10" width="7" height="7" rx="2" fill="#FF6B35"/><circle cx="120" cy="-18" r="4" fill="#00C9A7"/><rect x="200" y="-6" width="6" height="6" rx="2" fill="#FFD600"/></g>
  <g class="yrs-konfeti yrs-konfeti2"><circle cx="70" cy="-12" r="4" fill="#FF4D8D"/><rect x="160" y="-20" width="7" height="7" rx="2" fill="#4D9FFF"/><circle cx="222" cy="-8" r="3.5" fill="#A855F7"/></g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle" stroke-width="2.5">
    <rect x="66" y="104" width="36" height="46" fill="#C9D3E6" stroke="#2B2340"/>
    <rect x="102" y="86" width="36" height="64" fill="#FFD600" stroke="#2B2340"/>
    <rect x="138" y="116" width="36" height="34" fill="#E0955A" stroke="#2B2340"/>
    <text x="84" y="130" font-size="18" fill="#2B2340" stroke="none">2</text>
    <text x="120" y="116" font-size="20" fill="#2B2340" stroke="none">1</text>
    <text x="156" y="140" font-size="16" fill="#2B2340" stroke="none">3</text>
  </g>
  <g class="yrs-kupa">
    <path d="M106 48Q106 70 120 72Q134 70 134 48Z" fill="#FFD600" stroke="#B8860B" stroke-width="2.5"/>
    <path d="M106 50Q96 52 102 62M134 50Q144 52 138 62" fill="none" stroke="#B8860B" stroke-width="3"/>
    <rect x="114" y="72" width="12" height="6" fill="#B8860B"/><rect x="108" y="78" width="24" height="5" rx="2" fill="#FFD600" stroke="#B8860B" stroke-width="1.5"/>
  </g>
  <path class="yrs-parla" d="M142 40 L144.5 46 L151 48 L144.5 50 L142 56 L139.5 50 L133 48 L139.5 46 Z" fill="#fff"/>
</svg>
</div>
`,
      },
      {
        name: "5N1K Dedektifi",
        file: "5n1k.html",
        beceri: "5N1K soruları",
        desc: "Dedektif ol ve cümlelerdeki soruların cevaplarını bul.",
        sinif: "1. - 2. Sınıf",
        emoji: "🕵️",
        thumbBg: "linear-gradient(180deg,#FBF3E6,#F1E4CE)",
        customThumb: `
<div class="dnk-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#F7EFE0"/>
  <g fill="#E4D5BB"><circle cx="18" cy="134" r="8"/><circle cx="224" cy="18" r="6"/></g>
  <g transform="rotate(-3 95 80)">
    <rect x="34" y="46" width="124" height="74" rx="8" fill="#fff" stroke="#E0D2B8" stroke-width="2.5"/>
    <g fill="#CBBFa8"><rect x="46" y="60" width="98" height="6" rx="3"/><rect x="46" y="74" width="80" height="6" rx="3"/><rect x="46" y="88" width="92" height="6" rx="3"/><rect x="46" y="102" width="60" height="6" rx="3"/></g>
    <rect x="46" y="74" width="34" height="6" rx="3" fill="#FFD600"/>
  </g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <g class="dnk-s1"><rect x="160" y="34" width="56" height="22" rx="11" fill="#FF4D8D"/><text x="188" y="50" font-size="13" fill="#fff">Kim?</text></g>
    <g class="dnk-s2"><rect x="168" y="66" width="52" height="22" rx="11" fill="#4D9FFF"/><text x="194" y="82" font-size="13" fill="#fff">Ne?</text></g>
    <g class="dnk-s3"><rect x="152" y="98" width="76" height="22" rx="11" fill="#00C9A7"/><text x="190" y="114" font-size="13" fill="#fff">Nerede?</text></g>
  </g>
  <g class="dnk-mercek">
    <line x1="88" y1="96" x2="112" y2="124" stroke="#2B2340" stroke-width="8" stroke-linecap="round"/>
    <circle cx="76" cy="82" r="20" fill="rgba(255,255,255,.35)" stroke="#2B2340" stroke-width="5"/>
    <circle cx="76" cy="82" r="20" fill="none" stroke="#4D9FFF" stroke-width="2"/>
  </g>
</svg>
</div>
`,
      },
      {
        name: "Hecelerden Kelimelere",
        file: "hece.html",
        beceri: "Hece birleştirme",
        desc: "Heceleri birleştirerek kelimeler oluştur! 🔤",
        sinif: "1. Sınıf",
        emoji: "🔤",
        thumbBg: "linear-gradient(180deg,#E6FFF6,#D8F6EA)",
        customThumb: `
<div class="hece-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="hclFon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E6FFF6"/><stop offset="1" stop-color="#D8F6EA"/></linearGradient></defs>
  <rect width="240" height="150" fill="url(#hclFon)"/>
  <g fill="#fff" opacity=".8"><ellipse cx="40" cy="22" rx="16" ry="7"/><ellipse cx="196" cy="30" rx="18" ry="8"/></g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <g class="hcl-b1"><rect x="48" y="62" width="52" height="42" rx="12" fill="#FFD600" stroke="#2B2340" stroke-width="3"/><text x="74" y="92" font-size="24" fill="#2B2340">ke</text></g>
    <g class="hcl-b2"><rect x="140" y="62" width="52" height="42" rx="12" fill="#00C9A7" stroke="#2B2340" stroke-width="3"/><text x="166" y="92" font-size="24" fill="#fff">di</text></g>
    <text class="hcl-arti" x="120" y="92" font-size="24" fill="#FF6B35">+</text>
    <g class="hcl-kelime"><rect x="84" y="16" width="72" height="30" rx="10" fill="#fff" stroke="#FF4D8D" stroke-width="3"/><text x="120" y="38" font-size="19" fill="#2B2340">kedi</text></g>
  </g>
  <g class="hcl-kedi">
    <path d="M96 130 L104 114 L112 128 Z" fill="#F2A35C"/><path d="M144 130 L136 114 L128 128 Z" fill="#F2A35C"/>
    <circle cx="120" cy="134" r="18" fill="#F7B977"/>
    <circle cx="113" cy="131" r="2.2" fill="#2B2340"/><circle cx="127" cy="131" r="2.2" fill="#2B2340"/>
    <path d="M117 137Q120 140 123 137" stroke="#2B2340" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <g stroke="#2B2340" stroke-width="1.2" stroke-linecap="round"><line x1="98" y1="134" x2="108" y2="135"/><line x1="142" y1="134" x2="132" y2="135"/></g>
  </g>
</svg>
</div>
`,
      },
      {
        name: "Noktalama Parşomeni",
        file: "nokta.html",
        beceri: "Noktalama işaretleri",
        desc: "Noktalama işaretlerini doğru yerlere yerleştir! 📜",
        sinif: "1. Sınıf",
        emoji: "📜",
        thumbBg: "linear-gradient(180deg,#FFF6E3,#F7E8C8)",
        customThumb: `
<div class="nokta-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#F6E9CE"/>
  <rect x="30" y="34" width="156" height="86" rx="6" fill="#FBEFD4" stroke="#D9BC85" stroke-width="2.5"/>
  <g fill="#E8CD9C" stroke="#C9A05A" stroke-width="2"><rect x="22" y="24" width="172" height="14" rx="7"/><rect x="22" y="114" width="172" height="14" rx="7"/></g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" fill="#5B4A2E">
    <text x="44" y="64" font-size="15">Okula geldin mi</text>
    <text x="44" y="92" font-size="15">Evet geldim</text>
  </g>
  <rect x="172" y="50" width="16" height="18" rx="4" fill="none" stroke="#FF6B35" stroke-width="2" stroke-dasharray="4 3"/>
  <text class="npr-soru" x="180" y="65" font-size="17" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" fill="#FF4D8D">?</text>
  <circle class="npr-nokta" cx="138" cy="90" r="3" fill="#FF6B35"/>
  <g class="npr-tuy">
    <path d="M196 96Q214 60 232 44Q222 72 206 100Z" fill="#9FD6F0" stroke="#4D9FFF" stroke-width="2"/>
    <path d="M196 96L190 110" stroke="#2B2340" stroke-width="3" stroke-linecap="round"/>
  </g>
  <ellipse cx="206" cy="128" rx="16" ry="9" fill="#2B2340"/><ellipse cx="206" cy="124" rx="11" ry="4" fill="#4D9FFF"/>
</svg>
</div>
`,
      },
      {
        name: "Zoxi'ye Türkçe Öğretiyoruz",
        file: "zoxi.html",
        beceri: "Kelime bilgisi",
        desc: "Uzaylı arkadaşımız Zoxi'ye Türkçe kelimeler öğret! 👽",
        sinif: "1. Sınıf",
        emoji: "👽",
        thumbBg: "linear-gradient(180deg,#141432,#232355)",
        customThumb: `
<div class="zoxi-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="zxiFon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#141432"/><stop offset="1" stop-color="#232355"/></linearGradient></defs>
  <rect width="240" height="150" fill="url(#zxiFon)"/>
  <g fill="#fff"><circle class="zxi-y" cx="28" cy="26" r="2"/><circle class="zxi-y zxi-y2" cx="70" cy="14" r="1.6"/><circle class="zxi-y zxi-y3" cx="210" cy="20" r="2"/><circle class="zxi-y zxi-y2" cx="226" cy="58" r="1.5"/><circle class="zxi-y" cx="16" cy="70" r="1.6"/></g>
  <path d="M0 132Q60 120 120 130T240 128V150H0Z" fill="#8D93A8"/>
  <g fill="#6E7488"><ellipse cx="60" cy="140" rx="12" ry="4"/><ellipse cx="180" cy="144" rx="14" ry="4.5"/></g>
  <polygon class="zxi-isin" points="86,86 134,86 150,150 70,150" fill="#FFE27A" opacity=".2"/>
  <g class="zxi-ufo">
    <path d="M92 70A28 20 0 0 1 148 70Z" fill="#9FE8FF" opacity=".85"/>
    <g>
      <circle cx="120" cy="60" r="13" fill="#7BD389"/>
      <circle cx="120" cy="57" r="5.5" fill="#fff"/><circle cx="121" cy="57.5" r="3" fill="#2B2340"/>
      <line x1="120" y1="47" x2="120" y2="40" stroke="#7BD389" stroke-width="2.5"/><circle cx="120" cy="38" r="3" fill="#FF4D8D"/>
    </g>
    <ellipse cx="120" cy="78" rx="42" ry="13" fill="#A855F7" stroke="#2B2340" stroke-width="2.5"/>
    <g class="zxi-lamba"><circle cx="92" cy="78" r="3.5" fill="#FFD600"/><circle cx="120" cy="84" r="3.5" fill="#FFD600"/><circle cx="148" cy="78" r="3.5" fill="#FFD600"/></g>
  </g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900">
    <path d="M160 44H224Q230 44 230 50V72Q230 78 224 78H182L170 90L174 78H166Q160 78 160 72V50Q160 44 166 44Z" fill="#fff"/>
    <text x="183" y="66" font-size="15" fill="#2B2340">elma</text>
    <circle cx="218" cy="61" r="7" fill="#FF4D4D"/><path d="M218 54Q221 50 224 52" stroke="#2FA85A" stroke-width="2.5" fill="none"/>
  </g>
</svg>
</div>
`,
      },
      {
        name: "Noktalama Treni",
        file: "tren.html",
        beceri: "Noktalama işaretleri",
        desc: "Trendeki eksik noktalama vagonlarını tamamla! 🚂",
        sinif: "1. Sınıf",
        emoji: "🚂",
        thumbBg: "linear-gradient(180deg,#CDEBFF,#E8F6FF)",
        customThumb: `
<div class="tren-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#CDEBFF"/>
  <circle cx="30" cy="26" r="12" fill="#FFD600"/>
  <path d="M0 100Q60 84 120 96T240 92V150H0Z" fill="#A9DCB4"/>
  <g class="ntr-d1" fill="#fff" opacity=".9"><circle cx="48" cy="56" r="7"/></g>
  <g class="ntr-d2" fill="#fff" opacity=".7"><circle cx="58" cy="42" r="9"/></g>
  <g class="ntr-d3" fill="#fff" opacity=".5"><circle cx="72" cy="28" r="11"/></g>
  <rect y="124" width="240" height="7" fill="#8A6A4A"/>
  <g fill="#6B4A2B"><rect x="6" y="131" width="12" height="4" rx="2"/><rect x="36" y="131" width="12" height="4" rx="2"/><rect x="66" y="131" width="12" height="4" rx="2"/><rect x="96" y="131" width="12" height="4" rx="2"/><rect x="126" y="131" width="12" height="4" rx="2"/><rect x="156" y="131" width="12" height="4" rx="2"/><rect x="186" y="131" width="12" height="4" rx="2"/><rect x="216" y="131" width="12" height="4" rx="2"/></g>
  <g class="ntr-tren" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <g stroke="#2B2340" stroke-width="2.5">
      <rect x="20" y="78" width="30" height="34" rx="5" fill="#FF6B35"/>
      <rect x="44" y="92" width="26" height="20" rx="4" fill="#FF6B35"/>
      <rect x="26" y="66" width="10" height="14" rx="2" fill="#2B2340" stroke="none"/>
      <rect x="24" y="84" width="14" height="12" rx="3" fill="#9FE8FF"/>
      <rect x="84" y="82" width="40" height="30" rx="5" fill="#4D9FFF"/>
      <rect x="138" y="82" width="40" height="30" rx="5" fill="#FFD600"/>
      <rect x="192" y="82" width="40" height="30" rx="5" fill="#00C9A7"/>
    </g>
    <line x1="70" y1="102" x2="84" y2="98" stroke="#2B2340" stroke-width="3"/>
    <line x1="124" y1="98" x2="138" y2="98" stroke="#2B2340" stroke-width="3"/>
    <line x1="178" y1="98" x2="192" y2="98" stroke="#2B2340" stroke-width="3"/>
    <text x="104" y="105" font-size="22" fill="#fff">.</text>
    <text x="158" y="105" font-size="20" fill="#2B2340">?</text>
    <rect x="203" y="88" width="18" height="18" rx="4" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4 3"/>
    <text class="ntr-slot" x="212" y="104" font-size="20" fill="#fff">,</text>
    <g class="ntr-teker" fill="#2B2340"><circle cx="32" cy="116" r="7"/><circle cx="56" cy="116" r="7"/><circle cx="96" cy="116" r="6"/><circle cx="114" cy="116" r="6"/><circle cx="150" cy="116" r="6"/><circle cx="168" cy="116" r="6"/><circle cx="204" cy="116" r="6"/><circle cx="222" cy="116" r="6"/></g>
  </g>
</svg>
</div>
`,
      },
      {
        name: "Düşler Şatosu",
        file: "duslersatosu.html",
        beceri: "Okuduğunu anlama",
        desc: "Metinleri okuyup anlayarak şatodaki bölümleri keşfet! 🏰",
        sinif: "1. - 2. Sınıf",
        emoji: "🏰",
        thumbBg: "linear-gradient(180deg,#3A2A6A,#6A4A9A)",
        customThumb: `
<div class="dusler-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="dsaFon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A2A6A"/><stop offset="1" stop-color="#6A4A9A"/></linearGradient></defs>
  <rect width="240" height="150" fill="url(#dsaFon)"/>
  <path d="M206 18A15 15 0 1 0 220 42A12 12 0 1 1 206 18Z" fill="#FFF2B8"/>
  <g fill="#fff"><circle class="dsa-y" cx="30" cy="24" r="2"/><circle class="dsa-y dsa-y2" cx="66" cy="40" r="1.6"/><circle class="dsa-y dsa-y3" cx="176" cy="20" r="2"/><circle class="dsa-y dsa-y2" cx="22" cy="64" r="1.5"/></g>
  <path d="M0 136Q60 126 120 134T240 130V150H0Z" fill="#4A3580"/>
  <g stroke="#2B2340" stroke-width="2.5">
    <rect x="62" y="56" width="18" height="78" fill="#B79BE8"/>
    <rect x="160" y="56" width="18" height="78" fill="#B79BE8"/>
    <rect x="80" y="78" width="80" height="56" fill="#CBB6F0"/>
    <polygon points="62,56 71,34 80,56" fill="#FF4D8D"/>
    <polygon points="160,56 169,34 178,56" fill="#FF4D8D"/>
    <path d="M104 134V106A16 16 0 0 1 136 106V134Z" fill="#5B3E8C"/>
  </g>
  <g fill="#FFE27A"><rect class="dsa-pencere" x="67" y="66" width="8" height="12" rx="4"/><rect class="dsa-pencere dsa-p2" x="165" y="66" width="8" height="12" rx="4"/><rect class="dsa-pencere dsa-p2" x="90" y="88" width="9" height="13" rx="4"/><rect class="dsa-pencere" x="141" y="88" width="9" height="13" rx="4"/></g>
  <g class="dsa-bayrak"><line x1="120" y1="78" x2="120" y2="54" stroke="#2B2340" stroke-width="2.5"/><path d="M120 54L140 59L120 64Z" fill="#FFD600"/></g>
  <path class="dsa-parla" d="M42 96 L44.5 102 L51 104 L44.5 106 L42 112 L39.5 106 L33 104 L39.5 102 Z" fill="#FFE27A"/>
</svg>
</div>
`,
      },
      {
        name: "Lilo & Stitch Sörf Yarışması",
        file: "sorf.html",
        beceri: "Eş ve zıt anlam",
        desc: "Eş anlam ve zıt anlam sahillerinde sörf yarışmasına katılın! 🏄",
        sinif: "1. - 2. Sınıf",
        emoji: "🏄",
        thumbBg: "linear-gradient(180deg,#BFE7FF,#8ED8EC)",
        customThumb: `
<div class="sorf-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#BFE7FF"/>
  <circle cx="30" cy="26" r="13" fill="#FFD600"/>
  <g fill="#fff" opacity=".9"><ellipse cx="170" cy="24" rx="18" ry="8"/><ellipse cx="184" cy="20" rx="12" ry="9"/></g>
  <path class="srf-dalga" d="M-20 96Q10 70 40 92Q58 64 86 84Q82 100 100 108L-20 150Z" fill="#2EB8D9"/>
  <path d="M0 108Q60 96 120 106T240 102V150H0Z" fill="#2E9FD6"/>
  <g stroke="#fff" stroke-opacity=".5" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M30 126q8-5 16 0"/><path d="M120 134q8-5 16 0"/><path d="M190 122q8-5 16 0"/></g>
  <g class="srf-cocuk"><g transform="translate(-6 12)">
    <path d="M86 96Q120 88 154 96L150 102Q120 96 90 102Z" fill="#fff" opacity=".8"/>
    <ellipse cx="120" cy="92" rx="30" ry="7" fill="#FF4D4D" stroke="#2B2340" stroke-width="2.5"/>
    <path d="M110 88L106 70M128 88L132 72" stroke="#2B6A8F" stroke-width="6" stroke-linecap="round"/>
    <rect x="104" y="48" width="26" height="26" rx="9" fill="#FFD600"/>
    <path d="M104 58L90 50M130 56L146 46" stroke="#E8B27A" stroke-width="5" stroke-linecap="round"/>
    <circle cx="117" cy="38" r="11" fill="#F1C27D"/>
    <path d="M106 36Q108 26 118 27Q128 27 128 35Q120 30 106 36Z" fill="#4A2C1A"/>
    <circle cx="113" cy="38" r="1.7" fill="#2B2340"/><circle cx="121" cy="38" r="1.7" fill="#2B2340"/>
    <path d="M114 43Q117 45.5 120 43" stroke="#2B2340" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  </g></g>
  <path d="M152 150Q178 118 240 112V150Z" fill="#F2DBA8"/>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <line x1="206" y1="144" x2="206" y2="96" stroke="#8A5A2B" stroke-width="5"/>
    <rect x="184" y="92" width="44" height="19" rx="6" fill="#00C9A7" stroke="#2B2340" stroke-width="2"/>
    <text x="206" y="106" font-size="12" fill="#fff">eş</text>
    <rect x="184" y="116" width="44" height="19" rx="6" fill="#FF6B35" stroke="#2B2340" stroke-width="2"/>
    <text x="206" y="130" font-size="12" fill="#fff">zıt</text>
  </g>
</svg>
</div>
`,
      },
      {
        name: "Düşler Şatosu 2",
        file: "duslersatosu2.html",
        beceri: "Okuduğunu anlama",
        desc: "Metinleri okuyup anlayarak şekerden şatolar yap!",
        sinif: "1. - 2. Sınıf",
        emoji: "🍬",
        thumbBg: "linear-gradient(180deg,#FFE3F2,#FFD1E8)",
        customThumb: `
<div class="dusler2-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="ds2Fon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE3F2"/><stop offset="1" stop-color="#FFD1E8"/></linearGradient></defs>
  <rect width="240" height="150" fill="url(#ds2Fon)"/>
  <g fill="#fff" opacity=".85"><ellipse cx="44" cy="26" rx="18" ry="8"/><ellipse cx="200" cy="34" rx="16" ry="7"/></g>
  <path d="M0 136Q60 128 120 134T240 130V150H0Z" fill="#FFB8D9"/>
  <g stroke="#2B2340" stroke-width="2.5">
    <g fill="#fff"><rect x="62" y="62" width="14" height="72"/><rect x="164" y="62" width="14" height="72"/></g>
    <g fill="#FF4D8D" stroke="none"><rect x="62" y="68" width="14" height="8"/><rect x="62" y="86" width="14" height="8"/><rect x="62" y="104" width="14" height="8"/><rect x="164" y="68" width="14" height="8"/><rect x="164" y="86" width="14" height="8"/><rect x="164" y="104" width="14" height="8"/></g>
    <rect x="76" y="84" width="88" height="50" fill="#FFF4E0"/>
    <path d="M76 84H164V90Q153 98 142 90Q131 98 120 90Q109 98 98 90Q87 98 76 90Z" fill="#FF9EC0" stroke="none"/>
    <path d="M106 134V112A14 14 0 0 1 134 112V134Z" fill="#8A5A3B"/>
    <path d="M92 112 C86 106 89 100 93 103 C97 100 100 106 94 112 Q93 113 92 112Z" fill="#FF4D8D" stroke="none"/>
    <path d="M147 112 C141 106 144 100 148 103 C152 100 155 106 149 112 Q148 113 147 112Z" fill="#FF4D8D" stroke="none"/>
  </g>
  <g class="ds2-lolipop">
    <circle cx="69" cy="48" r="14" fill="#FFD600" stroke="#2B2340" stroke-width="2.5"/>
    <path d="M69 48m-9 0a9 9 0 0 1 9 -9a5 5 0 0 1 0 10a3 3 0 0 1 -3 -3" fill="none" stroke="#FF6B35" stroke-width="3" stroke-linecap="round"/>
  </g>
  <g class="ds2-lolipop ds2-lol2">
    <circle cx="171" cy="48" r="14" fill="#9FE8FF" stroke="#2B2340" stroke-width="2.5"/>
    <path d="M171 48m-9 0a9 9 0 0 1 9 -9a5 5 0 0 1 0 10a3 3 0 0 1 -3 -3" fill="none" stroke="#A855F7" stroke-width="3" stroke-linecap="round"/>
  </g>
  <g stroke="#2B2340" stroke-width="2"><path d="M28 136a11 11 0 0 1 22 0Z" fill="#00C9A7"/><path d="M196 136a10 10 0 0 1 20 0Z" fill="#FFD600"/><path d="M218 140a8 8 0 0 1 16 0Z" fill="#FF6B35"/></g>
  <g class="ds2-piril" fill="#fff"><path d="M100 60 L102 65 L107 67 L102 69 L100 74 L98 69 L93 67 L98 65 Z"/><path class="ds2-p2" d="M146 66 L147.5 70 L151.5 71.5 L147.5 73 L146 77 L144.5 73 L140.5 71.5 L144.5 70 Z"/></g>
</svg>
</div>
`,
      }
    ]
  },
  {
    name: "➕ Matematik",
    color: "#FF6B35",
    iconBg: "linear-gradient(135deg, #FF6B35, #FFD600)",
    lineColor: "linear-gradient(90deg, #FF6B35, #FFD600)",
    games: [
      {
        name: "Zıpzıp Yarışı",
        file: "zipzip_yarisi.html",
        desc: "İleri ve geri 2'şer, 3'er, 5'er say; karakterinle taştan taşa zıpla! Akıllı tahtada 3 arkadaşınla aynı anda yarış ya da tek başına gölgeni geç.",
        sinif: "1. - 3. Sınıf — Ritmik sayma (1–3 oyunculu, akıllı tahta)",
        grades: [1, 2, 3],
        beceri: "Ritmik sayma",
        eklenme: "2026-11-26",
        thumbBg: "linear-gradient(180deg, #5FC0FF 0%, #DDF3FF 41%, #7CCB6B 42%, #62B653 100%)",
        customThumb: `
<div class="zipzip-yarisi-thumb">
<svg class="zy-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="zyGok" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5FC0FF"/><stop offset="1" stop-color="#DDF3FF"/></linearGradient></defs>
  <!-- gökyüzü, güneş, bulut, tepeler -->
  <rect width="240" height="64" fill="url(#zyGok)"/>
  <circle cx="178" cy="20" r="15" fill="#FFD84D" opacity=".25"/><circle cx="178" cy="20" r="10" fill="#FFD84D"/>
  <g class="zy-bulut" fill="#fff" opacity=".9"><ellipse cx="128" cy="20" rx="18" ry="7"/><ellipse cx="138" cy="15" rx="11" ry="7"/></g>
  <path d="M0 64Q40 50 84 60T170 56T240 58V70H0Z" fill="#A6E39A"/>
  <rect y="62" width="240" height="88" fill="#7CCB6B"/>
  <path d="M0 150V120Q60 112 120 118T240 114V150Z" fill="#62B653" opacity=".6"/>
  <!-- 3B yol -->
  <path d="M104 63H136L198 150H42Z" fill="#E8D7B6"/>
  <path d="M104 63L42 150H48L106 63ZM136 63L198 150H192L134 63Z" fill="#C9B48F"/>
  <!-- bitiş çizgisi -->
  <g><rect x="106" y="63" width="28" height="3" fill="#222"/><g fill="#fff"><rect x="106" y="63" width="3.5" height="1.5"/><rect x="113" y="63" width="3.5" height="1.5"/><rect x="120" y="63" width="3.5" height="1.5"/><rect x="127" y="63" width="3.5" height="1.5"/><rect x="109.5" y="64.5" width="3.5" height="1.5"/><rect x="116.5" y="64.5" width="3.5" height="1.5"/><rect x="123.5" y="64.5" width="3.5" height="1.5"/><rect x="130.5" y="64.5" width="3.5" height="1.5"/></g></g>
  <!-- uzak taşlar -->
  <ellipse cx="120" cy="68" rx="6" ry="1.8" fill="#B9A88F"/><ellipse cx="120" cy="75" rx="9" ry="2.6" fill="#B9A88F"/>
  <!-- "?" taşı -->
  <g class="zy-soru"><ellipse cx="120" cy="88" rx="15" ry="4.6" fill="#FFD600" stroke="#fff" stroke-width="1.5"/><text x="120" y="91" text-anchor="middle" font-family="Nunito,Arial Rounded MT Bold,sans-serif" font-size="8" font-weight="900" fill="#2B2340">?</text></g>
  <ellipse cx="120" cy="94" rx="5" ry="1.5" fill="#D2C3A6"/><ellipse cx="120" cy="99" rx="6" ry="1.8" fill="#D2C3A6"/>
  <!-- 9 taşı -->
  <ellipse cx="120" cy="108" rx="22" ry="6.5" fill="#B9A88F"/><ellipse cx="120" cy="109.5" rx="22" ry="5" fill="#8F7F68" opacity=".35"/>
  <text x="120" y="111" text-anchor="middle" font-family="Nunito,Arial Rounded MT Bold,sans-serif" font-size="9" font-weight="900" fill="#fff">9</text>
  <!-- 6 ile 9 arası çakıllar (3'er) -->
  <ellipse class="zy-cakil" cx="120" cy="117" rx="8" ry="2.4" fill="#D2C3A6"/><ellipse class="zy-cakil zy-cakil2" cx="120" cy="124" rx="10" ry="3" fill="#D2C3A6"/>
  <!-- 6 taşı -->
  <ellipse cx="120" cy="137" rx="32" ry="9.5" fill="#B9A88F"/><ellipse cx="120" cy="139" rx="32" ry="7.5" fill="#8F7F68" opacity=".35"/>
  <!-- yol kenarı süsleri -->
  <g font-size="14"><text x="58" y="86">🌳</text><text x="166" y="96">🌼</text><text x="28" y="132">🌷</text><text x="200" y="138">🌳</text></g>
  <!-- dizi şeridi -->
  <g font-family="Nunito,Arial Rounded MT Bold,sans-serif" font-weight="900">
    <rect x="8" y="10" width="80" height="22" rx="8" fill="#fff" opacity=".95"/>
    <text x="16" y="25" font-size="11" fill="#2B2340">6 › 9 ›</text>
    <rect x="55" y="13" width="13" height="16" rx="4" fill="#FFD600"/><text x="61.5" y="25" font-size="11" fill="#2B2340" text-anchor="middle">?</text>
    <rect x="70" y="15" width="16" height="12" rx="4" fill="#FF6B35"/><text x="78" y="24.5" font-size="8" fill="#fff" text-anchor="middle">+3</text>
  </g>
  <!-- kanguru -->
  <g class="zy-kar"><path d="M32 92 Q8 98 4 116 Q20 104 42 100Z" fill="#C8783A"/>
    <ellipse cx="52" cy="78" rx="24" ry="28" fill="#D98B48"/>
    <ellipse cx="59" cy="86" rx="12" ry="15" fill="#F2C08A"/>
    <path d="M38 98 Q42 114 74 113 Q78 105 60 101Z" fill="#B86A2E"/>
    <path d="M66 68 Q78 72 80 82" stroke="#B86A2E" stroke-width="6" fill="none" stroke-linecap="round"/>
    <ellipse cx="74" cy="44" rx="17" ry="15" fill="#D98B48"/>
    <ellipse cx="89" cy="49" rx="10" ry="8" fill="#D98B48"/>
    <circle cx="97" cy="47" r="3.2" fill="#3a2a1a"/>
    <ellipse cx="64" cy="23" rx="5.5" ry="13" fill="#D98B48" transform="rotate(-18 64 23)"/>
    <ellipse cx="64" cy="24" rx="2.6" ry="8.5" fill="#F2A5A5" transform="rotate(-18 64 24)"/>
    <ellipse cx="74" cy="22" rx="5" ry="12" fill="#C8783A" transform="rotate(8 74 22)"/>
    <circle cx="79" cy="40" r="5" fill="#fff"/><circle cx="80.5" cy="40" r="2.8" fill="#222"/>
    <circle cx="83" cy="53" r="3.2" fill="#F28B8B" opacity=".6"/>
    <path d="M86 56 Q90 59 94 56" stroke="#3a2a1a" stroke-width="2" fill="none" stroke-linecap="round"/></g>
  <text class="zy-arti" x="140" y="70" font-family="Nunito,Arial Rounded MT Bold,sans-serif" font-size="12" font-weight="900" fill="#fff" stroke="#FF6B35" stroke-width="3" paint-order="stroke">+3</text>
</svg>
</div>
`
      },
      {
        name: "Buz Yolu",
        file: "buz_yolu.html",
        desc: "Penguen Pıtır ile sayı doğrusunda zıpla! Buzların yerini bul, kayıp balıkları yerleştir, ritmik say, en yakın yuvayı bul ve Kutup Yıldızı'na ulaş.",
        sinif: "2. Sınıf — Sayı doğrusu (ritmik sayma, en yakın onluk)",
        eklenme: "2026-11-09",
        thumbBg: "linear-gradient(180deg, #123566 0%, #7DB8E6 42%, #2A7AB8 43%, #1B5A92 76%, #F4FBFF 77%)",
        customThumb: `
<div class="buz-yolu-thumb">
<svg class="by-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="byGok" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#123566"/><stop offset="1" stop-color="#7DB8E6"/></linearGradient>
    <linearGradient id="byDeniz" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B8FCC"/><stop offset="1" stop-color="#1B5A92"/></linearGradient>
  </defs>
  <!-- gökyüzü, kuzey ışığı, buzdağları -->
  <rect width="240" height="64" fill="url(#byGok)"/>
  <g class="by-isik" fill="none" stroke-linecap="round"><path d="M-5 22Q50-2 110 18T245 12" stroke="#3DFFB0" stroke-width="9" opacity=".5"/><path d="M-5 34Q70 12 140 30T245 24" stroke="#A855F7" stroke-width="6" opacity=".4"/></g>
  <g fill="#DCEFFB"><path d="M8 64 30 40 38 46 46 36 66 64Z"/><path d="M160 64 186 34 196 42 204 32 230 64Z"/></g>
  <g fill="#B5DAF2"><path d="M38 46 46 36 66 64Z"/><path d="M196 42 204 32 230 64Z"/></g>
  <!-- deniz -->
  <rect y="63" width="240" height="52" fill="url(#byDeniz)"/>
  <g stroke="#fff" stroke-opacity=".3" stroke-width="1.5" fill="none" stroke-linecap="round"><path d="M10 74q5-3 10 0M70 108q5-3 10 0M150 76q5-3 10 0M206 106q5-3 10 0"/></g>
  <!-- buz kütleleri (0–10) -->
  <g transform="translate(20 92)"><rect x="-9" y="0" width="18" height="5" rx="2.5" fill="#9ED3EE"/><ellipse cx="0" cy="0" rx="9" ry="3.6" fill="#F4FBFF" stroke="#CDEBFA" stroke-width="1"/></g><g transform="translate(42 92)"><rect x="-9" y="0" width="18" height="5" rx="2.5" fill="#9ED3EE"/><ellipse cx="0" cy="0" rx="9" ry="3.6" fill="#F4FBFF" stroke="#CDEBFA" stroke-width="1"/></g><g transform="translate(64 92)"><rect x="-9" y="0" width="18" height="5" rx="2.5" fill="#9ED3EE"/><ellipse cx="0" cy="0" rx="9" ry="3.6" fill="#F4FBFF" stroke="#CDEBFA" stroke-width="1"/></g><g transform="translate(86 92)"><rect x="-9" y="0" width="18" height="5" rx="2.5" fill="#9ED3EE"/><ellipse cx="0" cy="0" rx="9" ry="3.6" fill="#F4FBFF" stroke="#CDEBFA" stroke-width="1"/></g><g transform="translate(108 92)"><rect x="-9" y="0" width="18" height="5" rx="2.5" fill="#9ED3EE"/><ellipse cx="0" cy="0" rx="9" ry="3.6" fill="#F4FBFF" stroke="#CDEBFA" stroke-width="1"/></g><g transform="translate(130 92)"><rect x="-9" y="0" width="18" height="5" rx="2.5" fill="#9ED3EE"/><ellipse cx="0" cy="0" rx="9" ry="3.6" fill="#F4FBFF" stroke="#CDEBFA" stroke-width="1"/></g><g transform="translate(152 92)"><rect x="-9" y="0" width="18" height="5" rx="2.5" fill="#9ED3EE"/><ellipse cx="0" cy="0" rx="9" ry="3.6" fill="#F4FBFF" stroke="#CDEBFA" stroke-width="1"/></g><g transform="translate(174 92)"><rect x="-9" y="0" width="18" height="5" rx="2.5" fill="#9ED3EE"/><ellipse cx="0" cy="0" rx="9" ry="3.6" fill="#F4FBFF" stroke="#CDEBFA" stroke-width="1"/></g><g transform="translate(196 92)"><rect x="-9" y="0" width="18" height="5" rx="2.5" fill="#9ED3EE"/><ellipse cx="0" cy="0" rx="9" ry="3.6" fill="#F4FBFF" stroke="#CDEBFA" stroke-width="1"/></g><g transform="translate(218 92)"><rect x="-9" y="0" width="18" height="5" rx="2.5" fill="#9ED3EE"/><ellipse cx="0" cy="0" rx="9" ry="3.6" fill="#F4FBFF" stroke="#CDEBFA" stroke-width="1"/></g><g transform="translate(240 92)"><rect x="-9" y="0" width="18" height="5" rx="2.5" fill="#9ED3EE"/><ellipse cx="0" cy="0" rx="9" ry="3.6" fill="#F4FBFF" stroke="#CDEBFA" stroke-width="1"/></g>
  <!-- ayak izi yayları: +2 -->
  <g fill="none" stroke="#C9B6FF" stroke-width="1.6" stroke-dasharray="1.5 3" stroke-linecap="round">
    <path d="M20 89Q42 70 64 89"/><path class="by-iz2" d="M64 89Q86 70 108 89"/><path class="by-iz3" d="M108 89Q130 70 152 89"/>
  </g>
  <g font-family="Nunito,Arial Rounded MT Bold,sans-serif" font-size="9" font-weight="900" fill="#fff" stroke="#6B3FC9" stroke-width="2.5" paint-order="stroke" text-anchor="middle">
    <text x="42" y="77">+2</text><text class="by-iz2" x="86" y="77">+2</text><text class="by-iz3" x="130" y="77">+2</text>
  </g>
  <!-- sudan sıçrayan balık -->
  <g class="by-balik"><g transform="translate(178 104)"><path d="M-7 0Q-2-4.5 4 0Q-2 4.5-7 0Z" fill="#FF9F1C"/><path d="M3.5 0 8-3.5V3.5Z" fill="#FF9F1C"/></g></g>
  <!-- kar şeridi ve sayı doğrusu -->
  <path d="M0 116Q15 110 30 116T60 116T90 116T120 116T150 116T180 116T210 116T240 116V150H0Z" fill="#F4FBFF"/>
  <g stroke="#14213D" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="124" x2="232" y2="124"/><line x1="20" y1="118" x2="20" y2="130"/><line x1="42" y1="120" x2="42" y2="128"/><line x1="64" y1="120" x2="64" y2="128"/><line x1="86" y1="120" x2="86" y2="128"/><line x1="108" y1="120" x2="108" y2="128"/><line x1="130" y1="118" x2="130" y2="130"/><line x1="152" y1="120" x2="152" y2="128"/><line x1="174" y1="120" x2="174" y2="128"/><line x1="196" y1="120" x2="196" y2="128"/><line x1="218" y1="120" x2="218" y2="128"/><line x1="240" y1="118" x2="240" y2="130"/></g>
  <path d="M234 124l-6-4v8Z" fill="#14213D"/>
  <g font-family="Nunito,Arial Rounded MT Bold,sans-serif" font-size="11" font-weight="900" fill="#14213D" text-anchor="middle"><text x="20" y="143">0</text><text x="64" y="143">2</text><text x="108" y="143">4</text><text x="152" y="143">6</text><text x="196" y="143">8</text><text x="240" y="143">10</text></g>
  <!-- Pıtır (2'şer zıplar) -->
  <g class="by-x"><g class="by-y">
      <g transform="translate(49 57) scale(.3)">
        <ellipse cx="37" cy="112" rx="11" ry="5.5" fill="#FF9F1C"/><ellipse cx="63" cy="112" rx="11" ry="5.5" fill="#FF9F1C"/>
        <path d="M22 56C8 68 6 88 13 98 19 90 24 78 26 64Z" fill="#162E50"/><path d="M78 56C92 68 94 88 87 98 81 90 76 78 74 64Z" fill="#162E50"/>
        <path d="M50 16C79 16 87 50 85 80 83 104 69 114 50 114 31 114 17 104 15 80 13 50 21 16 50 16Z" fill="#1F3A5F"/>
        <path d="M50 46C68 46 74 66 72 86 70 103 61 109 50 109 39 109 30 103 28 86 26 66 32 46 50 46Z" fill="#fff"/>
        <ellipse cx="39.5" cy="45" rx="11.5" ry="12.5" fill="#fff"/><ellipse cx="60.5" cy="45" rx="11.5" ry="12.5" fill="#fff"/>
        <circle cx="41" cy="46" r="5.2" fill="#14213D"/><circle cx="59" cy="46" r="5.2" fill="#14213D"/>
        <circle cx="43" cy="44" r="1.9" fill="#fff"/><circle cx="61" cy="44" r="1.9" fill="#fff"/>
        <path d="M44 55Q50 51 56 55 50 63 44 55Z" fill="#FF9F1C"/>
        <path d="M24 61Q50 73 76 61L76 70Q50 82 24 70Z" fill="#E63946"/>
      </g>
  </g></g>
</svg>
</div>
`
      },
      {
        name: "Aç Timsah",
        file: "ac_timsah.html",
        desc: "Timsah hep büyük sayıyı yer! Büyüktür-küçüktür işaretini timsahla keşfet, sayıları sırala, akıllı tahtada arkadaşınla yarış!",
        sinif: "2. Sınıf — Sayıların sırası (tek ya da 2 oyunculu)",
        eklenme: "2026-10-20",
        thumbBg: "linear-gradient(180deg, #FFF8F0 0%, #E6F5FF 57%, #6FD3F2 57%, #2E8FD6 100%)",
        customThumb: `
<div class="ac-timsah-thumb">
<svg class="at-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="acTimsahGok" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF8F0"/><stop offset="1" stop-color="#E6F5FF"/></linearGradient>
    <linearGradient id="acTimsahSu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FD3F2"/><stop offset="1" stop-color="#2E8FD6"/></linearGradient>
  </defs>
  <!-- gökyüzü, güneş, tepeler -->
  <rect width="240" height="150" fill="url(#acTimsahGok)"/>
  <circle cx="30" cy="24" r="17" fill="#FFD600" opacity=".18"/><circle cx="30" cy="24" r="11" fill="#FFD600"/>
  <path d="M0 88V76Q24 66 56 72T120 70T184 74T240 72V88Z" fill="#CFEBD5"/>
  <path d="M0 90V82Q30 75 66 80T138 79T200 82T240 80V90Z" fill="#A9DCB4"/>
  <!-- göl -->
  <rect y="86" width="240" height="64" fill="url(#acTimsahSu)"/>
  <path d="M0 86Q15 82 30 86T60 86T90 86T120 86T150 86T180 86T210 86T240 86V90H0Z" fill="#6FD3F2"/>
  <g stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none" stroke-linecap="round"><path d="M20 114q6-4 12 0M96 130q8-5 16 0M178 110q6-4 12 0M140 142q5-3 10 0M48 140q5-3 10 0"/></g>
  <g transform="translate(212 128)"><path d="M0 0 5-9A16 9 0 1 1-5-9Z" fill="#3DBE6B"/><circle cx="6" cy="-6" r="3" fill="#FF9EC0"/></g>
  <!-- sol balık: 23 -->
  <g transform="translate(12 63) scale(.42)">
    <path d="M116 48 148 18q-8 30 0 60z" fill="#9CC9FF" stroke="#2B2D42" stroke-opacity=".22" stroke-width="3" stroke-linejoin="round"/>
      <path d="M50 14q20-16 40-2z" fill="#9CC9FF" stroke="#2B2D42" stroke-opacity=".22" stroke-width="3" stroke-linejoin="round"/>
      <ellipse cx="66" cy="48" rx="58" ry="40" fill="#9CC9FF" stroke="#2B2D42" stroke-opacity=".22" stroke-width="3"/>
      <ellipse cx="72" cy="21" rx="34" ry="7.5" fill="#fff" opacity=".42"/>
      <circle cx="21" cy="40" r="7" fill="#fff"/><circle cx="22" cy="40.5" r="4.4" fill="#2B2D42"/>
    <text x="72" y="64" text-anchor="middle" font-size="48" font-weight="900" fill="#2B2D42" font-family="Nunito,Arial Rounded MT Bold,sans-serif">23</text>
  </g>
  <!-- timsah (ağzı 45'e doğru açılır) -->
  <svg x="74" y="53" width="100" height="53" viewBox="0 0 320 170">
    <path d="M100 120q-4 22-12 30h22q2-12 6-26z" fill="#24894A"/><path d="M192 118q-2 22-8 32h22q0-14 4-28z" fill="#24894A"/>
    <path d="M72 96C48 92 26 80 6 58c8 26 30 54 70 64z" fill="#3DBE6B"/>
    <path d="M56 88l5-8 5 7zM42 81l4-7 5 6zM29 73l4-7 4 6zM18 65l3-6 4 5z" fill="#24894A"/>
    <ellipse cx="140" cy="104" rx="82" ry="30" fill="#3DBE6B"/>
    <path d="M80 118c30 14 96 16 134-2-10 14-44 20-74 20s-50-6-60-18z" fill="#FCEFB4"/>
    <g fill="#24894A"><circle cx="86" cy="82" r="6"/><circle cx="104" cy="77" r="6.5"/><circle cx="122" cy="75" r="7"/><circle cx="140" cy="74" r="7"/><circle cx="158" cy="75" r="7"/><circle cx="176" cy="78" r="6.5"/><circle cx="193" cy="83" r="6"/></g>
    <path d="M84 124q-2 16-10 26h24q2-12 4-24z" fill="#3DBE6B"/><path d="M176 124q0 16-6 26h24q0-12 2-24z" fill="#3DBE6B"/>
    <g class="at-alt"><path d="M204 104h98c10 1 10 9 0 11-30 5-66 7-96 3z" fill="#3DBE6B"/><g fill="#fff"><path d="M254 105l4-8 4 8z"/><path d="M268 105l4-8 4 8z"/><path d="M282 105l4-8 4 8z"/></g></g>
    <ellipse cx="222" cy="98" rx="28" ry="22" fill="#3DBE6B"/>
    <ellipse cx="233" cy="111" rx="7" ry="3.6" fill="#FF9EC0" opacity=".55"/>
    <g class="at-ust"><path d="M204 86c34-6 76-4 102 4 8 3 8 11 0 14H204z" fill="#3DBE6B"/><g fill="#fff"><path d="M226 103l4 8 4-8z"/><path d="M242 103l4 8 4-8z"/><path d="M258 103l4 8 4-8z"/><path d="M274 103l4 8 4-8z"/><path d="M290 103l3.5 7 3.5-7z"/></g><circle cx="298" cy="89" r="3.5" fill="#24894A"/></g>
    <circle cx="228" cy="78" r="13" fill="#3DBE6B"/><circle cx="230" cy="76" r="9" fill="#fff"/><ellipse cx="232" cy="76.5" rx="3" ry="6.5" fill="#1E1E2E"/><circle cx="233.6" cy="73" r="1.6" fill="#fff"/>
    <path d="M217 70c6-8 17-11 25-5" stroke="#24894A" stroke-width="3.4" fill="none" stroke-linecap="round"/>
  </svg>
  <!-- sağ balık: 45 (yenir, sonra geri gelir) -->
  <g transform="translate(166 63) scale(.42)">
    <g class="at-yem">
      <g transform="translate(150 0) scale(-1 1)">
      <path d="M116 48 148 18q-8 30 0 60z" fill="#FFD25E" stroke="#2B2D42" stroke-opacity=".22" stroke-width="3" stroke-linejoin="round"/>
      <path d="M50 14q20-16 40-2z" fill="#FFD25E" stroke="#2B2D42" stroke-opacity=".22" stroke-width="3" stroke-linejoin="round"/>
      <ellipse cx="66" cy="48" rx="58" ry="40" fill="#FFD25E" stroke="#2B2D42" stroke-opacity=".22" stroke-width="3"/>
      <ellipse cx="72" cy="21" rx="34" ry="7.5" fill="#fff" opacity=".42"/>
      <circle cx="21" cy="40" r="7" fill="#fff"/><circle cx="22" cy="40.5" r="4.4" fill="#2B2D42"/>
      </g>
      <text x="78" y="64" text-anchor="middle" font-size="48" font-weight="900" fill="#2B2D42" font-family="Nunito,Arial Rounded MT Bold,sans-serif">45</text>
    </g>
  </g>
  <!-- işaret balonu: 23 < 45 -->
  <g class="at-isaret"><circle cx="120" cy="32" r="14" fill="#fff" stroke="#C9D6E3" stroke-width="2"/><path d="M125 25 115 32 125 39" fill="none" stroke="#2FA85A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
</svg>
</div>`,
      },
      {
        name: "Pota Düellosu",
        file: "pota_duellosu.html",
        desc: "İki oyuncu karşı karşıya! Onluk ve birlikle sayıyı kur, rakibinden önce bil, topu çal ve basket at!",
        sinif: "2. Sınıf — Onluk ve birlik (2 oyunculu)",
        thumbBg: "linear-gradient(180deg, #150f28 0%, #3d3159 64%, #E9B676 64%, #C08043 100%)",
        customThumb: `
<div class="pota-duello-thumb">
<svg class="pd-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <!-- tribün -->
  <rect x="0" y="0" width="240" height="44" fill="#2a2145"/>
  <g>
    <circle cx="8" cy="14" r="4" fill="#FFDBAC"/><circle cx="24" cy="14" r="4" fill="#C68642"/><circle cx="40" cy="14" r="4" fill="#F1C27D"/><circle cx="56" cy="14" r="4" fill="#8D5524"/><circle cx="72" cy="14" r="4" fill="#E0AC69"/><circle cx="88" cy="14" r="4" fill="#FFDBAC"/><circle cx="104" cy="14" r="4" fill="#F1C27D"/><circle cx="120" cy="14" r="4" fill="#C68642"/><circle cx="136" cy="14" r="4" fill="#E0AC69"/><circle cx="152" cy="14" r="4" fill="#FFDBAC"/><circle cx="168" cy="14" r="4" fill="#8D5524"/><circle cx="184" cy="14" r="4" fill="#F1C27D"/><circle cx="200" cy="14" r="4" fill="#E0AC69"/><circle cx="216" cy="14" r="4" fill="#C68642"/><circle cx="232" cy="14" r="4" fill="#FFDBAC"/>
    <rect x="3" y="18" width="10" height="9" rx="4" fill="#FF6B35"/><rect x="19" y="18" width="10" height="9" rx="4" fill="#4D9FFF"/><rect x="35" y="18" width="10" height="9" rx="4" fill="#FFD600"/><rect x="51" y="18" width="10" height="9" rx="4" fill="#FF4D8D"/><rect x="67" y="18" width="10" height="9" rx="4" fill="#00C9A7"/><rect x="83" y="18" width="10" height="9" rx="4" fill="#A855F7"/><rect x="99" y="18" width="10" height="9" rx="4" fill="#FF6B35"/><rect x="115" y="18" width="10" height="9" rx="4" fill="#4D9FFF"/><rect x="131" y="18" width="10" height="9" rx="4" fill="#FFD600"/><rect x="147" y="18" width="10" height="9" rx="4" fill="#FF4D8D"/><rect x="163" y="18" width="10" height="9" rx="4" fill="#00C9A7"/><rect x="179" y="18" width="10" height="9" rx="4" fill="#A855F7"/><rect x="195" y="18" width="10" height="9" rx="4" fill="#FF6B35"/><rect x="211" y="18" width="10" height="9" rx="4" fill="#4D9FFF"/><rect x="227" y="18" width="10" height="9" rx="4" fill="#FFD600"/>
    <circle cx="16" cy="32" r="4" fill="#E0AC69"/><circle cx="32" cy="32" r="4" fill="#FFDBAC"/><circle cx="48" cy="32" r="4" fill="#C68642"/><circle cx="64" cy="32" r="4" fill="#F1C27D"/><circle cx="80" cy="32" r="4" fill="#8D5524"/><circle cx="96" cy="32" r="4" fill="#E0AC69"/><circle cx="144" cy="32" r="4" fill="#FFDBAC"/><circle cx="160" cy="32" r="4" fill="#C68642"/><circle cx="176" cy="32" r="4" fill="#F1C27D"/><circle cx="192" cy="32" r="4" fill="#E0AC69"/><circle cx="208" cy="32" r="4" fill="#8D5524"/><circle cx="224" cy="32" r="4" fill="#FFDBAC"/>
  </g>
  <rect x="0" y="0" width="240" height="44" fill="#150f28" opacity=".3"/>
  <!-- skor tabelası -->
  <rect x="84" y="26" width="72" height="22" rx="7" fill="#07050e" stroke="#FFD600" stroke-opacity=".5" stroke-width="1.5"/>
  <text x="102" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#FF6B35" font-family="Nunito,Arial Rounded MT Bold,sans-serif">2</text>
  <text x="120" y="42" text-anchor="middle" font-size="11" font-weight="900" fill="#FFD600" font-family="Nunito,Arial Rounded MT Bold,sans-serif">VS</text>
  <text x="138" y="42" text-anchor="middle" font-size="13" font-weight="900" fill="#4D9FFF" font-family="Nunito,Arial Rounded MT Bold,sans-serif">1</text>
  <!-- LED pano -->
  <rect x="0" y="86" width="240" height="11" fill="#0e0a1c"/><rect x="0" y="86" width="240" height="1.5" fill="#FF6B35"/>
  <text x="120" y="95" text-anchor="middle" font-size="7" font-weight="900" fill="#FFD600" letter-spacing="1.5" font-family="Nunito,Arial Rounded MT Bold,sans-serif">POTA DÜELLOSU ★ ONLUK ★ BİRLİK</text>
  <!-- parke ve boyalı alanlar -->
  <path d="M0 99 H58 L66 150 H0 Z" fill="#FF6B35" opacity=".5"/>
  <path d="M240 99 H182 L174 150 H240 Z" fill="#4D9FFF" opacity=".5"/>
  <ellipse cx="120" cy="128" rx="30" ry="6" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2"/>
  <!-- sol pota -->
  <rect x="6" y="128" width="20" height="14" rx="4" fill="#2B2140"/><rect x="13" y="40" width="5" height="90" fill="#5b5470"/>
  <rect x="19" y="36" width="4" height="36" rx="1" fill="#eef7ff" stroke="#120e22" stroke-width="1"/>
  <ellipse cx="37" cy="60" rx="13" ry="2.6" fill="none" stroke="#FF6B35" stroke-width="2.5"/>
  <path d="M24 61 L29 76 L45 76 L50 61 M24 61 L37 76 M50 61 L37 76" fill="none" stroke="#fff" stroke-width="1.2"/>
  <!-- sağ pota -->
  <rect x="214" y="128" width="20" height="14" rx="4" fill="#2B2140"/><rect x="222" y="40" width="5" height="90" fill="#5b5470"/>
  <rect x="217" y="36" width="4" height="36" rx="1" fill="#eef7ff" stroke="#120e22" stroke-width="1"/>
  <ellipse cx="203" cy="60" rx="13" ry="2.6" fill="none" stroke="#FF6B35" stroke-width="2.5"/>
  <path class="pd-file" d="M190 61 L195 76 L211 76 L216 61 M190 61 L203 76 M216 61 L203 76" fill="none" stroke="#fff" stroke-width="1.2"/>
  <!-- sol oyuncu (erkek) -->
  <ellipse cx="92" cy="141" rx="14" ry="3" fill="#000" opacity=".25"/>
  <rect x="85" y="118" width="5" height="21" rx="2" fill="#E8B27A"/><rect x="94" y="118" width="5" height="21" rx="2" fill="#E8B27A"/>
  <rect x="83" y="137" width="9" height="5" rx="2" fill="#a63a10"/><rect x="93" y="137" width="9" height="5" rx="2" fill="#a63a10"/>
  <rect x="82" y="108" width="20" height="14" rx="4" fill="#a63a10"/>
  <rect x="82" y="88" width="20" height="24" rx="6" fill="#FF6B35"/>
  <text x="92" y="105" text-anchor="middle" font-size="11" font-weight="900" fill="#fff" font-family="Nunito,Arial Rounded MT Bold,sans-serif">7</text>
  <path d="M100 92 L110 104" stroke="#E8B27A" stroke-width="4.5" stroke-linecap="round"/>
  <circle cx="92" cy="78" r="9.5" fill="#F1C27D"/><path d="M82.5 77 Q82 67 92 68 Q102 67 101.5 76 Q97 71 92 72 Q87 71 82.5 77Z" fill="#3b2412"/>
  <rect x="82.5" y="71" width="19" height="3" rx="1.5" fill="#FF6B35"/><circle cx="96" cy="78" r="1.4" fill="#222"/>
  <!-- sağ oyuncu (kadın) -->
  <ellipse cx="150" cy="141" rx="14" ry="3" fill="#000" opacity=".25"/>
  <rect x="143" y="118" width="5" height="21" rx="2" fill="#E8B27A"/><rect x="152" y="118" width="5" height="21" rx="2" fill="#E8B27A"/>
  <rect x="140" y="137" width="9" height="5" rx="2" fill="#1d4f9a"/><rect x="151" y="137" width="9" height="5" rx="2" fill="#1d4f9a"/>
  <rect x="140" y="108" width="20" height="14" rx="4" fill="#1d4f9a"/>
  <rect x="140" y="88" width="20" height="24" rx="6" fill="#4D9FFF"/>
  <text x="150" y="105" text-anchor="middle" font-size="11" font-weight="900" fill="#fff" font-family="Nunito,Arial Rounded MT Bold,sans-serif">11</text>
  <path d="M142 92 L134 104" stroke="#E8B27A" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M157 70 Q169 72 167 86 Q166 92 161 94 Q164 86 158 79Z" fill="#4a2a14"/>
  <circle cx="150" cy="78" r="9.5" fill="#F1C27D"/><path d="M140.5 79 Q139 67 150 68 Q160 67 159.5 77 Q157 72 152 72 Q150 75 147 73 Q143 73 140.5 79Z" fill="#4a2a14"/>
  <rect x="140.5" y="71" width="19" height="3" rx="1.5" fill="#4D9FFF"/><circle cx="146" cy="78" r="1.4" fill="#222"/>
  <!-- top -->
  <g class="pd-top"><circle r="6" fill="#F0621F" stroke="#6e2a0c" stroke-width="1.3"/><path d="M-6 0 H6 M0 -6 V6" stroke="#6e2a0c" stroke-width="1"/></g>
</svg>
</div>`,
      },
      {
        name: "Panayır Tahmincisi",
        file: "panayir_tahmincisi.html",
        desc: "Saymadan tahmin et! Soldaki kavanozda kaç şeker varsa sağdakini kıyasla, perde inmeden tahminini ver, bilet kazan, panayırını kur!",
        sinif: "2. Sınıf — Miktar ve ölçü tahmini",
        thumbBg: "linear-gradient(170deg, #6D4FC2 0%, #9A6FE0 45%, #FFD27A 46%, #FFB84D 100%)",
        customThumb: `
<div class="panayir-thumb">
<svg class="pt-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <!-- dönme dolap (arka) -->
  <polygon points="196,150 234,150 215,96" fill="#C9803A"/>
  <g class="pt-dolap"><circle cx="215" cy="92" r="34" fill="none" stroke="#FFD600" stroke-width="4"/><line x1="215" y1="92" x2="215" y2="58" stroke="#FFD600" stroke-width="2"/><line x1="215" y1="92" x2="249" y2="92" stroke="#FFD600" stroke-width="2"/><line x1="215" y1="92" x2="215" y2="126" stroke="#FFD600" stroke-width="2"/><line x1="215" y1="92" x2="181" y2="92" stroke="#FFD600" stroke-width="2"/><rect x="209" y="52" width="12" height="10" rx="3" fill="#FF4D8D"/><rect x="243" y="86" width="12" height="10" rx="3" fill="#4D9FFF"/><rect x="209" y="122" width="12" height="10" rx="3" fill="#00C9A7"/><rect x="175" y="86" width="12" height="10" rx="3" fill="#FF6B35"/></g>
  <!-- tente -->
  <rect x="0" y="0" width="240" height="14" fill="#FF6B35"/><g><rect x="0" y="0" width="12" height="14" fill="#fff"/><rect x="24" y="0" width="12" height="14" fill="#fff"/><rect x="48" y="0" width="12" height="14" fill="#fff"/><rect x="72" y="0" width="12" height="14" fill="#fff"/><rect x="96" y="0" width="12" height="14" fill="#fff"/><rect x="120" y="0" width="12" height="14" fill="#fff"/><rect x="144" y="0" width="12" height="14" fill="#fff"/><rect x="168" y="0" width="12" height="14" fill="#fff"/><rect x="192" y="0" width="12" height="14" fill="#fff"/><rect x="216" y="0" width="12" height="14" fill="#fff"/></g>
  <!-- sol kavanoz: 14 şeker -->
  <rect x="30" y="64" width="66" height="76" rx="10" fill="#EAF4FF" stroke="#7AA6C9" stroke-width="3"/><rect x="46" y="56" width="34" height="12" rx="4" fill="#C9803A"/>
  <circle cx="44" cy="78" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="58" cy="74" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="72" cy="80" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="50" cy="92" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="64" cy="90" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="78" cy="94" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="46" cy="106" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="60" cy="104" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="74" cy="108" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="54" cy="118" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="68" cy="120" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="82" cy="116" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="40" cy="120" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="86" cy="80" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/>
  <rect x="34" y="30" width="58" height="22" rx="8" fill="#6D4FC2" stroke="#fff" stroke-width="2"/><text x="63" y="46" text-anchor="middle" font-size="13" font-weight="900" fill="#fff" font-family="Nunito,Arial Rounded MT Bold,sans-serif">14 adet</text>
  <!-- sağ kavanoz: ? -->
  <rect x="136" y="64" width="66" height="76" rx="10" fill="#EAF4FF" stroke="#7AA6C9" stroke-width="3"/><rect x="152" y="56" width="34" height="12" rx="4" fill="#C9803A"/>
  <circle cx="150" cy="76" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="166" cy="72" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="182" cy="80" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="158" cy="90" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="174" cy="88" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="190" cy="96" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="152" cy="104" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="168" cy="102" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="184" cy="108" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="160" cy="118" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="176" cy="120" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="194" cy="116" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="146" cy="118" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="196" cy="74" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="142" cy="92" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="188" cy="124" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="170" cy="110" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="154" cy="130" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="180" cy="132" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/><circle cx="144" cy="106" r="4" fill="#FF4D8D" stroke="#B2114A" stroke-width="1"/>
  <g class="pt-perde"><rect x="130" y="52" width="78" height="92" rx="8" fill="#FF4D4D" stroke="#B22"/><rect x="130" y="52" width="78" height="8" rx="4" fill="#FFD600"/><text x="169" y="118" text-anchor="middle" font-size="46" font-weight="900" fill="#fff" font-family="Nunito,Arial Rounded MT Bold,sans-serif">?</text></g>
  <g class="pt-soru"><rect x="138" y="30" width="62" height="22" rx="8" fill="#00C9A7" stroke="#fff" stroke-width="2"/><text x="169" y="46" text-anchor="middle" font-size="13" font-weight="900" fill="#fff" font-family="Nunito,Arial Rounded MT Bold,sans-serif">Kaç adet?</text></g>
</svg>
</div>`,
      },
      {
        name: "Rakam Oteli",
        file: "rakam_oteli.html",
        desc: "Onlar ve birler odalarındaki misafirlerle basamak ve basamak değerini bul, sayıları onluk ve birliklerle kur!",
        sinif: "2. Sınıf — İki basamaklı sayıları çözümleme",
        thumbBg: "linear-gradient(170deg, #BFE5FF 0%, #E3F4FF 60%, #FFF4E4 100%)",
        customThumb: `
<div class="rakam-oteli-thumb">
<svg class="ro-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <!-- çimen -->
  <ellipse cx="120" cy="150" rx="150" ry="16" fill="#8FD07B"/>
  <!-- bina -->
  <rect x="34" y="34" width="172" height="110" rx="6" fill="#FFE3C7" stroke="#EDBF93" stroke-width="3"/>
  <!-- ışıklı tabela -->
  <rect x="64" y="8" width="112" height="26" rx="9" fill="#2B2340"/>
  <text x="120" y="26" text-anchor="middle" font-size="12" font-weight="900" fill="#FFD600" letter-spacing="1.5" font-family="Nunito,Arial Rounded MT Bold,sans-serif">RAKAM OTELİ</text>
  <!-- tente -->
  <clipPath id="roClip"><rect x="34" y="40" width="172" height="20"/></clipPath>
  <g clip-path="url(#roClip)"><rect x="34.0" y="40" width="21.5" height="8" fill="#FF6B35"/><circle cx="44.75" cy="48" r="10.75" fill="#FF6B35"/><rect x="55.5" y="40" width="21.5" height="8" fill="#fff"/><circle cx="66.25" cy="48" r="10.75" fill="#fff"/><rect x="77.0" y="40" width="21.5" height="8" fill="#FF6B35"/><circle cx="87.75" cy="48" r="10.75" fill="#FF6B35"/><rect x="98.5" y="40" width="21.5" height="8" fill="#fff"/><circle cx="109.25" cy="48" r="10.75" fill="#fff"/><rect x="120.0" y="40" width="21.5" height="8" fill="#FF6B35"/><circle cx="130.75" cy="48" r="10.75" fill="#FF6B35"/><rect x="141.5" y="40" width="21.5" height="8" fill="#fff"/><circle cx="152.25" cy="48" r="10.75" fill="#fff"/><rect x="163.0" y="40" width="21.5" height="8" fill="#FF6B35"/><circle cx="173.75" cy="48" r="10.75" fill="#FF6B35"/><rect x="184.5" y="40" width="21.5" height="8" fill="#fff"/><circle cx="195.25" cy="48" r="10.75" fill="#fff"/></g>
  <!-- onlar odası -->
  <rect x="44" y="60" width="72" height="72" rx="8" fill="#EEF5FF" stroke="#4D9FFF" stroke-width="4"/>
  <rect x="58" y="56" width="44" height="11" rx="4" fill="#4D9FFF"/><text x="80" y="64.5" text-anchor="middle" font-size="7.5" font-weight="900" fill="#fff" font-family="Nunito,sans-serif">ONLAR</text>
  <g class="ro-p ro-r1"><rect x="62" y="70" width="8" height="50" rx="2" fill="#4D9FFF" stroke="#2F7FE0" stroke-width="1.5"/></g><g class="ro-p ro-r2"><rect x="74" y="70" width="8" height="50" rx="2" fill="#4D9FFF" stroke="#2F7FE0" stroke-width="1.5"/></g><g class="ro-p ro-r3"><rect x="86" y="70" width="8" height="50" rx="2" fill="#4D9FFF" stroke="#2F7FE0" stroke-width="1.5"/></g><g class="ro-p ro-r4"><rect x="98" y="70" width="8" height="50" rx="2" fill="#4D9FFF" stroke="#2F7FE0" stroke-width="1.5"/></g>
  <!-- birler odası -->
  <rect x="124" y="60" width="72" height="72" rx="8" fill="#FFF3EC" stroke="#FF6B35" stroke-width="4"/>
  <rect x="138" y="56" width="44" height="11" rx="4" fill="#FF6B35"/><text x="160" y="64.5" text-anchor="middle" font-size="7.5" font-weight="900" fill="#fff" font-family="Nunito,sans-serif">BİRLER</text>
  <g class="ro-p ro-c1"><rect x="136" y="92" width="9" height="9" rx="2" fill="#FF6B35" stroke="#E0501E" stroke-width="1.2"/></g><g class="ro-p ro-c2"><rect x="148" y="92" width="9" height="9" rx="2" fill="#FF6B35" stroke="#E0501E" stroke-width="1.2"/></g><g class="ro-p ro-c3"><rect x="160" y="92" width="9" height="9" rx="2" fill="#FF6B35" stroke="#E0501E" stroke-width="1.2"/></g><g class="ro-p ro-c4"><rect x="172" y="92" width="9" height="9" rx="2" fill="#FF6B35" stroke="#E0501E" stroke-width="1.2"/></g><g class="ro-p ro-c5"><rect x="136" y="104" width="9" height="9" rx="2" fill="#FF6B35" stroke="#E0501E" stroke-width="1.2"/></g><g class="ro-p ro-c6"><rect x="148" y="104" width="9" height="9" rx="2" fill="#FF6B35" stroke="#E0501E" stroke-width="1.2"/></g><g class="ro-p ro-c7"><rect x="160" y="104" width="9" height="9" rx="2" fill="#FF6B35" stroke="#E0501E" stroke-width="1.2"/></g>
  <!-- sonuç etiketi -->
  <g class="ro-p ro-lbl"><rect x="8" y="6" width="46" height="28" rx="10" fill="#FFD600" stroke="#E0A800" stroke-width="2"/><text x="31" y="27" text-anchor="middle" font-size="20" font-weight="900" fill="#2B2340" font-family="Nunito,Arial Rounded MT Bold,sans-serif">47</text></g>
</svg>
</div>`,
      },
      {
        name: "Kurabiye Fırını",
        file: "kurabiye_firini.html",
        desc: "Siparişi oku, kutu ve kurabiyelerle hazırla, sayıyı rakamla ve yazıyla yaz!",
        sinif: "2. Sınıf — 100'e kadar sayıların temsilleri",
        thumbBg: "linear-gradient(160deg, #FFF8EE 0%, #FCE7CF 55%, #F6D3AE 100%)",
        customThumb: `
<div class="kurabiye-thumb">
<svg class="kf-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <!-- tente -->
  <rect x="0" y="0" width="240" height="12" fill="#fff"/><circle cx="30" cy="12" r="10" fill="#fff"/><circle cx="70" cy="12" r="10" fill="#fff"/><circle cx="110" cy="12" r="10" fill="#fff"/><circle cx="150" cy="12" r="10" fill="#fff"/><circle cx="190" cy="12" r="10" fill="#fff"/><circle cx="230" cy="12" r="10" fill="#fff"/><rect x="0" y="0" width="20" height="12" fill="#FF4D8D"/><circle cx="10" cy="12" r="10" fill="#FF4D8D"/><rect x="40" y="0" width="20" height="12" fill="#FF4D8D"/><circle cx="50" cy="12" r="10" fill="#FF4D8D"/><rect x="80" y="0" width="20" height="12" fill="#FF4D8D"/><circle cx="90" cy="12" r="10" fill="#FF4D8D"/><rect x="120" y="0" width="20" height="12" fill="#FF4D8D"/><circle cx="130" cy="12" r="10" fill="#FF4D8D"/><rect x="160" y="0" width="20" height="12" fill="#FF4D8D"/><circle cx="170" cy="12" r="10" fill="#FF4D8D"/><rect x="200" y="0" width="20" height="12" fill="#FF4D8D"/><circle cx="210" cy="12" r="10" fill="#FF4D8D"/>
  <!-- tezgâh -->
  <rect x="0" y="128" width="240" height="22" fill="#C98B5A"/><rect x="0" y="128" width="240" height="5" fill="#E0A877"/>
  <!-- sipariş fişi (rozet altında kalsın diye aşağıda) -->
  <path d="M16 36 H84 V112 l-5.7 6 -5.7 -6 -5.7 6 -5.7 -6 -5.7 6 -5.6 -6 -5.7 6 -5.7 -6 -5.7 6 -5.7 -6 -5.7 6 -5.7 -6 Z" fill="#fff" stroke="#E2C99A" stroke-width="2"/>
  <text x="50" y="56" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="800" font-size="10" fill="#7A6450">SİPARİŞ</text>
  <text x="50" y="92" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="32" fill="#2B2140">37</text>
  <g class="kf-p kf-ok"><circle cx="80" cy="38" r="11" fill="#00C9A7"/><path d="M74.5 38.5 l4 4 7 -8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
  <!-- tepsi -->
  <rect x="98" y="44" width="134" height="80" rx="10" fill="#F6DDB4" stroke="#B07436" stroke-width="5"/>
  <g class="kf-p kf-b1"><rect x="106" y="54" width="36" height="22" rx="4" fill="#C98B4F" stroke="#8A5524" stroke-width="2"/><rect x="108.5" y="56.5" width="31" height="17" rx="2" fill="#F6E3C0"/><circle cx="114" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="120" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="126" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="132" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="138" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="114" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="120" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="126" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="132" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="138" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/></g><g class="kf-p kf-b2"><rect x="146" y="54" width="36" height="22" rx="4" fill="#C98B4F" stroke="#8A5524" stroke-width="2"/><rect x="148.5" y="56.5" width="31" height="17" rx="2" fill="#F6E3C0"/><circle cx="154" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="160" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="166" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="172" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="178" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="154" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="160" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="166" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="172" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="178" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/></g><g class="kf-p kf-b3"><rect x="186" y="54" width="36" height="22" rx="4" fill="#C98B4F" stroke="#8A5524" stroke-width="2"/><rect x="188.5" y="56.5" width="31" height="17" rx="2" fill="#F6E3C0"/><circle cx="194" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="200" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="206" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="212" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="218" cy="62" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="194" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="200" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="206" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="212" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/><circle cx="218" cy="70" r="2.3" fill="#E3A857" stroke="#B9782F" stroke-width=".6"/></g><g class="kf-p kf-c1"><circle cx="116" cy="94" r="6.5" fill="#E3A857" stroke="#B9782F" stroke-width="1.2"/><circle cx="114" cy="92.5" r="1.1" fill="#5A3825"/><circle cx="118" cy="96" r="1.1" fill="#5A3825"/></g><g class="kf-p kf-c2"><circle cx="132" cy="94" r="6.5" fill="#E3A857" stroke="#B9782F" stroke-width="1.2"/><circle cx="130" cy="92.5" r="1.1" fill="#5A3825"/><circle cx="134" cy="96" r="1.1" fill="#5A3825"/></g><g class="kf-p kf-c3"><circle cx="148" cy="94" r="6.5" fill="#E3A857" stroke="#B9782F" stroke-width="1.2"/><circle cx="146" cy="92.5" r="1.1" fill="#5A3825"/><circle cx="150" cy="96" r="1.1" fill="#5A3825"/></g><g class="kf-p kf-c4"><circle cx="164" cy="94" r="6.5" fill="#E3A857" stroke="#B9782F" stroke-width="1.2"/><circle cx="162" cy="92.5" r="1.1" fill="#5A3825"/><circle cx="166" cy="96" r="1.1" fill="#5A3825"/></g><g class="kf-p kf-c5"><circle cx="180" cy="94" r="6.5" fill="#E3A857" stroke="#B9782F" stroke-width="1.2"/><circle cx="178" cy="92.5" r="1.1" fill="#5A3825"/><circle cx="182" cy="96" r="1.1" fill="#5A3825"/></g><g class="kf-p kf-c6"><circle cx="116" cy="110" r="6.5" fill="#E3A857" stroke="#B9782F" stroke-width="1.2"/><circle cx="114" cy="108.5" r="1.1" fill="#5A3825"/><circle cx="118" cy="112" r="1.1" fill="#5A3825"/></g><g class="kf-p kf-c7"><circle cx="132" cy="110" r="6.5" fill="#E3A857" stroke="#B9782F" stroke-width="1.2"/><circle cx="130" cy="108.5" r="1.1" fill="#5A3825"/><circle cx="134" cy="112" r="1.1" fill="#5A3825"/></g>
</svg>
</div>`,
      },
      {
        name: "Kedi Kasabası",
        file: "kedi_kasabasi.html",
        desc: "Çatılarda ritmik say, mamaları doğru kapıya götür, kedileri sepetlere doldur!",
        sinif: "2. Sınıf — 100'e kadar sayılar",
        thumbBg: "linear-gradient(170deg, #2A2554 0%, #463F82 100%)",
        customThumb: `
<div class="kedi-kasabasi-thumb">
<svg class="kk-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <!-- gece gökyüzü -->
  <rect width="240" height="150" fill="url(#kkGece)"/>
  <defs><linearGradient id="kkGece" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#211D48"/><stop offset="1" stop-color="#463F82"/></linearGradient></defs>
  <circle cx="210" cy="24" r="12" fill="#FFE98A"/><circle cx="216" cy="20" r="10" fill="#2A2554"/>
  <circle class="kk-yildiz" cx="30" cy="18" r="1.8" fill="#fff"/>
  <circle class="kk-yildiz" cx="96" cy="12" r="1.6" fill="#fff"/>
  <circle class="kk-yildiz" cx="150" cy="30" r="1.8" fill="#fff"/>
  <!-- çatılar (rozet altında kalsın diye 14px aşağıda) -->
  <g transform="translate(0,14)">
  <polygon points="10,78 36,56 62,78" fill="#A855F7"/>
  <rect x="14" y="78" width="44" height="50" fill="#7C3AED"/>
  <rect x="19" y="85" width="34" height="18" rx="5" fill="#fff"/>
  <rect x="30" y="109" width="12" height="11" rx="2" fill="#FFE98A" opacity=".85"/>
  <text x="36" y="99" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="14" fill="#2B2140">10</text>
  <polygon points="66,78 92,56 118,78" fill="#FF4D8D"/>
  <rect x="70" y="78" width="44" height="50" fill="#D93673"/>
  <rect x="75" y="85" width="34" height="18" rx="5" fill="#fff"/>
  <rect x="86" y="109" width="12" height="11" rx="2" fill="#FFE98A" opacity=".85"/>
  <text x="92" y="99" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="14" fill="#2B2140">20</text>
  <polygon points="122,78 148,56 174,78" fill="#FF6B35"/>
  <rect x="126" y="78" width="44" height="50" fill="#D9531F"/>
  <rect x="131" y="85" width="34" height="18" rx="5" fill="#fff"/>
  <rect x="142" y="109" width="12" height="11" rx="2" fill="#FFE98A" opacity=".85"/>
  <text x="148" y="99" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="14" fill="#2B2140">30</text>
  <polygon points="178,78 204,56 230,78" fill="#4D9FFF"/>
  <rect x="182" y="78" width="44" height="50" fill="#2F7FE0"/>
  <rect x="187" y="85" width="34" height="18" rx="5" fill="#FFF6C2" stroke="#E0A800" stroke-width="2" stroke-dasharray="4 3"/>
  <rect x="198" y="109" width="12" height="11" rx="2" fill="#FFE98A" opacity=".85"/>
  <text class="kk-soru" x="204" y="99" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="14" fill="#B07D00">?</text>
  <text class="kk-cevap" x="204" y="99" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="14" fill="#00A88B">40</text>
  </g>
  <!-- zemin + adım okları -->
  <rect x="0" y="128" width="240" height="22" fill="#1A1638"/>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="10" fill="#2B2140">
    <rect x="52" y="132" width="24" height="14" rx="7" fill="#FFD600"/><text x="64" y="142.5" text-anchor="middle">+10</text>
    <rect x="108" y="132" width="24" height="14" rx="7" fill="#FFD600"/><text x="120" y="142.5" text-anchor="middle">+10</text>
    <rect x="164" y="132" width="24" height="14" rx="7" fill="#FFD600"/><text x="176" y="142.5" text-anchor="middle">+10</text>
  </g>
  <!-- zıplayan kedi: çatıdan çatıya -->
  <g transform="translate(16,32)"><g class="kk-kedi">
      <g transform="scale(.34)">
        <path d="M86 98 C108 96 112 74 100 66" fill="none" stroke="#F4A259" stroke-width="9" stroke-linecap="round"/>
        <ellipse cx="60" cy="88" rx="30" ry="24" fill="#F4A259"/>
        <ellipse cx="60" cy="94" rx="15" ry="13" fill="#FFF3E6" opacity=".85"/>
        <path d="M30 34 L36 8 L52 26 Z M90 34 L84 8 L68 26 Z" fill="#F4A259"/>
        <path d="M35 28 L38 15 L46 24 Z M85 28 L82 15 L74 24 Z" fill="#FFB3C7"/>
        <ellipse cx="60" cy="45" rx="32" ry="27" fill="#F4A259"/>
        <path d="M52 20 Q60 26 68 20 M48 26 Q60 32 72 26" fill="none" stroke="#C9732C" stroke-width="3.5" stroke-linecap="round"/>
        <ellipse cx="47" cy="44" rx="6" ry="7.5" fill="#2B2140"/><ellipse cx="73" cy="44" rx="6" ry="7.5" fill="#2B2140"/>
        <circle cx="49" cy="41" r="2.2" fill="#fff"/><circle cx="75" cy="41" r="2.2" fill="#fff"/>
        <path d="M56 54 L64 54 L60 59 Z" fill="#FF7FA3"/>
        <path d="M60 59 Q55 64 51 61 M60 59 Q65 64 69 61" fill="none" stroke="#2B2140" stroke-width="2.4" stroke-linecap="round"/>
        <ellipse cx="46" cy="108" rx="10" ry="6" fill="#F4A259"/><ellipse cx="74" cy="108" rx="10" ry="6" fill="#F4A259"/>
      </g>
  </g></g>
</svg>
</div>`,
      },
      {
        name: "Limonata Tezgâhı",
        file: "limonata_tezgahi.html",
        desc: "Kaba kaç bardak limonata sığar? Önce tahmin et, sonra dök ve karşılaştır!",
        sinif: "2. Sınıf — Sıvı miktarını tahmin etme",
        thumbBg: "linear-gradient(160deg, #FFF8D6 0%, #FFE98A 55%, #FFD84D 100%)",
        customThumb: `
<div class="limonata-thumb">
<svg class="lt-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <!-- tente -->
  <rect x="0" y="0" width="240" height="14" fill="#FF6B35"/>
  <rect x="20" y="0" width="20" height="14" fill="#fff"/><rect x="60" y="0" width="20" height="14" fill="#fff"/>
  <rect x="100" y="0" width="20" height="14" fill="#fff"/><rect x="140" y="0" width="20" height="14" fill="#fff"/>
  <rect x="180" y="0" width="20" height="14" fill="#fff"/><rect x="220" y="0" width="20" height="14" fill="#fff"/>
  <!-- tezgâh -->
  <rect x="0" y="128" width="240" height="22" fill="#C98B5A"/>
  <rect x="0" y="128" width="240" height="5" fill="#E0A877"/>
  <!-- limonata makinesi -->
  <g transform="translate(60,128)">
    <rect x="-24" y="-96" width="48" height="56" rx="7" fill="#EAF5FF" stroke="#7A6A62" stroke-width="3"/>
    <rect x="-21" y="-80" width="42" height="38" rx="4" fill="#FFE14D"/>
    <circle cx="-8" cy="-62" r="7" fill="#FFF3A6" stroke="#FFD600" stroke-width="2.5"/>
    <rect x="-26" y="-102" width="52" height="8" rx="3" fill="#FF6B35"/>
    <rect x="-4" y="-42" width="8" height="8" rx="2" fill="#9AA3AD"/>
    <rect x="-20" y="-40" width="4" height="40" fill="#B37748"/><rect x="16" y="-40" width="4" height="40" fill="#B37748"/>
  </g>
  <!-- döküm akıntısı -->
  <rect class="lt-akinti" x="127" y="50" width="5" height="72" rx="2.5" fill="#FFE14D"/>
  <!-- kap -->
  <g transform="translate(160,128)">
    <defs><clipPath id="lt-ic"><rect x="-36" y="-66" width="72" height="66" rx="6"/></clipPath></defs>
    <rect x="-36" y="-66" width="72" height="66" rx="6" fill="#EAF5FF" fill-opacity=".85"/>
    <g clip-path="url(#lt-ic)"><rect class="lt-sivi" x="-36" y="-66" width="72" height="66" fill="#FFE14D"/></g>
    <path d="M-36 -44 H36 M-36 -22 H36" stroke="#E5A900" stroke-width="2" stroke-dasharray="5 4" opacity=".8"/>
    <rect x="-36" y="-66" width="72" height="66" rx="6" fill="none" stroke="#4D9FFF" stroke-width="4"/>
    <path d="M36 -56 C54 -54 54 -14 36 -12" stroke="#4D9FFF" stroke-width="5" fill="none" stroke-linecap="round"/>
  </g>
  <!-- çay bardağı (döküyor) -->
  <g class="lt-bardak">
    <defs><clipPath id="lt-bardak-ic"><path d="M112 50 C112 62 117 64 116.5 70 C116 76 113 78 114 82 L126 82 C127 78 124 76 123.5 70 C123 64 128 62 128 50 Z"/></clipPath></defs>
    <path d="M112 50 C112 62 117 64 116.5 70 C116 76 113 78 114 82 L126 82 C127 78 124 76 123.5 70 C123 64 128 62 128 50 Z" fill="#EAF5FF"/>
    <g clip-path="url(#lt-bardak-ic)"><rect class="lt-bardak-sivi" x="110" y="54" width="20" height="28" fill="#FFE14D"/></g>
    <path d="M112 50 C112 62 117 64 116.5 70 C116 76 113 78 114 82 L126 82 C127 78 124 76 123.5 70 C123 64 128 62 128 50 Z" fill="none" stroke="#4D9FFF" stroke-width="2.5"/>
    <path d="M112 82 H128" stroke="#4D9FFF" stroke-width="3.5" stroke-linecap="round"/>
  </g>
  <!-- tahmin balonu -->
  <g class="lt-soru">
    <circle cx="18" cy="42" r="13" fill="#fff" stroke="#FF6B35" stroke-width="3"/>
    <text x="18" y="48.5" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="18" fill="#FF6B35">?</text>
  </g>
</svg>
</div>`,
      },
      {
        name: "Yapı Ustaları",
        file: "yapi_ustasi.html",
        desc: "Geometrik cisimleri birleştirerek model kur, arkadaşınla yarış!",
        sinif: "2. Sınıf — Geometrik cisimler",
        thumbBg: "linear-gradient(160deg, #FFF7EE 0%, #FBE4D0 55%, #F2CEAF 100%)",
        customThumb: `
<div class="yapi-ustalari-thumb">
<svg class="yut-sahne" viewBox="-121 -126 270 200" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-108,-70) scale(0.62)"><g class="yut-f yut-f1"><polygon points="-30.0,-19.0 0.0,-4.0 0.0,30.0 -30.0,15.0" fill="#A855F7" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><polygon points="0.0,-4.0 30.0,-19.0 30.0,15.0 0.0,30.0" fill="#8041bc" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><polygon points="0.0,-34.0 30.0,-19.0 0.0,-4.0 -30.0,-19.0" fill="#c288f9" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/></g></g><g transform="translate(108,-84) scale(0.54)"><g class="yut-f yut-f2"><polygon points="0.0,0.0 30.0,15.0 15.0,-11.5 -15.0,-26.5" fill="#ff9772" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><polygon points="-30.0,15.0 0.0,30.0 15.0,-11.5 -15.0,-26.5" fill="#FF6B35" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><polygon points="30.0,15.0 0.0,30.0 15.0,-11.5" fill="#c25128" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/></g></g><g transform="translate(116,10) scale(0.50)"><g class="yut-f yut-f3"><ellipse cx="0.0" cy="15.0" rx="21.0" ry="10.5" fill="#3b79c2" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><rect x="-21.0" y="-19.0" width="42.0" height="34.0" fill="#4D9FFF"/><line x1="-21.0" y1="-19.0" x2="-21.0" y2="15.0" stroke="rgba(0,0,0,.22)" stroke-width="1.4"/><line x1="21.0" y1="-19.0" x2="21.0" y2="15.0" stroke="rgba(0,0,0,.22)" stroke-width="1.4"/><ellipse cx="0.0" cy="-19.0" rx="21.0" ry="10.5" fill="#82bcff" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/></g></g><g transform="translate(-104,16) scale(0.46)"><g class="yut-f yut-f4"><ellipse cx="0.0" cy="14.0" rx="14.0" ry="4.7" fill="rgba(0,0,0,.10)"/><circle cx="0.0" cy="-2.1" r="18.0" fill="#00997f" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><circle cx="-1.8" cy="-4.3" r="15.8" fill="#00C9A7"/><ellipse cx="-4.7" cy="-7.5" rx="8.3" ry="6.8" fill="#4cd9c1" opacity=".85" transform="rotate(-25 0.0 -2.1)"/><ellipse cx="-6.5" cy="-9.7" rx="3.6" ry="2.5" fill="#fff" opacity=".55" transform="rotate(-25 0.0 -2.1)"/></g></g><g class="yut-zemin"><polygon points="0.0,-10.5 81.0,30.0 30.0,55.5 -51.0,15.0" fill="rgba(58,50,38,.07)"/><line x1="0.0" y1="-10.5" x2="-51.0" y2="15.0" stroke="rgba(58,50,38,.10)" stroke-width="1"/><line x1="27.0" y1="3.0" x2="-24.0" y2="28.5" stroke="rgba(58,50,38,.10)" stroke-width="1"/><line x1="54.0" y1="16.5" x2="3.0" y2="42.0" stroke="rgba(58,50,38,.10)" stroke-width="1"/><line x1="81.0" y1="30.0" x2="30.0" y2="55.5" stroke="rgba(58,50,38,.10)" stroke-width="1"/></g><g class="yut-p yut-p1"><polygon points="-25.2,-21.4 34.8,8.6 34.8,42.6 -25.2,12.6" fill="#FFD600" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><polygon points="34.8,8.6 55.2,-1.6 55.2,32.4 34.8,42.6" fill="#c2a300" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><polygon points="-4.8,-31.6 55.2,-1.6 34.8,8.6 -25.2,-21.4" fill="#ffe24c" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/></g><g class="yut-p yut-p2"><polygon points="-30.0,-53.0 0.0,-38.0 0.0,-4.0 -30.0,-19.0" fill="#4D9FFF" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><polygon points="0.0,-38.0 30.0,-53.0 30.0,-19.0 0.0,-4.0" fill="#3b79c2" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><polygon points="0.0,-68.0 30.0,-53.0 0.0,-38.0 -30.0,-53.0" fill="#82bcff" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/></g><g class="yut-p yut-p3"><ellipse cx="30.0" cy="-4.0" rx="21.0" ry="10.5" fill="#00997f" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><rect x="9.0" y="-38.0" width="42.0" height="34.0" fill="#00C9A7"/><line x1="9.0" y1="-38.0" x2="9.0" y2="-4.0" stroke="rgba(0,0,0,.22)" stroke-width="1.4"/><line x1="51.0" y1="-38.0" x2="51.0" y2="-4.0" stroke="rgba(0,0,0,.22)" stroke-width="1.4"/><ellipse cx="30.0" cy="-38.0" rx="21.0" ry="10.5" fill="#4cd9c1" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/></g><g class="yut-p yut-p4"><ellipse cx="0.0" cy="-54.0" rx="14.0" ry="4.7" fill="rgba(0,0,0,.10)"/><circle cx="0.0" cy="-70.1" r="18.0" fill="#c23b6b" stroke="rgba(0,0,0,.22)" stroke-width="1.4" stroke-linejoin="round"/><circle cx="-1.8" cy="-72.3" r="15.8" fill="#FF4D8D"/><ellipse cx="-4.7" cy="-75.5" rx="8.3" ry="6.8" fill="#ff82af" opacity=".85" transform="rotate(-25 0.0 -70.1)"/><ellipse cx="-6.5" cy="-77.7" rx="3.6" ry="2.5" fill="#fff" opacity=".55" transform="rotate(-25 0.0 -70.1)"/></g></svg>
</div>`,
      },
      {
        name: "Şekil Robotu",
        file: "sekil_robotu.html",
        beceri: "Geometrik şekiller",
        desc: "Geometrik şekilleri öğren ve onlardan robotunu yap!",
        sinif: "1. ve 2. Sınıf",
        thumbBg: "linear-gradient(160deg, #eef4fd 0%, #d7e5f7 55%, #bcd3f0 100%)",
        customThumb: `
<div class="sekil-robot-thumb">
  <span class="srt-s srt-kare"></span>
  <span class="srt-s srt-daire"></span>
  <span class="srt-s srt-dikdortgen"></span>
  <span class="srt-s srt-ucgen"></span>
  <svg class="srt-robot" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="150" cy="366" rx="86" ry="14" fill="#16233a" opacity=".12"/>
    <!-- bacaklar -->
    <g class="srt-bacak-sol"><g transform="translate(120,286) scale(-1,1)">
      <rect x="-13" y="-8" width="26" height="58" rx="10" fill="#163fae" stroke="#0f2c7a" stroke-width="4"/>
      <rect x="-22" y="46" width="44" height="18" rx="8" fill="#0f2c7a"/>
    </g></g>
    <g class="srt-bacak-sag"><g transform="translate(180,286)">
      <rect x="-13" y="-8" width="26" height="58" rx="10" fill="#163fae" stroke="#0f2c7a" stroke-width="4"/>
      <rect x="-22" y="46" width="44" height="18" rx="8" fill="#0f2c7a"/>
    </g></g>
    <!-- kollar -->
    <g class="srt-kol-sol"><g transform="translate(84,206) scale(-1,1)">
      <rect x="-12" y="-12" width="24" height="62" rx="12" fill="#d97706" stroke="#8d4d04" stroke-width="4"/>
      <rect x="-16" y="46" width="32" height="24" rx="8" fill="#8d4d04"/>
    </g></g>
    <g class="srt-kol-sag"><g transform="translate(216,206)">
      <rect x="-12" y="-12" width="24" height="62" rx="12" fill="#d97706" stroke="#8d4d04" stroke-width="4"/>
      <rect x="-16" y="46" width="32" height="24" rx="8" fill="#8d4d04"/>
    </g></g>
    <!-- gövde -->
    <g transform="translate(150,228)">
      <rect x="-55" y="-62" width="110" height="124" rx="16" fill="#3b82f6" stroke="#2655a0" stroke-width="4"/>
      <circle cx="0" cy="-6" r="16" fill="#fdf0d9" stroke="#2655a0" stroke-width="4"/>
      <rect x="-26" y="26" width="52" height="14" rx="7" fill="#2655a0" opacity=".55"/>
    </g>
    <!-- kafa, anten, göz, ağız -->
    <g class="srt-kafa">
      <g transform="translate(150,66)">
        <rect x="-3" y="-36" width="6" height="42" rx="3" fill="#824704"/>
        <polygon points="0,-58 15,-34 -15,-34" fill="#d97706" stroke="#824704" stroke-width="3" stroke-linejoin="round"/>
      </g>
      <g transform="translate(150,110)">
        <rect x="-44" y="-44" width="88" height="88" rx="12" fill="#1d4ed8" stroke="#13338c" stroke-width="4"/>
        <rect x="-30" y="-32" width="60" height="26" rx="8" fill="#ffffff" opacity=".18"/>
      </g>
      <g transform="translate(150,104)">
        <circle cx="-22" cy="0" r="15" fill="#ffffff" stroke="#102b77" stroke-width="3"/>
        <circle cx="22"  cy="0" r="15" fill="#ffffff" stroke="#102b77" stroke-width="3"/>
        <circle cx="-22" cy="0" r="7" fill="#1d4ed8"/>
        <circle cx="22"  cy="0" r="7" fill="#1d4ed8"/>
      </g>
      <g transform="translate(150,138)">
        <rect x="-26" y="-9" width="52" height="18" rx="5" fill="#d97706" stroke="#824704" stroke-width="3"/>
        <path d="M-13 -9 V9 M0 -9 V9 M13 -9 V9" stroke="#ffffff" stroke-width="3" opacity=".7"/>
      </g>
    </g>
  </svg>
</div>`,
      },
      {
        name: "Dino'nun Roketi",
        file: "dino_roket_ay.html",
        desc: "Roketimizi geliştirip Ay'a gidelim!",
        sinif: "1. ve 2. Sınıf — Toplama çıkarma problemleri",
        thumbBg: "linear-gradient(180deg, #0A0F26 0%, #1B2E6B 55%, #3E5C9A 100%)",
        customThumb: `
<div class="dino-roket-thumb">
  <div class="drt-yildizlar"></div>
  <svg class="drt-dino" viewBox="0 0 380 400" xmlns="http://www.w3.org/2000/svg">
    <g>
      <ellipse cx="190" cy="272" rx="86" ry="76" fill="#92B9A1"/>
      <ellipse cx="190" cy="288" rx="53" ry="56" fill="#E0E6DD"/>
      <g class="drt-kol-sol"><ellipse cx="103" cy="252" rx="23" ry="33" fill="#8CB69C" transform="rotate(-14 103 252)"/></g>
      <g class="drt-kol-sag"><ellipse cx="277" cy="252" rx="23" ry="33" fill="#8CB69C" transform="rotate(14 277 252)"/></g>
      <ellipse cx="141" cy="341" rx="45" ry="27" fill="#8CB69C"/>
      <ellipse cx="239" cy="341" rx="45" ry="27" fill="#8CB69C"/>
      <g>
        <ellipse cx="190" cy="160" rx="89" ry="73" fill="#92B9A1"/>
        <ellipse cx="190" cy="192" rx="69" ry="49" fill="#9DC2AA"/>
        <path d="M140 205 Q190 232 240 205" stroke="#6E9480" stroke-width="3" fill="none"/>
        <ellipse cx="163" cy="173" rx="11" ry="8" fill="#E6DBB8" transform="rotate(-18 163 173)"/>
        <ellipse cx="217" cy="173" rx="11" ry="8" fill="#E6DBB8" transform="rotate(18 217 173)"/>
        <circle cx="165" cy="126" r="7.6" fill="#FBFDFA"/><circle cx="165" cy="126" r="5.2" fill="#22201E"/>
        <circle cx="215" cy="126" r="7.6" fill="#FBFDFA"/><circle cx="215" cy="126" r="5.2" fill="#22201E"/>
      </g>
    </g>
  </svg>
  <svg class="drt-roket" viewBox="0 0 72 104" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="drt-g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF5C7A"/><stop offset="1" stop-color="#E63950"/></linearGradient></defs>
    <path d="M36 2 C36 2 14 30 14 62 L14 78 L58 78 L58 62 C58 30 36 2 36 2Z" fill="url(#drt-g1)"/>
    <rect x="22" y="78" width="28" height="10" rx="2" fill="#C0C8D8"/>
    <circle cx="36" cy="44" r="10" fill="#B8D8FF" opacity=".85"/>
    <rect x="8" y="68" width="12" height="22" rx="4" fill="#3E5C9A"/>
    <rect x="52" y="68" width="12" height="22" rx="4" fill="#3E5C9A"/>
    <path d="M28 88 L36 104 L44 88" fill="#FFD84D" opacity=".9"/>
  </svg>
</div>`,
      },
      {
        name: "Matematik Penaltı Kupası",
        file: "penalti.html",
        beceri: "Toplama ve çıkarma",
        desc: "Takımını kur. Turnuvaya katıl ve şampiyon ol!",
        sinif: "1. - 2. Sınıf",
        emoji: "⚽",
        thumbBg: "linear-gradient(180deg,#2A2145,#3E9C4A)",
        customThumb: `
<div class="penalti-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#2A2145"/>
  <g fill="#4A3A7A"><circle cx="16" cy="14" r="5"/><circle cx="38" cy="18" r="5"/><circle cx="60" cy="13" r="5"/><circle cx="82" cy="17" r="5"/><circle cx="104" cy="13" r="5"/><circle cx="126" cy="17" r="5"/><circle cx="148" cy="13" r="5"/><circle cx="170" cy="17" r="5"/><circle cx="192" cy="13" r="5"/><circle cx="214" cy="17" r="5"/></g>
  <rect y="28" width="240" height="122" fill="#3E9C4A"/>
  <g fill="#48AA54"><rect y="48" width="240" height="18"/><rect y="86" width="240" height="18"/><rect y="124" width="240" height="18"/></g>
  <g stroke="#fff" stroke-width="4" fill="none"><path d="M42 118V38H198V118"/></g>
  <g class="pnl-ag" stroke="#fff" stroke-width="1.3" opacity=".75">
    <line x1="42" y1="52" x2="198" y2="52"/><line x1="42" y1="68" x2="198" y2="68"/><line x1="42" y1="84" x2="198" y2="84"/><line x1="42" y1="100" x2="198" y2="100"/>
    <line x1="60" y1="38" x2="60" y2="118"/><line x1="82" y1="38" x2="82" y2="118"/><line x1="104" y1="38" x2="104" y2="118"/><line x1="126" y1="38" x2="126" y2="118"/><line x1="148" y1="38" x2="148" y2="118"/><line x1="170" y1="38" x2="170" y2="118"/>
  </g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900"><rect x="168" y="4" width="66" height="22" rx="6" fill="#16234A" stroke="#FFD600" stroke-width="2"/><text x="201" y="20" font-size="13" text-anchor="middle" fill="#FFD600">3+4=?</text></g>
  <g>
    <rect x="108" y="64" width="22" height="26" rx="7" fill="#FF6B35" stroke="#2B2340" stroke-width="2"/>
    <circle cx="119" cy="56" r="9" fill="#F1C27D"/><path d="M110 54Q112 46 120 47Q128 47 128 53Q120 49 110 54Z" fill="#2B2340"/>
    <path d="M108 70L92 58M130 70L146 58" stroke="#F1C27D" stroke-width="5" stroke-linecap="round"/>
    <path d="M112 90L106 106M126 90L132 106" stroke="#2B2340" stroke-width="5" stroke-linecap="round"/>
  </g>
  <g class="pnl-top">
    <circle r="11" fill="#fff" stroke="#2B2340" stroke-width="2.5"/>
    <polygon points="0,-5 4.8,-1.5 2.9,4 -2.9,4 -4.8,-1.5" fill="#2B2340"/>
  </g>
  <g class="pnl-iz" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".6"><line x1="128" y1="132" x2="140" y2="138"/><line x1="134" y1="124" x2="148" y2="131"/></g>
</svg>
</div>
`,
      },
      {
        name: "Balon Patlatma",
        file: "balon.html",
        beceri: "Toplama ve çıkarma",
        desc: "Toplama ve çıkarma işlemleriyle balonları patlat! 🎈",
        sinif: "1. Sınıf",
        emoji: "🎈",
        thumbBg: "linear-gradient(180deg,#BFE7FF,#E8F6FF)",
        customThumb: `
<div class="balon-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#BFE7FF"/>
  <g fill="#fff" opacity=".9"><ellipse cx="52" cy="120" rx="20" ry="8"/><ellipse cx="190" cy="132" rx="24" ry="9"/></g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <g class="bln-b1">
      <path d="M58 92Q58 100 62 104" stroke="#2B2340" stroke-width="1.8" fill="none"/>
      <ellipse cx="58" cy="66" rx="22" ry="27" fill="#FF6B35" stroke="#2B2340" stroke-width="2.5"/>
      <ellipse cx="50" cy="56" rx="6" ry="9" fill="#fff" opacity=".4"/>
      <text x="58" y="75" font-size="22" fill="#fff">7</text>
    </g>
    <g class="bln-b2">
      <path d="M122 84Q122 92 118 96" stroke="#2B2340" stroke-width="1.8" fill="none"/>
      <ellipse cx="122" cy="58" rx="22" ry="27" fill="#00C9A7" stroke="#2B2340" stroke-width="2.5"/>
      <ellipse cx="114" cy="48" rx="6" ry="9" fill="#fff" opacity=".4"/>
      <text x="122" y="67" font-size="22" fill="#fff">4</text>
    </g>
    <g class="bln-b3">
      <path d="M186 96Q186 104 190 108" stroke="#2B2340" stroke-width="1.8" fill="none"/>
      <ellipse cx="186" cy="70" rx="22" ry="27" fill="#FF4D8D" stroke="#2B2340" stroke-width="2.5"/>
      <ellipse cx="178" cy="60" rx="6" ry="9" fill="#fff" opacity=".4"/>
      <text x="186" y="79" font-size="22" fill="#fff">9</text>
    </g>
    <g class="bln-pat">
      <path d="M122 124 L127 113 L138 117 L131 126 L140 134 L128 133 L124 145 L119 133 L107 135 L115 125 L106 116 L118 114 Z" fill="#FFD600" stroke="#FF6B35" stroke-width="2.5" stroke-linejoin="round"/>
      <text x="123" y="132" font-size="12" fill="#2B2340">PAT!</text>
    </g>
  </g>
</svg>
</div>
`,
      },
      {
        name: "Köprü Oyunu",
        file: "kopru.html",
        beceri: "Toplama ve çıkarma",
        desc: "Toplama ve çıkarma yaparak köprüyü tamamla! 🌉",
        sinif: "1. Sınıf",
        emoji: "🌉",
        thumbBg: "linear-gradient(180deg,#CDEBFF,#9FD6F0)",
        customThumb: `
<div class="kopru-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#CDEBFF"/>
  <g fill="#fff" opacity=".9"><ellipse cx="60" cy="22" rx="16" ry="7"/><ellipse cx="186" cy="28" rx="18" ry="8"/></g>
  <path d="M0 150V96Q14 90 24 96L34 150Z" fill="#B07A4A"/>
  <path d="M240 150V96Q226 90 216 96L206 150Z" fill="#B07A4A"/>
  <path d="M34 150Q60 134 120 140T206 150Z" fill="#4D9FFF"/>
  <g class="kpo-su" stroke="#fff" stroke-opacity=".6" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M70 142q7-4 14 0"/><path d="M120 146q7-4 14 0"/><path d="M164 142q7-4 14 0"/></g>
  <g stroke="#6B4A2B" stroke-width="2.5" fill="none"><path d="M20 76Q120 60 220 76"/><path d="M20 102Q120 88 220 102"/></g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <rect x="46" y="88" width="34" height="18" rx="4" fill="#C8874A" stroke="#6B4A2B" stroke-width="2.5"/>
    <rect x="96" y="84" width="34" height="18" rx="4" fill="#C8874A" stroke="#6B4A2B" stroke-width="2.5"/>
    <rect x="146" y="86" width="34" height="18" rx="4" fill="none" stroke="#FF6B35" stroke-width="2.5" stroke-dasharray="5 4"/>
    <text x="63" y="102" font-size="14" fill="#fff">2</text>
    <text x="113" y="98" font-size="14" fill="#fff">4</text>
    <text class="kpo-soru" x="163" y="100" font-size="15" fill="#FF6B35">?</text>
  </g>
  <g class="kpo-cocuk">
    <circle cx="113" cy="58" r="10" fill="#F1C27D"/>
    <path d="M103 56Q104 47 113 48Q122 47 123 55Q114 50 103 56Z" fill="#4A2C1A"/>
    <circle cx="109.5" cy="58" r="1.6" fill="#2B2340"/><circle cx="116.5" cy="58" r="1.6" fill="#2B2340"/>
    <path d="M110 62.5Q113 65 116 62.5" stroke="#2B2340" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <rect x="103" y="66" width="20" height="17" rx="6" fill="#00C9A7"/>
  </g>
  <path d="M40 30l5 2-5 2M52 34l5 2-5 2" stroke="#2B2340" stroke-width="1.6" fill="none" stroke-linecap="round"/>
</svg>
</div>
`,
      },
      {
        name: "Roket Yakıtı",
        file: "roket.html",
        beceri: "Toplama ve çıkarma",
        desc: "Doğru hesapla roketi uzaya fırlat! 🚀",
        sinif: "1. Sınıf",
        emoji: "🚀",
        thumbBg: "linear-gradient(180deg,#CDEBFF,#E8F6FF)",
        customThumb: `
<div class="roket-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#CDEBFF"/>
  <circle cx="208" cy="24" r="12" fill="#FFD600"/>
  <g fill="#fff" opacity=".9"><ellipse cx="50" cy="28" rx="18" ry="8"/><ellipse cx="64" cy="24" rx="12" ry="9"/></g>
  <rect y="132" width="240" height="18" fill="#9CD08C"/>
  <g stroke="#8D93A8" stroke-width="3"><line x1="76" y1="132" x2="76" y2="52"/><line x1="76" y1="60" x2="96" y2="60"/><line x1="76" y1="84" x2="96" y2="84"/><line x1="76" y1="108" x2="96" y2="108"/></g>
  <g class="rkt-roket">
    <path d="M120 30Q136 48 136 80L136 104H104L104 80Q104 48 120 30Z" fill="#fff" stroke="#2B2340" stroke-width="2.5"/>
    <path d="M120 30Q131 43 134 62H106Q109 43 120 30Z" fill="#FF6B35" stroke="#2B2340" stroke-width="2.5"/>
    <circle cx="120" cy="76" r="9" fill="#9FE8FF" stroke="#2B2340" stroke-width="2.5"/>
    <path d="M104 86Q92 94 92 110L104 104Z" fill="#FF6B35" stroke="#2B2340" stroke-width="2.5"/>
    <path d="M136 86Q148 94 148 110L136 104Z" fill="#FF6B35" stroke="#2B2340" stroke-width="2.5"/>
  </g>
  <g class="rkt-alev">
    <path d="M110 106Q120 134 130 106Z" fill="#FF6B35"/>
    <path d="M114 106Q120 124 126 106Z" fill="#FFD600"/>
  </g>
  <g fill="#E6EDF5"><ellipse cx="98" cy="130" rx="12" ry="6"/><ellipse cx="142" cy="130" rx="12" ry="6"/></g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900">
    <rect x="174" y="58" width="26" height="66" rx="8" fill="#fff" stroke="#2B2340" stroke-width="2.5"/>
    <rect class="rkt-yakit" x="179" y="63" width="16" height="56" rx="5" fill="#00C9A7"/>
    <text x="187" y="52" font-size="11" text-anchor="middle" fill="#2B2340">YAKIT</text>
    <text x="187" y="140" font-size="12" text-anchor="middle" fill="#2B2340">2+3</text>
  </g>
</svg>
</div>
`,
      },
      {
        name: "Terazi Dengeleme Oyunu",
        file: "terazi.html",
        beceri: "Eşitlik ve denge",
        desc: "Teraziyi dengele, eşitlik kavramını öğren! ⚖️",
        sinif: "1. Sınıf",
        emoji: "⚖️",
        thumbBg: "linear-gradient(180deg,#FFF8F0,#FFECD9)",
        customThumb: `
<div class="terazi-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#FFF8F0"/>
  <g fill="#FFE9CF"><circle cx="30" cy="30" r="14"/><circle cx="212" cy="118" r="18"/><circle cx="208" cy="26" r="9"/></g>
  <path d="M94 138H146L138 124H102Z" fill="#A855F7" stroke="#2B2340" stroke-width="2.5"/>
  <rect x="116" y="56" width="8" height="70" rx="3" fill="#A855F7" stroke="#2B2340" stroke-width="2.5"/>
  <g class="trz-kol">
    <rect x="40" y="52" width="160" height="8" rx="4" fill="#FF9E2C" stroke="#2B2340" stroke-width="2.5"/>
    <g stroke="#2B2340" stroke-width="2" fill="none"><path d="M56 60L44 80M56 60L68 80"/><path d="M184 60L172 80M184 60L196 80"/></g>
    <path d="M38 80A18 9 0 0 0 74 80Z" fill="#4D9FFF" stroke="#2B2340" stroke-width="2.5"/>
    <path d="M166 80A18 9 0 0 0 202 80Z" fill="#00C9A7" stroke="#2B2340" stroke-width="2.5"/>
    <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
      <rect x="44" y="60" width="24" height="20" rx="4" fill="#FF6B35" stroke="#2B2340" stroke-width="2"/>
      <text x="56" y="75" font-size="14" fill="#fff">5</text>
      <rect x="168" y="60" width="15" height="20" rx="4" fill="#FFD600" stroke="#2B2340" stroke-width="2"/>
      <rect x="186" y="60" width="15" height="20" rx="4" fill="#FF4D8D" stroke="#2B2340" stroke-width="2"/>
      <text x="175.5" y="75" font-size="12" fill="#2B2340">2</text>
      <text x="193.5" y="75" font-size="12" fill="#fff">3</text>
    </g>
  </g>
  <circle cx="120" cy="56" r="6" fill="#FFD600" stroke="#2B2340" stroke-width="2.5"/>
  <g class="trz-esit" font-family="Nunito, Segoe UI, sans-serif" font-weight="900"><text x="120" y="36" font-size="22" text-anchor="middle" fill="#00C9A7">=</text></g>
</svg>
</div>
`,
      },
      {
        name: "Sünger Bob",
        file: "sungerbob.html",
        beceri: "Toplama ve çıkarma",
        desc: "Toplama ve çıkarma işlemi 🧽",
        sinif: "1. Sınıf",
        emoji: "🧽",
        thumbBg: "linear-gradient(180deg,#7FD8E8,#2E8FD6)",
        customThumb: `
<div class="sunger-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="sgrFon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FD8E8"/><stop offset="1" stop-color="#2E8FD6"/></linearGradient></defs>
  <rect width="240" height="150" fill="url(#sgrFon)"/>
  <path d="M0 132Q60 122 120 130T240 126V150H0Z" fill="#F2DBA8"/>
  <g class="sgr-yosun"><path d="M30 134Q24 116 32 100Q38 114 34 134Z" fill="#2FA85A"/></g>
  <g class="sgr-yosun sgr-y2"><path d="M208 136Q202 114 212 96Q218 112 214 136Z" fill="#2FA85A"/></g>
  <path d="M190 138 L196 128 L202 138 L208 130 L213 139" stroke="#FF9EC0" stroke-width="4" fill="none" stroke-linecap="round"/>
  <g class="sgr-balik">
    <path d="M86 78L64 64Q70 80 64 94Z" fill="#FFB020" stroke="#2B2340" stroke-width="2.5" stroke-linejoin="round" class="sgr-kuyruk"/>
    <ellipse cx="112" cy="79" rx="30" ry="21" fill="#FFD600" stroke="#2B2340" stroke-width="2.5"/>
    <path d="M104 62Q112 52 122 60L114 68Z" fill="#FFB020" stroke="#2B2340" stroke-width="2"/>
    <circle cx="126" cy="74" r="4.5" fill="#fff" stroke="#2B2340" stroke-width="1.5"/><circle cx="127.5" cy="74.5" r="2.2" fill="#2B2340"/>
    <path d="M130 86Q135 89 139 85" stroke="#2B2340" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M104 74Q110 82 104 88" stroke="#E8A000" stroke-width="2.5" fill="none"/>
  </g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <g class="sgr-k1"><circle cx="170" cy="56" r="14" fill="rgba(255,255,255,.3)" stroke="#fff" stroke-width="2"/><text x="170" y="62" font-size="15" fill="#fff">3</text></g>
    <text class="sgr-k2" x="198" y="46" font-size="17" fill="#fff">+</text>
    <g class="sgr-k3"><circle cx="222" cy="64" r="13" fill="rgba(255,255,255,.3)" stroke="#fff" stroke-width="2"/><text x="222" y="70" font-size="14" fill="#fff">2</text></g>
  </g>
  <g fill="rgba(255,255,255,.55)"><circle class="sgr-hava" cx="58" cy="44" r="4"/><circle class="sgr-hava sgr-h2" cx="44" cy="68" r="3"/><circle class="sgr-hava sgr-h3" cx="146" cy="40" r="3.5"/></g>
</svg>
</div>
`,
      },
      {
        name: "Timsahı Doyur",
        file: "timsah.html",
        beceri: "Sayıları karşılaştırma",
        desc: "Toplamada ve çıkarmada bilinmeyeni bulma 🐊",
        sinif: "1. Sınıf",
        emoji: "🐊",
        thumbBg: "linear-gradient(180deg,#E6F5FF,#BFE7FF)",
        customThumb: `
<div class="timsah-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#E6F5FF"/>
  <circle cx="34" cy="26" r="12" fill="#FFD600"/>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900">
    <rect x="140" y="16" width="86" height="26" rx="9" fill="#fff" stroke="#4D9FFF" stroke-width="2.5"/>
    <text x="183" y="35" font-size="15" text-anchor="middle" fill="#2B2340">3 + ? = 7</text>
  </g>
  <g class="tmd-elma" font-family="Nunito, Segoe UI, sans-serif" font-weight="900">
    <circle cx="96" cy="0" r="12" fill="#FF4D4D" stroke="#2B2340" stroke-width="2"/>
    <path d="M96 -12Q99 -17 103 -15" stroke="#2FA85A" stroke-width="2.5" fill="none"/>
    <text x="96" y="5" font-size="13" text-anchor="middle" fill="#fff">4</text>
  </g>
  <rect y="112" width="240" height="38" fill="#6FD3F2"/>
  <path d="M0 112Q15 108 30 112T60 112T90 112T120 112T150 112T180 112T210 112T240 112V118H0Z" fill="#9FE2F8"/>
  <g>
    <ellipse cx="100" cy="112" rx="56" ry="18" fill="#3DBE6B" stroke="#24894A" stroke-width="2"/>
    <g class="tmd-cene">
      <path d="M58 100Q56 70 78 66Q118 60 140 72Q150 78 146 90L142 100Z" fill="#3DBE6B" stroke="#24894A" stroke-width="2"/>
      <g fill="#fff"><path d="M70 98l5-9 5 9z"/><path d="M86 96l5-9 5 9z"/><path d="M102 95l5-9 5 9z"/><path d="M118 96l5-9 5 9z"/></g>
      <circle cx="78" cy="68" r="9" fill="#3DBE6B" stroke="#24894A" stroke-width="2"/>
      <circle cx="80" cy="66" r="5.5" fill="#fff"/><ellipse cx="81" cy="66.5" rx="2" ry="4" fill="#1E1E2E"/>
      <circle cx="140" cy="74" r="3" fill="#24894A"/>
    </g>
    <path d="M56 104Q100 96 148 102Q150 110 144 112Q100 120 60 112Q54 110 56 104Z" fill="#FCEFB4" stroke="#24894A" stroke-width="2"/>
    <g fill="#fff"><path d="M72 104l4 8 4-8z"/><path d="M90 102l4 8 4-8z"/><path d="M108 102l4 8 4-8z"/><path d="M126 103l4 8 4-8z"/></g>
  </g>
  <g transform="translate(206 124)"><path d="M0 0 5-9A16 9 0 1 1-5-9Z" fill="#3DBE6B"/><circle cx="6" cy="-6" r="3" fill="#FF9EC0"/></g>
</svg>
</div>
`,
      },
      {
        name: "Zıpzıp Ateşböceği Avlıyor",
        file: "zipzip.html",
        beceri: "Toplama ve çıkarma",
        desc: "Sayı doğrusunda toplama ve çıkarma işlemi yaparak ateşböceklerini yakala! 🐸",
        sinif: "1. - 2. Sınıf",
        emoji: "🐸",
        thumbBg: "linear-gradient(180deg,#1E2A4A,#2A3A5E)",
        customThumb: `
<div class="zipzip-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="zzpFon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1E2A4A"/><stop offset="1" stop-color="#2A3A5E"/></linearGradient></defs>
  <rect width="240" height="150" fill="url(#zzpFon)"/>
  <circle cx="206" cy="26" r="14" fill="#FFF2B8"/><circle cx="200" cy="22" r="3" fill="#E8DCA0"/><circle cx="212" cy="30" r="2.2" fill="#E8DCA0"/>
  <path d="M0 136Q60 126 120 132T240 128V150H0Z" fill="#2F5D3A"/>
  <g class="zzp-a1"><circle cx="60" cy="48" r="8" fill="#FFE27A" opacity=".3"/><circle cx="60" cy="48" r="3.5" fill="#FFE27A"/></g>
  <g class="zzp-a2"><circle cx="150" cy="34" r="8" fill="#FFE27A" opacity=".3"/><circle cx="150" cy="34" r="3.5" fill="#FFE27A"/></g>
  <g class="zzp-a3"><circle cx="112" cy="62" r="7" fill="#FFE27A" opacity=".3"/><circle cx="112" cy="62" r="3" fill="#FFE27A"/></g>
  <g stroke="#fff" stroke-width="3" stroke-linecap="round">
    <line x1="20" y1="112" x2="220" y2="112"/>
    <line x1="40" y1="106" x2="40" y2="118"/><line x1="80" y1="106" x2="80" y2="118"/><line x1="120" y1="106" x2="120" y2="118"/><line x1="160" y1="106" x2="160" y2="118"/><line x1="200" y1="106" x2="200" y2="118"/>
  </g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" fill="#fff" text-anchor="middle" font-size="11">
    <text x="40" y="132">2</text><text x="80" y="132">3</text><text x="120" y="132">4</text><text x="160" y="132">5</text><text x="200" y="132">6</text>
  </g>
  <path d="M84 100Q100 76 116 100" stroke="#FFE27A" stroke-width="2" stroke-dasharray="4 4" fill="none"/>
  <g class="zzp-kurbaga">
    <ellipse cx="80" cy="104" rx="13" ry="3" fill="rgba(0,0,0,.3)"/>
    <ellipse cx="72" cy="98" rx="6" ry="4" fill="#2EA44F"/><ellipse cx="88" cy="98" rx="6" ry="4" fill="#2EA44F"/>
    <ellipse cx="80" cy="92" rx="11" ry="9" fill="#3CC461"/><ellipse cx="80" cy="95" rx="6" ry="4.5" fill="#CFF7BE"/>
    <circle cx="74" cy="84" r="4.5" fill="#3CC461"/><circle cx="86" cy="84" r="4.5" fill="#3CC461"/>
    <circle cx="74" cy="84" r="3" fill="#fff"/><circle cx="86" cy="84" r="3" fill="#fff"/>
    <circle cx="74.6" cy="84.3" r="1.6" fill="#1F2430"/><circle cx="85.4" cy="84.3" r="1.6" fill="#1F2430"/>
    <path d="M76 90Q80 92.5 84 90" stroke="#1E6B34" stroke-width="1.2" fill="none" stroke-linecap="round"/>
  </g>
</svg>
</div>
`,
      },
      {
        name: "Problem Işığını Yak",
        file: "yak.html",
        beceri: "Problem çözme",
        desc: "''YAK'' tekniği ile problemlerin ışığını yakalım! 🔥",
        sinif: "1. Sınıf",
        emoji: "🔥",
        thumbBg: "linear-gradient(180deg,#241B3E,#3A2C5E)",
        customThumb: `
<div class="yak-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="pykFon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#241B3E"/><stop offset="1" stop-color="#3A2C5E"/></linearGradient></defs>
  <rect width="240" height="150" fill="url(#pykFon)"/>
  <circle class="pyk-halo" cx="120" cy="52" r="42" fill="#FFE27A" opacity=".16"/>
  <g class="pyk-isin" stroke="#FFE27A" stroke-width="3.5" stroke-linecap="round">
    <line x1="120" y1="2" x2="120" y2="14"/><line x1="78" y1="18" x2="87" y2="27"/><line x1="162" y1="18" x2="153" y2="27"/>
    <line x1="64" y1="52" x2="78" y2="52"/><line x1="176" y1="52" x2="162" y2="52"/>
  </g>
  <circle cx="120" cy="52" r="24" fill="#FFF4C2" stroke="#F2A900" stroke-width="3"/>
  <path d="M112 58Q116 48 120 58Q124 48 128 58" stroke="#F2A900" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M112 72H128L126 80H114Z" fill="#B8C2D0" stroke="#2B2340" stroke-width="2"/>
  <g stroke="#8D93A8" stroke-width="2.5"><line x1="113" y1="83" x2="127" y2="83"/><line x1="114" y1="87" x2="126" y2="87"/></g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <rect x="52" y="98" width="136" height="30" rx="10" fill="#fff" stroke="#2B2340" stroke-width="2.5"/>
    <text x="120" y="119" font-size="15" fill="#2B2340">Problemi çöz!</text>
    <g class="pyk-harf"><rect x="60" y="134" width="24" height="14" rx="6" fill="#FF6B35"/><text x="72" y="145" font-size="10" fill="#fff">Y</text></g>
    <g class="pyk-harf pyk-h2"><rect x="108" y="134" width="24" height="14" rx="6" fill="#FFD600"/><text x="120" y="145" font-size="10" fill="#2B2340">A</text></g>
    <g class="pyk-harf pyk-h3"><rect x="156" y="134" width="24" height="14" rx="6" fill="#00C9A7"/><text x="168" y="145" font-size="10" fill="#fff">K</text></g>
  </g>
</svg>
</div>
`,
      },
      {
        name: "Kral Şakir ATM",
        file: "atm.html",
        beceri: "Paralarımız",
        desc: "ATM olup Kral Şakir karakterlerine istedikleri paraları verebilir misin?",
        sinif: "1. - 2. Sınıf",
        emoji: "🏧",
        thumbBg: "linear-gradient(180deg,#E8F1FA,#D6E6F5)",
        customThumb: `
<div class="atm-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#E8F1FA"/>
  <rect y="132" width="240" height="18" fill="#C4D4E4"/>
  <g stroke="#2B2340" stroke-width="2.5">
    <rect x="70" y="14" width="100" height="122" rx="12" fill="#4D9FFF"/>
    <rect x="82" y="26" width="76" height="40" rx="6" fill="#16234A"/>
    <rect x="82" y="92" width="44" height="26" rx="5" fill="#2B2340" stroke="none"/>
    <rect x="136" y="74" width="22" height="7" rx="3" fill="#2B2340" stroke="none"/>
  </g>
  <g fill="#9FC4E8"><rect x="88" y="96" width="9" height="5" rx="2"/><rect x="100" y="96" width="9" height="5" rx="2"/><rect x="112" y="96" width="9" height="5" rx="2"/><rect x="88" y="104" width="9" height="5" rx="2"/><rect x="100" y="104" width="9" height="5" rx="2"/><rect x="112" y="104" width="9" height="5" rx="2"/><rect x="88" y="112" width="9" height="4" rx="2"/><rect x="100" y="112" width="9" height="4" rx="2"/><rect x="112" y="112" width="9" height="4" rx="2"/></g>
  <text class="atm-ekran" x="120" y="52" font-size="16" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" fill="#7BFFB0">50 TL</text>
  <g class="atm-kart"><rect x="134" y="72" width="26" height="16" rx="3" fill="#FFD600" stroke="#2B2340" stroke-width="2"/><rect x="138" y="76" width="8" height="6" rx="1.5" fill="#FF6B35"/></g>
  <g class="atm-para"><rect x="92" y="120" width="56" height="18" rx="3" fill="#7BD389" stroke="#2B2340" stroke-width="2"/><circle cx="120" cy="129" r="6" fill="none" stroke="#2FA85A" stroke-width="2"/><text x="120" y="133" font-size="9" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" fill="#1E6B34">20</text></g>
  <g class="atm-coin"><circle cx="196" cy="0" r="9" fill="#FFD600" stroke="#B8860B" stroke-width="2.5"/><text x="196" y="4" font-size="10" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" fill="#8A6A08">1</text></g>
  <path d="M184 136a12 7 0 0 0 24 0Z" fill="#8D93A8" stroke="#2B2340" stroke-width="2"/>
</svg>
</div>
`,
      },
      {
        name: "Sevimli Orman Sayımı",
        file: "sevimliorman.html",
        beceri: "Sayma",
        desc: "Ormanda sayılması ve tablolanması gerekenler var! Yardımın lazım.",
        sinif: "1. - 2. Sınıf",
        emoji: "🌲",
        thumbBg: "linear-gradient(180deg,#CDEBFF,#E0F6D8)",
        customThumb: `
<div class="orman-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#CDEBFF"/>
  <circle cx="214" cy="22" r="11" fill="#FFD600"/>
  <rect y="118" width="240" height="32" fill="#8FD08A"/>
  <g stroke="#2B2340" stroke-width="2">
    <rect x="30" y="96" width="9" height="26" fill="#8A5A2B"/>
    <polygon points="34.5,28 10,100 59,100" fill="#2FA05A"/>
    <rect x="86" y="102" width="8" height="20" fill="#8A5A2B"/>
    <polygon points="90,48 70,106 110,106" fill="#3CB56B"/>
  </g>
  <g class="orm-kus">
    <ellipse cx="34" cy="60" rx="8" ry="6.5" fill="#FF4D4D" stroke="#2B2340" stroke-width="1.8"/>
    <circle cx="40" cy="56" r="4.5" fill="#FF4D4D" stroke="#2B2340" stroke-width="1.8"/>
    <polygon points="44,56 50,57 44,59" fill="#FFB020"/>
    <circle cx="41.5" cy="55" r="1.1" fill="#2B2340"/>
  </g>
  <g>
    <g class="orm-kulak"><ellipse cx="128" cy="96" rx="4" ry="11" fill="#fff" stroke="#2B2340" stroke-width="1.8"/><ellipse cx="138" cy="96" rx="4" ry="11" fill="#fff" stroke="#2B2340" stroke-width="1.8"/></g>
    <circle cx="133" cy="112" r="11" fill="#fff" stroke="#2B2340" stroke-width="2"/>
    <ellipse cx="133" cy="130" rx="13" ry="10" fill="#fff" stroke="#2B2340" stroke-width="2"/>
    <circle cx="129" cy="110" r="1.6" fill="#2B2340"/><circle cx="137" cy="110" r="1.6" fill="#2B2340"/>
    <ellipse cx="133" cy="115" rx="2" ry="1.4" fill="#FF9EC0"/>
  </g>
  <g stroke="#2B2340" stroke-width="1.8"><path d="M58 128a8 8 0 0 1 16 0Z" fill="#FF4D4D"/><rect x="63" y="128" width="6" height="8" fill="#FFF4E0"/><circle cx="62" cy="124" r="1.5" fill="#fff" stroke="none"/><circle cx="69" cy="123" r="1.5" fill="#fff" stroke="none"/></g>
  <g stroke="#2B2340" stroke-width="1.8"><path d="M44 134a7 7 0 0 1 14 0Z" fill="#FF4D4D"/><rect x="48.5" y="134" width="5" height="7" fill="#FFF4E0"/><circle cx="49" cy="130" r="1.3" fill="#fff" stroke="none"/></g>
  <g class="orm-kelebek"><path d="M0 0Q-6 -7 -9 -2Q-7 4 0 2Q7 4 9 -2Q6 -7 0 0Z" fill="#A855F7" stroke="#2B2340" stroke-width="1.3"/></g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900">
    <rect x="166" y="54" width="62" height="74" rx="8" fill="#fff" stroke="#2B2340" stroke-width="2.5" transform="rotate(4 197 91)"/>
    <g transform="rotate(4 197 91)">
      <rect x="186" y="48" width="22" height="12" rx="4" fill="#FF6B35"/>
      <circle cx="180" cy="74" r="6" fill="#fff" stroke="#2B2340" stroke-width="1.6"/><path d="M177 69q-2-5 1-6M183 69q2-5-1-6" stroke="#2B2340" stroke-width="1.6" fill="none"/>
      <g stroke="#2B2340" stroke-width="2.4" stroke-linecap="round"><line x1="194" y1="68" x2="194" y2="80"/><line x1="201" y1="68" x2="201" y2="80"/><line x1="208" y1="68" x2="208" y2="80"/></g>
      <circle cx="180" cy="100" r="6" fill="#FF4D4D"/><g stroke="#2B2340" stroke-width="2.4" stroke-linecap="round"><line x1="194" y1="94" x2="194" y2="106"/><line x1="201" y1="94" x2="201" y2="106"/></g>
    </g>
  </g>
</svg>
</div>
`,
      }
    ]
  },
  {
    name: "🌱 Hayat Bilgisi",
    color: "#4CAF50",
    iconBg: "linear-gradient(135deg, #4CAF50, #00C9A7)",
    lineColor: "linear-gradient(90deg, #4CAF50, #00C9A7)",
    games: [
      {
        name: "Güvenli Adımlar",
        file: "guvenli_adimlar.html",
        desc: "Okul yolunda trafik levhalarını tanı, acil durumda 112'ye sakin ve net anlat! Öğretmen için Derste Kullan bölümü de var. 🚦",
        sinif: "2. Sınıf — Trafik levhaları ve 112 acil çağrı",
        beceri: "Trafik levhaları ve 112 acil çağrı",
        grades: [2],
        eklenme: "2026-11-25",
        isSpecial: true,
        ozelEtiket: "🏫 DERS İÇİ OYUN",
        thumbBg: "linear-gradient(180deg,#DFF3FF 0%,#FFF8F0 100%)",
        customThumb: `
<div class="guvenli-adimlar-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="70" cy="22" rx="16" ry="6" fill="#fff"/><ellipse cx="82" cy="18" rx="10" ry="6" fill="#fff"/>
  <rect y="86" width="240" height="14" fill="#BFE8A6"/>
  <rect y="100" width="240" height="8" fill="#EFE3CD"/>
  <rect y="108" width="240" height="42" fill="#8B90A0"/>
  <g fill="#fff"><rect x="118" y="110" width="6" height="38"/><rect x="130" y="110" width="6" height="38"/><rect x="142" y="110" width="6" height="38"/><rect x="154" y="110" width="6" height="38"/><rect x="166" y="110" width="6" height="38"/></g>
  <g fill="#fff" opacity=".85"><rect x="10" y="128" width="22" height="3" rx="1.5"/><rect x="48" y="128" width="22" height="3" rx="1.5"/><rect x="86" y="128" width="22" height="3" rx="1.5"/><rect x="188" y="128" width="22" height="3" rx="1.5"/><rect x="224" y="128" width="16" height="3" rx="1.5"/></g>
  <g class="ga-araba">
    <rect x="0" y="112" width="42" height="13" rx="5" fill="#FF4D8D" stroke="#2B2340" stroke-width="1.4"/>
    <path d="M8 112 L13 104 H29 L35 112 Z" fill="#FF4D8D" stroke="#2B2340" stroke-width="1.4"/>
    <rect x="15" y="106" width="12" height="5" rx="1" fill="#BFE3FF"/>
    <circle cx="10" cy="126" r="4" fill="#2B2340"/><circle cx="32" cy="126" r="4" fill="#2B2340"/>
  </g>
  <g transform="translate(26 18)">
    <rect x="-2" y="58" width="4" height="24" fill="#6B7080"/>
    <path d="M0 34 L17 63 L-17 63 Z" fill="#fff" stroke="#E30613" stroke-width="4" stroke-linejoin="round"/>
    <g fill="#1B1B1B"><circle cx="-4" cy="46" r="2.4"/><rect x="-5.5" y="49" width="3" height="8" rx="1.2"/><circle cx="5" cy="48" r="2"/><rect x="3.8" y="50.5" width="2.6" height="6.5" rx="1"/></g>
  </g>
  <g transform="translate(206 34)">
    <rect x="-2" y="58" width="4" height="8" fill="#6B7080"/>
    <rect x="-13" y="22" width="26" height="42" rx="5" fill="#2D3142"/>
    <rect x="-9" y="26" width="18" height="16" rx="3" fill="#15171F"/><rect x="-9" y="44" width="18" height="16" rx="3" fill="#15171F"/>
    <g class="ga-kirmizi" fill="#FF3B3B"><circle cx="0" cy="29.5" r="2.2"/><rect x="-2" y="32" width="4" height="8" rx="1.5"/></g>
    <g class="ga-yesil" stroke="#1FD168" stroke-width="2.2" stroke-linecap="round" fill="none"><circle cx="0.5" cy="47.5" r="2.1" fill="#1FD168" stroke="none"/><path d="M0 50 L-1 54 L-4 58 M-1 54 L3 58 M0 51 L3 54"/></g>
  </g>
  <g class="ga-cocuk">
    <rect x="137" y="88" width="3.5" height="11" rx="1.6" fill="#3B4A6B"/><rect x="142" y="88" width="3.5" height="11" rx="1.6" fill="#3B4A6B"/>
    <rect x="133" y="76" width="6" height="11" rx="2.5" fill="#FF6B35"/>
    <rect x="136" y="75" width="13" height="15" rx="5" fill="#4D9FFF"/>
    <circle cx="142.5" cy="68" r="7" fill="#F6C9A0"/>
    <path d="M134.5 67 a8 8 0 0 1 16 0 z" fill="#FFD600" stroke="#E0B800" stroke-width="1"/>
    <circle cx="145" cy="69" r="1" fill="#2B2340"/>
  </g>
  <g transform="translate(44 34)"><g class="ga-tel">
    <rect x="12" y="10" width="28" height="46" rx="6" fill="#2D3142"/>
    <rect x="15" y="15" width="22" height="34" rx="3" fill="#fff"/>
    <text x="26" y="36" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-size="10" font-weight="900" fill="#E30613">112</text>
    <circle cx="26" cy="52.5" r="1.6" fill="#6B7080"/>
  </g></g>
  <g class="ga-dalga" transform="translate(44 34)" stroke="#E30613" stroke-width="2" fill="none" stroke-linecap="round"><path d="M44 18 q5 6 0 12"/><path d="M49 14 q8 10 0 20"/></g>
</svg>
</div>
`,
      },
      {
        name: "Akıllı Sepet",
        file: "akilli_sepet.html",
        desc: "3 istek ve 3 ihtiyaç seç, Turuncu ve Yeşil Market'te fiyatları karşılaştır, her ürünü en ucuza al! 🛒",
        sinif: "2. Sınıf — İstek ve ihtiyaçlar, bütçe",
        beceri: "İstek ve ihtiyaçlar",
        grades: [2],
        eklenme: "2026-11-19",
        isSpecial: true,
        ozelEtiket: "🏫 DERS İÇİ OYUN",
        thumbBg: "linear-gradient(135deg,#FFE7D3 0%,#FFF8F0 50%,#D6F5E5 100%)",
        customThumb: `
<div class="akilli-sepet-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <g class="as-etiket"><rect x="8" y="74" width="40" height="17" rx="8.5" fill="#FFE3EE" stroke="#E0306E" stroke-width="1.6"/><text x="28" y="86" text-anchor="middle" font-family="Nunito,Segoe UI,sans-serif" font-size="9" font-weight="900" fill="#E0306E">İstek</text></g>
  <g class="as-etiket as-etiket2"><rect x="4" y="98" width="48" height="17" rx="8.5" fill="#DDEEFF" stroke="#1F6FD6" stroke-width="1.6"/><text x="28" y="110" text-anchor="middle" font-family="Nunito,Segoe UI,sans-serif" font-size="9" font-weight="900" fill="#1F6FD6">İhtiyaç</text></g>
  <g transform="translate(14 28) scale(.84)">
  <rect x="58" y="14" width="150" height="100" rx="12" fill="#1E1B2E"/>
  <rect x="65" y="21" width="136" height="86" rx="6" fill="#EAF4FF"/>
  <circle cx="204" cy="64" r="2.4" fill="#59536F"/>
  <g class="as-uyg"><rect x="80" y="32" width="40" height="40" rx="10" fill="#FF7A1A"/><path d="M89 46h22l-3 15H92z" fill="#fff"/><path d="M95 46l5-7M105 46l-5-7" stroke="#fff" stroke-width="2.6" stroke-linecap="round" fill="none"/></g>
  <g class="as-uyg as-uyg2"><rect x="146" y="32" width="40" height="40" rx="10" fill="#1FAF6B"/><path d="M155 45h22l-2.4 17h-17.2z" fill="#fff"/><path d="M161 45v-3a5 5 0 0 1 10 0v3" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/></g>
  <rect x="82" y="79" width="36" height="16" rx="5" fill="#fff" stroke="#FF7A1A" stroke-width="1.6"/><text x="100" y="91" text-anchor="middle" font-family="Nunito,Segoe UI,sans-serif" font-size="10" font-weight="900" fill="#2B2340">42 TL</text>
  <rect x="148" y="79" width="36" height="16" rx="5" fill="#fff" stroke="#1FAF6B" stroke-width="1.6"/><text x="166" y="91" text-anchor="middle" font-family="Nunito,Segoe UI,sans-serif" font-size="10" font-weight="900" fill="#2B2340">47 TL</text>
  <g class="as-ucuz"><circle cx="119" cy="79" r="7" fill="#00C9A7" stroke="#fff" stroke-width="1.6"/><path d="M115.6 79l2.4 2.4 4.4-4.6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
  <text x="133" y="91" text-anchor="middle" font-family="Nunito,Segoe UI,sans-serif" font-size="11" font-weight="900" fill="#2B2340">&lt;</text>
  <g class="as-urun"><circle cx="190" cy="70" r="7" fill="#FF4D4D" stroke="#3B2F4A" stroke-width="1.4"/><path d="M190 63c0-3 1-4 3-5" stroke="#3B2F4A" stroke-width="1.4" fill="none"/></g>
  <g class="as-urun as-urun2"><rect x="184" y="64" width="12" height="13" rx="2" fill="#4D9FFF" stroke="#3B2F4A" stroke-width="1.4"/><path d="M184 68h12" stroke="#fff" stroke-width="1.4"/></g>
  </g>
  <g class="as-sepet">
    <path d="M196 118h4l6 22h26l5-16h-33" fill="none" stroke="#2B2340" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M203 126h32l-3 12h-26z" fill="#FFD600" stroke="#2B2340" stroke-width="1.6" stroke-linejoin="round"/>
    <circle cx="210" cy="145" r="3" fill="#2B2340"/><circle cx="229" cy="145" r="3" fill="#2B2340"/>
  </g>
  <rect y="146" width="240" height="4" fill="#E9C79E"/>
</svg>
</div>
`,
      },
      {
        name: "Neşeli Apartman",
        file: "neseli_apartman.html",
        desc: "Komşulara gelen eşyaları dağıt! Aynı eşya birine ihtiyaç, başkasına istek olabilir. Herkesin istekleri ve ihtiyaçları farklı! 🏠",
        sinif: "1-3. Sınıf — İstek ve ihtiyaçlar",
        beceri: "İstek ve ihtiyaçlar",
        grades: [1, 2, 3],
        eklenme: "2026-11-11",
        thumbBg: "linear-gradient(180deg,#E8F4FF,#FFF8F0)",
        customThumb: `
<div class="neseli-apartman-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#E8F4FF"/>
  <circle cx="212" cy="26" r="12" fill="#FFD600"/>
  <g class="na-bulut" fill="#fff"><ellipse cx="20" cy="24" rx="16" ry="7"/><ellipse cx="32" cy="19" rx="10" ry="7"/></g>
  <rect x="62" y="38" width="116" height="104" rx="6" fill="#FFB98F" stroke="#7a3b1d" stroke-width="2.2"/>
  <path d="M54 42 L120 10 L186 42 Z" fill="#FF6B35" stroke="#7a3b1d" stroke-width="2.2" stroke-linejoin="round"/>
  <rect x="88" y="24" width="64" height="13" rx="5" fill="#FFD600" stroke="#7a3b1d" stroke-width="1.4"/>
  <text x="120" y="33.5" text-anchor="middle" font-family="Nunito,Segoe UI,sans-serif" font-size="7.2" font-weight="900" fill="#7a3b1d">NEŞELİ APARTMAN</text>
  <rect x="70" y="46" width="30" height="30" rx="5" fill="#FFE3D3" stroke="#7a3b1d" stroke-width="1.6"/><rect class="na-isik" x="89" y="49" width="8" height="8" rx="1.5" fill="#FFF3B0" stroke="#7a3b1d" stroke-width="1" style="animation-delay:-0.0s"/><g><path d="M72 75Q81 65 90 75Z" fill="#A855F7"/><circle cx="81" cy="60" r="6.5" fill="#F5C6A0"/><path d="M74.5 59Q75 52 81 52.5Q87 52 87.5 59Q84 56 81 56Q78 56 74.5 59Z" fill="#5D3A1A"/><circle cx="78.7" cy="60" r="1" fill="#3B2416"/><circle cx="83.3" cy="60" r="1" fill="#3B2416"/><path d="M78.8 62.6Q81 64.2 83.2 62.6" stroke="#3B2416" stroke-width="1" fill="none" stroke-linecap="round"/></g><rect x="106" y="46" width="30" height="30" rx="5" fill="#E3F2FF" stroke="#7a3b1d" stroke-width="1.6"/><rect class="na-isik" x="125" y="49" width="8" height="8" rx="1.5" fill="#FFF3B0" stroke="#7a3b1d" stroke-width="1" style="animation-delay:-0.5s"/><g><path d="M108 75Q117 65 126 75Z" fill="#00C9A7"/><circle cx="117" cy="60" r="6.5" fill="#8D5524"/><path d="M110.5 59Q111 52 117 52.5Q123 52 123.5 59Q120 56 117 56Q114 56 110.5 59Z" fill="#212121"/><circle cx="114.7" cy="60" r="1" fill="#3B2416"/><circle cx="119.3" cy="60" r="1" fill="#3B2416"/><path d="M114.8 62.6Q117 64.2 119.2 62.6" stroke="#3B2416" stroke-width="1" fill="none" stroke-linecap="round"/></g><rect x="142" y="46" width="30" height="30" rx="5" fill="#F1E6FF" stroke="#7a3b1d" stroke-width="1.6"/><rect class="na-isik" x="161" y="49" width="8" height="8" rx="1.5" fill="#FFF3B0" stroke="#7a3b1d" stroke-width="1" style="animation-delay:-1.0s"/><g><path d="M144 75Q153 65 162 75Z" fill="#8D6E63"/><circle cx="153" cy="60" r="6.5" fill="#F5C6A0"/><path d="M146.5 59Q147 52 153 52.5Q159 52 159.5 59Q156 56 153 56Q150 56 146.5 59Z" fill="#ECEFF1"/><circle cx="150.7" cy="60" r="1" fill="#3B2416"/><circle cx="155.3" cy="60" r="1" fill="#3B2416"/><path d="M150.8 62.6Q153 64.2 155.2 62.6" stroke="#3B2416" stroke-width="1" fill="none" stroke-linecap="round"/></g><rect x="70" y="82" width="30" height="30" rx="5" fill="#DFF8F2" stroke="#7a3b1d" stroke-width="1.6"/><rect class="na-isik" x="89" y="85" width="8" height="8" rx="1.5" fill="#FFF3B0" stroke="#7a3b1d" stroke-width="1" style="animation-delay:-1.5s"/><g><path d="M72 111Q81 101 90 111Z" fill="#E53935"/><circle cx="81" cy="96" r="6.5" fill="#E0AC7E"/><path d="M74.5 95Q75 88 81 88.5Q87 88 87.5 95Q84 92 81 92Q78 92 74.5 95Z" fill="#E53935"/><circle cx="78.7" cy="96" r="1" fill="#3B2416"/><circle cx="83.3" cy="96" r="1" fill="#3B2416"/><path d="M78.8 98.6Q81 100.2 83.2 98.6" stroke="#3B2416" stroke-width="1" fill="none" stroke-linecap="round"/></g><rect x="106" y="82" width="30" height="30" rx="5" fill="#FFF6C9" stroke="#7a3b1d" stroke-width="1.6"/><rect class="na-isik" x="125" y="85" width="8" height="8" rx="1.5" fill="#FFF3B0" stroke="#7a3b1d" stroke-width="1" style="animation-delay:-2.0s"/><g><path d="M108 111Q117 101 126 111Z" fill="#C2185B"/><circle cx="117" cy="96" r="6.5" fill="#FFD7B5"/><path d="M110.5 95Q111 88 117 88.5Q123 88 123.5 95Q120 92 117 92Q114 92 110.5 95Z" fill="#212121"/><circle cx="114.7" cy="96" r="1" fill="#3B2416"/><circle cx="119.3" cy="96" r="1" fill="#3B2416"/><path d="M114.8 98.6Q117 100.2 119.2 98.6" stroke="#3B2416" stroke-width="1" fill="none" stroke-linecap="round"/></g><rect x="142" y="82" width="30" height="30" rx="5" fill="#FFE0EC" stroke="#7a3b1d" stroke-width="1.6"/><rect class="na-isik" x="161" y="85" width="8" height="8" rx="1.5" fill="#FFF3B0" stroke="#7a3b1d" stroke-width="1" style="animation-delay:-2.5s"/><g><path d="M144 111Q153 101 162 111Z" fill="#FFD600"/><circle cx="153" cy="96" r="6.5" fill="#C68B59"/><path d="M146.5 95Q147 88 153 88.5Q159 88 159.5 95Q156 92 153 92Q150 92 146.5 95Z" fill="#212121"/><circle cx="150.7" cy="96" r="1" fill="#3B2416"/><circle cx="155.3" cy="96" r="1" fill="#3B2416"/><path d="M150.8 98.6Q153 100.2 155.2 98.6" stroke="#3B2416" stroke-width="1" fill="none" stroke-linecap="round"/></g>
  <rect x="108" y="118" width="24" height="24" rx="3" fill="#8B5A2B" stroke="#7a3b1d" stroke-width="1.6"/><circle cx="127" cy="131" r="1.5" fill="#FFD600"/>
  <rect y="141" width="240" height="9" fill="#7BC67B"/>
  <g class="na-kapici">
    <circle cx="44" cy="117" r="6" fill="#F5C6A0" stroke="#7a3b1d" stroke-width="1.2"/>
    <path d="M37.5 115 Q44 106 50.5 115 Z" fill="#4D9FFF" stroke="#7a3b1d" stroke-width="1.2"/>
    <rect x="38" y="123" width="12" height="18" rx="4" fill="#4D9FFF" stroke="#7a3b1d" stroke-width="1.2"/>
    <g class="na-paket"><rect x="49" y="126" width="12" height="10" rx="1.5" fill="#E0A96D" stroke="#7a3b1d" stroke-width="1.2"/><path d="M49 131h12M55 126v10" stroke="#7a3b1d" stroke-width="1"/></g>
  </g>
  <g class="na-balon"><path d="M14 64 h28 a6 6 0 0 1 6 6 v10 a6 6 0 0 1 -6 6 h-10 l-6 6 v-6 h-12 a6 6 0 0 1 -6 -6 v-10 a6 6 0 0 1 6 -6Z" fill="#00C9A7" stroke="#fff" stroke-width="1.5"/>
    <text x="28" y="79" text-anchor="middle" font-family="Nunito,Segoe UI,sans-serif" font-size="9" font-weight="900" fill="#fff">✔ İhtiyaç</text></g>
  <g class="na-balon na-balon2"><path d="M192 64 h32 a6 6 0 0 1 6 6 v10 a6 6 0 0 1 -6 6 h-18 l-6 6 v-6 h-8 a6 6 0 0 1 -6 -6 v-10 a6 6 0 0 1 6 -6Z" fill="#FF6B35" stroke="#fff" stroke-width="1.5"/>
    <text x="209" y="79" text-anchor="middle" font-family="Nunito,Segoe UI,sans-serif" font-size="9" font-weight="900" fill="#fff">★ İstek</text></g>
</svg>
</div>
`,
      },
      {
        name: "Sağlıklı Can",
        file: "saglikli_can.html",
        desc: "Can'ın gününü planla, sağlıklı alışkanlıkların büyümesine nasıl yardım ettiğini keşfet!",
        sinif: "2. Sınıf — Sağlıklı büyüme ve alışkanlıklar",
        thumbBg: "linear-gradient(170deg, #E6FBF6 0%, #FFF8F0 100%)",
        customThumb: `
<div class="saglikli-can-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <!-- zemin -->
  <rect x="0" y="122" width="240" height="28" fill="#E9C79E"/>
  <rect x="0" y="120" width="240" height="3" fill="#D9B07F"/>
  <!-- Can -->
  <g class="sc-can">
    <ellipse cx="62" cy="140" rx="17" ry="3" fill="rgba(0,0,0,.12)"/>
    <rect x="53" y="112" width="7" height="22" rx="3.5" fill="#3B5BA5"/><rect x="63" y="112" width="7" height="22" rx="3.5" fill="#3B5BA5"/>
    <ellipse cx="56" cy="135" rx="7" ry="3.5" fill="#2D2A32"/><ellipse cx="67" cy="135" rx="7" ry="3.5" fill="#2D2A32"/>
    <path d="M48 92Q38 82 37 72M76 92Q86 82 87 72" stroke="#FF6B35" stroke-width="7" stroke-linecap="round" fill="none"/>
    <circle cx="37" cy="70" r="4" fill="#F6C9A0"/><circle cx="87" cy="70" r="4" fill="#F6C9A0"/>
    <rect x="46" y="85" width="31" height="32" rx="11" fill="#FF6B35"/>
    <path d="M61.5 94L63.4 98L67.6 98.4L64.4 101.2L65.4 105.4L61.5 103.2L57.6 105.4L58.6 101.2L55.4 98.4L59.6 98Z" fill="#FFD600"/>
    <circle cx="61.5" cy="68" r="19" fill="#F6C9A0"/>
    <path d="M42.6 65Q41 46 61.5 46Q82 46 80.4 65Q76 56 67 56Q62 51 55 55Q47 54 42.6 65Z" fill="#5A3825"/>
    <path d="M53 70Q56 66.5 59 70M64 70Q67 66.5 70 70" stroke="#2D2A32" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <path d="M55 75Q61.5 84 68 75Z" fill="#8B2E2E"/><path d="M56.3 75.6L66.7 75.6Q65.8 78.4 61.5 78.4Q57.2 78.4 56.3 75.6Z" fill="#fff"/>
    <ellipse cx="50" cy="75" rx="3.5" ry="2" fill="#FF8FA8" opacity=".6"/><ellipse cx="73" cy="75" rx="3.5" ry="2" fill="#FF8FA8" opacity=".6"/>
  </g>
  <!-- göstergeye uçan elma -->
  <g class="sc-elma">
    <circle cx="98" cy="104" r="7" fill="#E5353B"/><path d="M98 97Q101 92 105 94Q101 97 98 97Z" fill="#52C46E"/>
  </g>
  <!-- gösterge paneli -->
  <rect x="122" y="20" width="108" height="96" rx="12" fill="#fff" stroke="#EADFD3" stroke-width="2"/>
  <g>
    <circle cx="137" cy="38" r="7" fill="#FF6B35"/><rect x="149" y="34" width="70" height="8" rx="4" fill="#F0E8DF"/>
    <circle cx="137" cy="58" r="7" fill="#4D9FFF"/><rect x="149" y="54" width="70" height="8" rx="4" fill="#F0E8DF"/>
    <circle cx="137" cy="78" r="7" fill="#FFD600"/><rect x="149" y="74" width="70" height="8" rx="4" fill="#F0E8DF"/>
    <circle cx="137" cy="98" r="7" fill="#00C9A7"/><rect x="149" y="94" width="70" height="8" rx="4" fill="#F0E8DF"/>
  </g>
  <g>
    <rect class="sc-dolgu" x="149" y="34" width="70" height="8" rx="4" fill="#FF6B35"/>
    <rect class="sc-dolgu" x="149" y="54" width="70" height="8" rx="4" fill="#4D9FFF"/>
    <rect class="sc-dolgu" x="149" y="74" width="70" height="8" rx="4" fill="#FFD600"/>
    <rect class="sc-dolgu" x="149" y="94" width="70" height="8" rx="4" fill="#00C9A7"/>
  </g>
</svg>
</div>`,
      },
      {
        name: "Geri Dönüşüm Fabrikası",
        file: "geridonusum.html",
        beceri: "Geri dönüşüm",
        desc: "Geri dönüşüm fabrikamızda atıkları ayırmaya yardım eder misin?",
        sinif: "1. - 2. Sınıf",
        emoji: "♻️",
        thumbBg: "linear-gradient(180deg,#EAF2F8,#D8E8F2)",
        customThumb: `
<div class="gdn-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#EAF2F8"/>
  <g class="gdn-ok" stroke="#2FA85A" stroke-width="5" fill="none" stroke-linecap="round">
    <path d="M196 26A16 16 0 0 1 212 42"/><path d="M212 42A16 16 0 0 1 196 58"/><path d="M196 58A16 16 0 0 1 182 36"/>
    <path d="M212 36l2 7-7 1Z" fill="#2FA85A" stroke="none"/><path d="M198 60l-7 2 1-7Z" fill="#2FA85A" stroke="none"/><path d="M184 32l1-7 6 4Z" fill="#2FA85A" stroke="none"/>
  </g>
  <rect x="10" y="48" width="130" height="12" rx="6" fill="#5B5470" stroke="#2B2340" stroke-width="2"/>
  <g class="gdn-bant" stroke="#C9D3E6" stroke-width="3" stroke-linecap="round"><line x1="22" y1="54" x2="30" y2="54"/><line x1="46" y1="54" x2="54" y2="54"/><line x1="70" y1="54" x2="78" y2="54"/><line x1="94" y1="54" x2="102" y2="54"/><line x1="118" y1="54" x2="126" y2="54"/></g>
  <g fill="#8D93A8"><circle cx="24" cy="66" r="6"/><circle cx="74" cy="66" r="6"/><circle cx="126" cy="66" r="6"/></g>
  <rect x="18" y="26" width="30" height="20" rx="4" fill="#C8874A" stroke="#2B2340" stroke-width="2"/>
  <g class="gdn-sise">
    <path d="M0 -10h8v6l3 4v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12l3 -4z" fill="#9FE8FF" stroke="#2B6A8F" stroke-width="2"/>
  </g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle" stroke-width="2.5">
    <path d="M26 100H74L68 144H32Z" fill="#4D9FFF" stroke="#2B2340"/>
    <path d="M96 100H144L138 144H102Z" fill="#FFD600" stroke="#2B2340"/>
    <path d="M166 100H214L208 144H172Z" fill="#2FA85A" stroke="#2B2340"/>
    <text x="50" y="128" font-size="11" fill="#fff" stroke="none">KAĞIT</text>
    <text x="120" y="128" font-size="10" fill="#2B2340" stroke="none">PLASTİK</text>
    <text x="190" y="128" font-size="11" fill="#fff" stroke="none">CAM</text>
  </g>
</svg>
</div>
`,
      }
    ]
  },
  {
    name: "🌍 PYP",
    color: "#A855F7",
    iconBg: "linear-gradient(135deg, #A855F7, #FF4D8D)",
    lineColor: "linear-gradient(90deg, #A855F7, #FF4D8D)",
    games: [
      {
        name: "Öğrenen Profilleri",
        file: "pyp.html",
        beceri: "Öğrenen profilleri",
        desc: "PYP öğrenen profillerini keşfet ve öğren! 🌟",
        sinif: "1-4. Sınıf",
        emoji: "🌟",
        thumbBg: "linear-gradient(180deg,#E8F4FF,#D6EBFF)",
        customThumb: `
<div class="pyp-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#E8F4FF"/>
  <g fill="#fff" opacity=".9"><ellipse cx="40" cy="26" rx="16" ry="7"/><ellipse cx="206" cy="124" rx="18" ry="8"/></g>
  <ellipse cx="120" cy="78" rx="86" ry="34" fill="none" stroke="#A855F7" stroke-width="2" stroke-dasharray="6 6" opacity=".5"/>
  <g class="pyp-dunya">
    <circle cx="120" cy="78" r="36" fill="#4D9FFF" stroke="#2B2340" stroke-width="2.5"/>
    <path d="M100 62Q112 52 124 60Q120 72 106 74Q98 70 100 62Z" fill="#7BD389"/>
    <path d="M128 84Q142 78 146 90Q138 102 126 96Q124 88 128 84Z" fill="#7BD389"/>
    <path d="M106 92Q114 90 116 98Q110 104 104 100Z" fill="#7BD389"/>
    <ellipse cx="108" cy="62" rx="10" ry="5" fill="#fff" opacity=".35"/>
  </g>
  <g class="pyp-orbit">
    <g transform="translate(120 78)">
      <g transform="translate(-86 0)"><circle r="12" fill="#FFD600" stroke="#2B2340" stroke-width="2"/><path d="M0 -6 L1.8 -1.8 L6 -1.5 L2.8 1.4 L3.8 6 L0 3.4 L-3.8 6 L-2.8 1.4 L-6 -1.5 L-1.8 -1.8 Z" fill="#fff"/></g>
      <g transform="translate(86 0)"><circle r="12" fill="#FF4D8D" stroke="#2B2340" stroke-width="2"/><path d="M0 5 C-7 -1 -4 -7 0 -3 C4 -7 7 -1 0 5Z" fill="#fff"/></g>
      <g transform="translate(0 -40)"><circle r="12" fill="#00C9A7" stroke="#2B2340" stroke-width="2"/><circle cx="0" cy="-1.5" r="4" fill="#FFF4C2"/><rect x="-2" y="2.5" width="4" height="3.5" rx="1" fill="#fff"/></g>
    </g>
  </g>
  <path class="pyp-parla" d="M196 44 L198.5 50 L205 52 L198.5 54 L196 60 L193.5 54 L187 52 L193.5 50 Z" fill="#FFD600"/>
</svg>
</div>
`,
      },
      {
        name: "2. Portfolyo Etkinliği",
        file: "portfolio.html",
        beceri: "Portfolyo etkinliği",
        desc: "1. Sınıflar 2. Portfolyo Etkinliği",
        sinif: "1. Sınıf",
        emoji: "📁",
        thumbBg: "linear-gradient(180deg,#FFF3E0,#FFE4C2)",
        customThumb: `
<div class="portfolio-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#FFF3E0"/>
  <rect y="118" width="240" height="32" fill="#C8874A"/>
  <path d="M46 118V54Q46 48 52 48H88L98 60H176Q182 60 182 66V118Z" fill="#FF9E2C" stroke="#2B2340" stroke-width="2.5"/>
  <g class="por-kagit">
    <rect x="60" y="34" width="86" height="60" rx="4" fill="#fff" stroke="#E0D2B8" stroke-width="2" transform="rotate(-4 103 64)"/>
    <g fill="#CBBFA8" transform="rotate(-4 103 64)"><rect x="70" y="48" width="60" height="5" rx="2.5"/><rect x="70" y="60" width="48" height="5" rx="2.5"/><rect x="70" y="72" width="56" height="5" rx="2.5"/></g>
    <path class="por-yildiz" d="M138 44 L141 51 L149 52 L143 57 L145 65 L138 61 L131 65 L133 57 L127 52 L135 51 Z" fill="#FFD600" stroke="#B8860B" stroke-width="1.6" transform="rotate(-4 103 64)"/>
  </g>
  <path d="M40 124V76Q40 70 46 70H188Q194 70 194 76V124Q194 118 188 118H46Q40 118 40 124Z" fill="#FFB84D" stroke="#2B2340" stroke-width="2.5"/>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900"><rect x="86" y="88" width="64" height="20" rx="10" fill="#fff" stroke="#2B2340" stroke-width="2"/><text x="118" y="103" font-size="12" text-anchor="middle" fill="#2B2340">2A</text></g>
  <g class="por-damga">
    <rect x="198" y="46" width="12" height="22" rx="4" fill="#A855F7" stroke="#2B2340" stroke-width="2"/>
    <rect x="192" y="66" width="24" height="10" rx="3" fill="#7A4FD1" stroke="#2B2340" stroke-width="2"/>
  </g>
  <g stroke="#2B2340" stroke-width="2"><rect x="24" y="130" width="46" height="7" rx="3.5" fill="#FFD600"/><polygon points="70,130 80,133.5 70,137" fill="#F1C27D"/></g>
</svg>
</div>
`,
        isSpecial: true
      }
    ]
  },
  {
    name: "🎲 Diğer Oyunlar",
    color: "#FF6B35",
    iconBg: "linear-gradient(135deg, #FF6B35, #FFD600)",
    lineColor: "linear-gradient(90deg, #FF6B35, #FFD600)",
    games: [
      {
        name: "Gökdelen Şehri",
        file: "gokdelen_sehri.html",
        beceri: "Mantık",
        desc: "Binaları diz, kenardaki tabelalar kaç bina görünsün diyorsa o kadar! 3 boyutlu öğretici, 74 bulmaca ve yıldızlarla şehir marketi. 🏙️",
        eklenme: "2026-11-27",
        thumbBg: "linear-gradient(180deg,#7CCBFF,#D9F1FF)",
        customThumb: `
<div class="gdk-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="gdkGok" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7CCBFF"/><stop offset="1" stop-color="#D9F1FF"/></linearGradient></defs>
  <rect width="240" height="150" fill="url(#gdkGok)"/>
  <g class="gdk-bulut" fill="#fff" opacity=".9"><ellipse cx="190" cy="26" rx="20" ry="8"/><ellipse cx="204" cy="21" rx="13" ry="9"/></g>
  <rect y="128" width="240" height="22" fill="#A3D98A"/>
  <path d="M8 132 H232" stroke="#8D98A7" stroke-width="5"/>
  <g stroke="#2B2340" stroke-width="2" stroke-linejoin="round">
    <path d="M186 84 h36 l10 -8 h-36 Z" fill="#B8D6FF"/><path d="M222 84 v46 l10 -8 v-46 Z" fill="#3A7FD9"/><rect x="186" y="84" width="36" height="46" fill="#4D9FFF"/>
    <path d="M110 62 h36 l10 -8 h-36 Z" fill="#E7C9FF"/><path d="M146 62 v68 l10 -8 v-68 Z" fill="#8A3FD6"/><rect x="110" y="62" width="36" height="68" fill="#A855F7"/>
    <path d="M62 106 h36 l10 -8 h-36 Z" fill="#A8F0E0"/><path d="M98 106 v24 l10 -8 v-24 Z" fill="#00A88B"/><rect x="62" y="106" width="36" height="24" fill="#00C9A7"/>
  </g>
  <g fill="#FFF6CF"><rect x="117" y="70" width="8" height="10" rx="1"/><rect x="131" y="70" width="8" height="10" rx="1"/><rect x="117" y="92" width="8" height="10" rx="1"/><rect x="131" y="92" width="8" height="10" rx="1"/><rect x="117" y="113" width="8" height="10" rx="1"/><rect x="131" y="113" width="8" height="10" rx="1"/>
    <rect x="193" y="92" width="8" height="10" rx="1"/><rect x="207" y="92" width="8" height="10" rx="1"/><rect x="193" y="113" width="8" height="10" rx="1"/><rect x="207" y="113" width="8" height="10" rx="1"/>
    <rect x="69" y="113" width="8" height="10" rx="1"/><rect x="83" y="113" width="8" height="10" rx="1"/></g>
  <!-- lazerler: yeşil = görünür, kırmızı = saklı -->
  <g stroke-linecap="round" fill="none">
    <path d="M110 64 H30" stroke="#14E07A" stroke-width="7" opacity=".3"/><path class="gdk-lazer" d="M110 64 H30" stroke="#14E07A" stroke-width="3" stroke-dasharray="8 6"/>
    <path d="M62 108 H30" stroke="#14E07A" stroke-width="7" opacity=".3"/><path class="gdk-lazer" d="M62 108 H30" stroke="#14E07A" stroke-width="3" stroke-dasharray="8 6"/>
    <path d="M186 86 H156" stroke="#FF2E63" stroke-width="7" opacity=".3"/><path class="gdk-lazer" d="M186 86 H156" stroke="#FF2E63" stroke-width="3" stroke-dasharray="8 6"/>
  </g>
  <path class="gdk-kivilcim" d="M156 78 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 Z" fill="#FFD600" stroke="#FF6B35" stroke-width="1"/>
  <!-- tabela ve çocuk -->
  <path d="M14 130 V96" stroke="#6B6585" stroke-width="3"/>
  <g class="gdk-tabela"><circle cx="14" cy="88" r="11" fill="#fff" stroke="#2B2340" stroke-width="2.5"/><text x="14" y="93" text-anchor="middle" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="14" fill="#2B2340">2</text></g>
  <g><rect x="25" y="112" width="10" height="12" rx="3" fill="#FF6B35"/><rect x="26" y="124" width="3" height="6" fill="#2B2340"/><rect x="31" y="124" width="3" height="6" fill="#2B2340"/><circle cx="30" cy="107" r="5" fill="#FFD6B0"/><path d="M25 106 a5 5 0 0 1 10 0 Z" fill="#2B2340"/></g>
  <path class="gdk-goz" d="M30 108 V66" stroke="#14E07A" stroke-width="1.5" stroke-dasharray="3 3"/>
</svg>
</div>
`,
      },
      {
        name: "Değiştirme Satrancı",
        file: "satranc.html",
        beceri: "Satranç",
        desc: "Ya satranç taşlarının kuralları değişseydi nasıl olurdu?",
        emoji: "♟️",
        thumbBg: "linear-gradient(180deg,#EDE6F7,#D9CCF0)",
        customThumb: `
<div class="satranc-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#EDE6F7"/>
  <g stroke="#2B2340" stroke-width="2.5"><rect x="20" y="58" width="200" height="80" rx="6" fill="#F5E6C8"/></g>
  <g fill="#8A6AAE">
    <rect x="20" y="58" width="40" height="40"/><rect x="100" y="58" width="40" height="40"/><rect x="180" y="58" width="40" height="40"/>
    <rect x="60" y="98" width="40" height="40"/><rect x="140" y="98" width="40" height="40"/>
  </g>
  <path class="stn-ok" d="M84 44Q120 16 156 44" fill="none" stroke="#FF6B35" stroke-width="3.5" stroke-dasharray="7 6" stroke-linecap="round"/>
  <path class="stn-ok" d="M158 40l0 9-9-2Z" fill="#FF6B35"/>
  <g class="stn-at">
    <ellipse cx="80" cy="96" rx="17" ry="4.5" fill="rgba(0,0,0,.2)"/>
    <path d="M68 94Q66 86 72 84L70 66Q70 52 82 48Q80 42 86 42Q96 46 96 58L90 60Q94 70 92 84Q96 86 94 94Z" fill="#FFFDF6" stroke="#2B2340" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="84" cy="52" r="1.8" fill="#2B2340"/>
    <path d="M82 48L78 56" stroke="#2B2340" stroke-width="2" stroke-linecap="round"/>
  </g>
  <g class="stn-kale">
    <ellipse cx="160" cy="136" rx="17" ry="4.5" fill="rgba(0,0,0,.2)"/>
    <path d="M148 134L151 106H169L172 134Z" fill="#5B4A7E" stroke="#2B2340" stroke-width="2.5"/>
    <path d="M148 106V92H153V98H158V92H162V98H167V92H172V106Z" fill="#5B4A7E" stroke="#2B2340" stroke-width="2.5" stroke-linejoin="round"/>
  </g>
  <path class="stn-parla" d="M208 24 L210.5 30 L217 32 L210.5 34 L208 40 L205.5 34 L199 32 L205.5 30 Z" fill="#A855F7"/>
</svg>
</div>
`,
      }
    ]
  }

];

// ============================================================
// 3. ve 4. SINIF KATEGORİLERİ — sınıf görünümünde "Matematik" ve
// "Fen Bilimleri" başlıklarıyla birleşerek gösterilirler.
// ============================================================
const hiddenCategories = [
  {
    name: "🔐 3. Sınıflar",
    tetik: 'mat',
    color: "#00C9A7",
    iconBg: "linear-gradient(135deg, #00C9A7, #4D9FFF)",
    lineColor: "linear-gradient(90deg, #00C9A7, #4D9FFF)",
    games: [
      {
        name: "Örüntü Köprüsü",
        file: "oruntu_koprusu.html",
        desc: "Kuralı bul, kurbağayı taş taş karşıya geçir! Sayı ve şekil örüntüleri.",
        sinif: "3. Sınıf — Sayı ve şekil örüntüleri",
        eklenme: "2026-10-22",
        thumbBg: "linear-gradient(180deg, #8EDBFF, #2484CB)",
        customThumb: `
<div class="oruntu-koprusu-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="orkSu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8EDBFF"/><stop offset="1" stop-color="#2484CB"/></linearGradient>
    <radialGradient id="orkTas" cx=".34" cy=".28" r=".8"><stop offset="0" stop-color="#F1F4F8"/><stop offset="1" stop-color="#BCC7D3"/></radialGradient>
  </defs>
  <rect width="240" height="150" fill="url(#orkSu)"/>
  <path d="M0 0 H240 V30 C196 42 150 26 100 36 S34 42 0 32 Z" fill="#7AD06A"/>
  <g stroke="#3E8E3A" stroke-width="1.8" stroke-linecap="round" fill="none"><path d="M14 34 Q13 22 10 12"/><path d="M20 34 Q21 20 21 8"/><path d="M226 30 Q227 20 230 12"/></g>
  <g fill="#8A5A2B"><rect x="8" y="10" width="4" height="9" rx="2"/><rect x="19" y="6" width="4" height="10" rx="2"/><rect x="228" y="10" width="4" height="8" rx="2"/></g>
  <g fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2" stroke-linecap="round"><path d="M20 132 q10 -5 20 0 t20 0"/><path d="M150 138 q10 -5 20 0 t20 0"/></g>
  <g transform="translate(212 132) rotate(30)"><path d="M0 0 L13 -4 A14 14 0 1 0 13 4 Z" fill="#46B86B"/></g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <ellipse cx="34" cy="104" rx="25" ry="7" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1.5"/><ellipse cx="34" cy="99" rx="23" ry="13" fill="#7F8FA0"/><ellipse cx="34" cy="96" rx="23" ry="13" fill="url(#orkTas)"/><text x="34" y="102" font-size="15" fill="#2B2D42">5</text><ellipse cx="92" cy="104" rx="25" ry="7" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1.5"/><ellipse cx="92" cy="99" rx="23" ry="13" fill="#7F8FA0"/><ellipse cx="92" cy="96" rx="23" ry="13" fill="url(#orkTas)"/><text x="92" y="102" font-size="15" fill="#2B2D42">10</text><ellipse cx="150" cy="104" rx="25" ry="7" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1.5"/><ellipse cx="150" cy="99" rx="23" ry="13" fill="#7F8FA0"/><ellipse cx="150" cy="96" rx="23" ry="13" fill="url(#orkTas)"/><text x="150" y="102" font-size="15" fill="#2B2D42">15</text>
    <ellipse cx="208" cy="96" rx="23" ry="13" fill="rgba(255,255,255,.15)" stroke="#fff" stroke-width="2" stroke-dasharray="5 4"/>
    <text class="ork-soru" x="208" y="102" font-size="16" fill="#fff">?</text>
    <g class="ork-e3"><ellipse cx="208" cy="99" rx="23" ry="13" fill="#2FA98A"/><ellipse cx="208" cy="96" rx="23" ry="13" fill="#B9F0DF"/><text x="208" y="102" font-size="15" fill="#2B2D42">20</text></g>
    <path d="M55 97 h12 M64 92.5 l5 4.5 -5 4.5" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M113 97 h12 M122 92.5 l5 4.5 -5 4.5" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M171 97 h12 M180 92.5 l5 4.5 -5 4.5" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <g class="ork-e1"><rect x="48" y="70" width="30" height="14" rx="7" fill="#fff"/><text x="63" y="80.5" font-size="9.5" fill="#0E9C7E">+5 ✓</text></g><g class="ork-e2"><rect x="106" y="70" width="30" height="14" rx="7" fill="#fff"/><text x="121" y="80.5" font-size="9.5" fill="#0E9C7E">+5 ✓</text></g><g class="ork-e3"><rect x="164" y="70" width="30" height="14" rx="7" fill="#fff"/><text x="179" y="80.5" font-size="9.5" fill="#0E9C7E">+5 ✓</text></g>
  </g>
  <g class="ork-kurbaga"><g transform="translate(-15 -27)">
    <ellipse cx="15" cy="27" rx="12" ry="2" fill="rgba(0,0,0,.18)"/>
    <ellipse cx="7" cy="22" rx="5.5" ry="3.5" fill="#2EA44F"/><ellipse cx="23" cy="22" rx="5.5" ry="3.5" fill="#2EA44F"/>
    <ellipse cx="15" cy="19" rx="9" ry="7" fill="#3CC461"/><ellipse cx="15" cy="21" rx="5" ry="4" fill="#CFF7BE"/>
    <path d="M7.5 16.5 Q15 20 22.5 16.5 L22 18.5 Q15 22 8 18.5 Z" fill="#FF6B35"/>
    <ellipse cx="15" cy="12" rx="9.5" ry="6.5" fill="#3CC461"/>
    <circle cx="10" cy="7" r="4" fill="#3CC461"/><circle cx="20" cy="7" r="4" fill="#3CC461"/>
    <circle cx="10" cy="7" r="2.8" fill="#fff"/><circle cx="20" cy="7" r="2.8" fill="#fff"/>
    <circle cx="10.5" cy="7.3" r="1.5" fill="#1F2430"/><circle cx="19.5" cy="7.3" r="1.5" fill="#1F2430"/>
    <path d="M11.5 13.5 Q15 16 18.5 13.5" fill="none" stroke="#1E6B34" stroke-width="1" stroke-linecap="round"/>
  </g></g>
</svg>
</div>
`
      },
      {
        name: "Kesir Pidecisi",
        file: "kesir_pidecisi.html",
        desc: "Siparişe göre pideyi eşit parçalara kes, her dilimi kesirle etiketle! Bütün, yarım ve çeyrek.",
        sinif: "3. Sınıf — Bütün, yarım, çeyrek (MAT.3.1.9)",
        beceri: "MAT.3.1.9 · Bütün, yarım, çeyrek",
        eklenme: "2026-10-23",
        thumbBg: "linear-gradient(180deg, #B54A35, #A86F45)",
        customThumb: `
<div class="kesir-pidecisi-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="kpdTugla" width="40" height="20" patternUnits="userSpaceOnUse"><rect width="40" height="20" fill="#B54A35"/><path d="M0 1H40M20 1V10M0 10.5H40M10 10.5V20M30 10.5V20" stroke="#F3D9C4" stroke-opacity=".4" stroke-width="2" fill="none"/></pattern>
    <g id="kpdPide">
      <path d="M48.0 95.0 L52.1 92.1 L56.2 89.3 L60.3 86.7 L64.4 84.2 L68.5 81.9 L72.6 79.7 L76.7 77.7 L80.8 75.8 L84.9 74.1 L89.0 72.5 L93.1 71.1 L97.2 69.8 L101.3 68.7 L105.4 67.7 L109.5 66.9 L113.6 66.2 L117.7 65.7 L121.8 65.3 L125.9 65.1 L130.0 65.0 L134.1 65.1 L138.2 65.3 L142.3 65.7 L146.4 66.2 L150.5 66.9 L154.6 67.7 L158.7 68.7 L162.8 69.8 L166.9 71.1 L171.0 72.5 L175.1 74.1 L179.2 75.8 L183.3 77.7 L187.4 79.7 L191.5 81.9 L195.6 84.2 L199.7 86.7 L203.8 89.3 L207.9 92.1 L212.0 95.0 L207.9 97.9 L203.8 100.7 L199.7 103.3 L195.6 105.8 L191.5 108.1 L187.4 110.3 L183.3 112.3 L179.2 114.2 L175.1 115.9 L171.0 117.5 L166.9 118.9 L162.8 120.2 L158.7 121.3 L154.6 122.3 L150.5 123.1 L146.4 123.8 L142.3 124.3 L138.2 124.7 L134.1 124.9 L130.0 125.0 L125.9 124.9 L121.8 124.7 L117.7 124.3 L113.6 123.8 L109.5 123.1 L105.4 122.3 L101.3 121.3 L97.2 120.2 L93.1 118.9 L89.0 117.5 L84.9 115.9 L80.8 114.2 L76.7 112.3 L72.6 110.3 L68.5 108.1 L64.4 105.8 L60.3 103.3 L56.2 100.7 L52.1 97.9 Z" fill="#E9A23B" stroke="#C9822A" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M66.0 95.0 L69.2 93.1 L72.4 91.4 L75.6 89.7 L78.8 88.2 L82.0 86.7 L85.2 85.3 L88.4 84.0 L91.6 82.8 L94.8 81.7 L98.0 80.8 L101.2 79.8 L104.4 79.0 L107.6 78.3 L110.8 77.7 L114.0 77.2 L117.2 76.8 L120.4 76.4 L123.6 76.2 L126.8 76.0 L130.0 76.0 L133.2 76.0 L136.4 76.2 L139.6 76.4 L142.8 76.8 L146.0 77.2 L149.2 77.7 L152.4 78.3 L155.6 79.0 L158.8 79.8 L162.0 80.8 L165.2 81.7 L168.4 82.8 L171.6 84.0 L174.8 85.3 L178.0 86.7 L181.2 88.2 L184.4 89.7 L187.6 91.4 L190.8 93.1 L194.0 95.0 L190.8 96.9 L187.6 98.6 L184.4 100.3 L181.2 101.8 L178.0 103.3 L174.8 104.7 L171.6 106.0 L168.4 107.2 L165.2 108.3 L162.0 109.2 L158.8 110.2 L155.6 111.0 L152.4 111.7 L149.2 112.3 L146.0 112.8 L142.8 113.2 L139.6 113.6 L136.4 113.8 L133.2 114.0 L130.0 114.0 L126.8 114.0 L123.6 113.8 L120.4 113.6 L117.2 113.2 L114.0 112.8 L110.8 112.3 L107.6 111.7 L104.4 111.0 L101.2 110.2 L98.0 109.2 L94.8 108.3 L91.6 107.2 L88.4 106.0 L85.2 104.7 L82.0 103.3 L78.8 101.8 L75.6 100.3 L72.4 98.6 L69.2 96.9 Z" fill="#F6D365"/>
      <g fill="#FFF1B8"><ellipse cx="88" cy="92" rx="4" ry="2.6"/><ellipse cx="104" cy="101" rx="3.4" ry="2.4"/><ellipse cx="118" cy="86" rx="4" ry="2.6"/><ellipse cx="140" cy="104" rx="4" ry="2.6"/><ellipse cx="152" cy="88" rx="3.4" ry="2.4"/><ellipse cx="170" cy="97" rx="4" ry="2.6"/><ellipse cx="124" cy="106" rx="3" ry="2"/><ellipse cx="160" cy="105" rx="3" ry="2"/></g>
      <path d="M60 90 Q92 70 130 68" stroke="#F7C46E" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>
    </g>
    <clipPath id="kpdSol"><rect x="0" y="0" width="130" height="150"/></clipPath>
    <clipPath id="kpdSag"><rect x="130" y="0" width="110" height="150"/></clipPath>
  </defs>
  <rect width="240" height="150" fill="url(#kpdTugla)"/>
  <rect x="0" y="50" width="240" height="100" fill="#A86F45"/><rect x="0" y="50" width="240" height="5" fill="#8C5634"/>
  <g fill="none" stroke="#8C5634" stroke-opacity=".35" stroke-width="2"><path d="M0 74H240M0 104H240M0 134H240"/></g>
  <g transform="rotate(-7 32 26)">
    <path d="M12 6H54V44L50 41L46 44L42 41L38 44L34 41L30 44L26 41L22 44L18 41L14 44L12 42Z" fill="#FFFDF7"/>
    <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" fill="#3A2618" text-anchor="middle"><text x="33" y="20" font-size="10">1</text><rect x="28" y="22.5" width="10" height="1.8" rx=".9"/><text x="33" y="33" font-size="10">2</text></g>
    <path d="M17 13h7M17 28h7" stroke="#C8553D" stroke-width="2" stroke-linecap="round"/>
  </g>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" fill="#3A2618" text-anchor="middle">
    <g class="kp-sol"><g clip-path="url(#kpdSol)"><use href="#kpdPide"/></g><g class="kp-b1"><line x1="100" y1="100" x2="100" y2="60" stroke="#B9895E" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="100" r="2" fill="#8C5634"/>
      <rect x="76" y="58" width="22" height="30" rx="3.5" fill="#FFFDF7" stroke="#3A2618" stroke-width="1.6"/>
      <text x="87" y="70" font-size="11">1</text><rect x="81" y="72.5" width="12" height="2" rx="1" fill="#3A2618"/><text x="87" y="85" font-size="11">2</text></g></g>
    <g class="kp-sag"><g clip-path="url(#kpdSag)"><use href="#kpdPide"/></g><g class="kp-b2"><line x1="160" y1="100" x2="160" y2="60" stroke="#B9895E" stroke-width="2" stroke-linecap="round"/><circle cx="160" cy="100" r="2" fill="#8C5634"/>
      <rect x="162" y="58" width="22" height="30" rx="3.5" fill="#FFFDF7" stroke="#3A2618" stroke-width="1.6"/>
      <text x="173" y="70" font-size="11">1</text><rect x="167" y="72.5" width="12" height="2" rx="1" fill="#3A2618"/><text x="173" y="85" font-size="11">2</text></g></g>
  </g>
  <line class="kp-iz" x1="130" y1="58" x2="130" y2="132" stroke="#fff" stroke-width="2.5" stroke-dasharray="5 4" stroke-linecap="round"/>
  <g class="kp-bicak"><path d="M0 0 L-6 -38 Q0 -42 5 -38 Z" fill="#E4EAEE" stroke="#8D99A3" stroke-width="1.6" stroke-linejoin="round"/><rect x="-5" y="-62" width="10" height="24" rx="4" fill="#6B3E22"/><circle cx="0" cy="-54" r="1.6" fill="#E9C9A6"/><circle cx="0" cy="-45" r="1.6" fill="#E9C9A6"/></g>
</svg>
</div>
`
      }
    ]
  },
  {
    name: "🔐 4. Sınıflar",
    tetik: 'mat',
    color: "#4D9FFF",
    iconBg: "linear-gradient(135deg, #4D9FFF, #A855F7)",
    lineColor: "linear-gradient(90deg, #4D9FFF, #A855F7)",
    games: [
      {
        name: "Kasa Ustası",
        file: "kasa_ustasi.html",
        desc: "6 basamaklı sayıları çözümle, şifreyi bul, kasaları aç!",
        sinif: "4. Sınıf — 6 basamaklı sayıların çözümlenmesi",
        eklenme: "2026-10-20",
        thumbBg: "linear-gradient(135deg, #0B1533, #1C2F66)",
        customThumb: `
<div class="kasa-ustasi-thumb">
<svg class="ku-sahne" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="kuAltin" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#FFE27A"/><stop offset=".65" stop-color="#D9A514"/><stop offset="1" stop-color="#7A5A08"/></radialGradient>
  </defs>
  <rect width="240" height="150" fill="#0B1533"/>
  <g fill="#FFD34D" opacity=".5"><circle cx="210" cy="18" r="1.6"/><circle cx="140" cy="128" r="1.3"/><circle cx="226" cy="132" r="1.6"/><circle cx="120" cy="16" r="1.2"/></g>
  <!-- kasa gövdesi ve içi -->
  <circle cx="70" cy="75" r="52" fill="#7A5A08"/>
  <circle cx="70" cy="75" r="45" fill="#2A1D05"/>
  <g stroke="#A87B06" stroke-width="1.5">
    <polygon points="44,100 66,100 62,90 48,90" fill="#FFD34D"/><polygon points="74,100 96,100 92,90 78,90" fill="#FFD34D"/>
    <polygon points="59,88 81,88 77,78 63,78" fill="#FFE27A"/><circle cx="56" cy="66" r="6" fill="#FFD34D"/><circle cx="86" cy="62" r="5" fill="#FFD34D"/>
  </g>
  <!-- kapı -->
  <g class="ku-kapi">
    <circle cx="70" cy="75" r="47" fill="url(#kuAltin)"/>
    <circle cx="70" cy="75" r="38" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1.5"/>
    <g fill="rgba(0,0,0,.3)"><circle cx="112" cy="75" r="2.6"/><circle cx="28" cy="75" r="2.6"/><circle cx="70" cy="33" r="2.6"/><circle cx="70" cy="117" r="2.6"/><circle cx="99.7" cy="45.3" r="2.6"/><circle cx="40.3" cy="45.3" r="2.6"/><circle cx="99.7" cy="104.7" r="2.6"/><circle cx="40.3" cy="104.7" r="2.6"/></g>
    <g class="ku-teker" stroke="#2B2B2B" stroke-opacity=".6" stroke-width="3" stroke-linecap="round" fill="none">
      <circle cx="70" cy="75" r="16"/><line x1="70" y1="75" x2="70" y2="51"/><line x1="70" y1="75" x2="94" y2="75"/><line x1="70" y1="75" x2="70" y2="99"/><line x1="70" y1="75" x2="46" y2="75"/>
    </g>
  </g>
  <!-- şifre ekranı ve çözümleme -->
  <rect x="132" y="56" width="96" height="34" rx="8" fill="#16234A" stroke="#FFD34D" stroke-width="2"/>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <text x="180" y="80" font-size="20" fill="#FFD34D">482 316</text>
    <text class="ku-p1" x="180" y="108" font-size="9.5" fill="#fff">400 000 + 80 000 +</text>
    <text class="ku-p2" x="180" y="122" font-size="9.5" fill="#fff">2 000 + 300 + 10 + 6</text>
  </g>
</svg>
</div>
`
      },
      {
        name: "Kızak Pisti",
        file: "kizak_pisti.html",
        desc: "Kızağı doğru istasyona kaydır, sayıları en yakın onluğa ve yüzlüğe yuvarla!",
        sinif: "4. Sınıf — Doğal sayıları yuvarlama",
        eklenme: "2026-10-21",
        thumbBg: "linear-gradient(180deg, #CFE9FF, #F4FBFF)",
        customThumb: `
<div class="kizak-pisti-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="150" fill="#DDEFFF"/>
  <circle cx="212" cy="26" r="13" fill="#FFE27A"/>
  <polygon points="0,112 40,62 90,104 150,50 205,100 240,70 240,112" fill="#C9E4FB"/>
  <!-- dağ sırtı: çukurlar istasyon, tepe tam orta -->
  <path d="M0 112 L18 112 Q60 112 74 82 Q88 44 128 44 Q168 44 182 82 Q196 112 210 112 L240 112 L240 150 L0 150 Z" fill="#fff"/>
  <path d="M0 112 L18 112 Q60 112 74 82 Q88 44 128 44 Q168 44 182 82 Q196 112 210 112 L240 112" fill="none" stroke="#9CCBF0" stroke-width="3"/>
  <line x1="128" y1="44" x2="128" y2="112" stroke="#7FA8D6" stroke-width="2" stroke-dasharray="4 4"/>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <text x="128" y="32" font-size="10" fill="#5B7BA6">4.350</text>
    <!-- istasyonlar -->
    <line x1="40" y1="112" x2="40" y2="84" stroke="#5A3A1A" stroke-width="3"/>
    <path d="M40 84 L56 89 L40 94 Z" fill="#9DB3CF"/>
    <rect x="18" y="118" width="44" height="18" rx="6" fill="#fff" stroke="#4D9FFF" stroke-width="2"/>
    <text x="40" y="132" font-size="12" fill="#1E2A44">4.300</text>
    <line x1="200" y1="112" x2="200" y2="84" stroke="#5A3A1A" stroke-width="3"/>
    <path class="kp-bayrak" d="M200 84 L216 89 L200 94 Z" fill="#9DB3CF"/>
    <rect x="178" y="118" width="44" height="18" rx="6" fill="#fff" stroke="#00C9A7" stroke-width="2"/>
    <text x="200" y="132" font-size="12" fill="#1E2A44">4.400</text>
    <text x="120" y="141" font-size="11" fill="#A855F7">4.3<tspan fill="#E0A800">6</tspan>7</text>
  </g>
  <!-- penguen + kızak -->
  <g class="kp-kizak">
    <g transform="scale(.42)">
      <path d="M-46 -2 L40 -2 Q55 -2 52 -15" fill="none" stroke="#5A3A1A" stroke-width="5" stroke-linecap="round"/>
      <rect x="-42" y="-22" width="84" height="12" rx="5" fill="#FF4D4D"/>
      <ellipse cx="-2" cy="-46" rx="22" ry="26" fill="#22304A"/>
      <ellipse cx="3" cy="-42" rx="14" ry="19" fill="#fff"/>
      <circle cx="4" cy="-78" r="16" fill="#22304A"/>
      <ellipse cx="9" cy="-77" rx="10" ry="9" fill="#fff"/>
      <circle cx="6" cy="-79" r="2.5" fill="#22304A"/><circle cx="14" cy="-79" r="2.5" fill="#22304A"/>
      <path d="M18 -75 L29 -72 L18 -69 Z" fill="#FF9F1C"/>
      <rect x="-15" y="-65" width="34" height="8" rx="4" fill="#4D9FFF"/>
    </g>
  </g>
</svg>
</div>
`
      },
      {
        name: "Elde Ekspresi",
        file: "elde_ekspresi.html",
        desc: "Vagonları sütun sütun topla, elde sandığını bir sonraki vagona taşı!",
        sinif: "4. Sınıf — En çok dört basamaklı sayılarla toplama",
        eklenme: "2026-10-22",
        thumbBg: "linear-gradient(180deg, #BFE8FF, #8BD36A)",
        customThumb: `
<div class="elde-ekspresi-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs><pattern id="eeRay" width="12" height="4" patternUnits="userSpaceOnUse"><rect width="6" height="4" fill="#8A5A32"/></pattern></defs>
  <rect width="240" height="150" fill="#BFE8FF"/>
  <circle cx="218" cy="20" r="10" fill="#FFD600"/>
  <path d="M0 120 V96 C40 78 80 76 120 92 S200 106 240 90 V120 Z" fill="#C3EBAE"/>
  <rect y="120" width="240" height="30" fill="#8BD36A"/>
  <rect y="121" width="240" height="3" fill="#8E96A8"/>
  <rect y="124" width="240" height="4" fill="url(#eeRay)"/>
  <!-- işlem tabelası -->
  <rect x="6" y="5" width="112" height="19" rx="6" fill="#2B2D42" stroke="#fff" stroke-width="2"/>
  <!-- lokomotif -->
  <g class="ee-duman"><circle cx="32" cy="64" r="4"/><circle cx="30" cy="62" r="3.5"/></g>
  <rect x="27" y="70" width="10" height="18" fill="#2B2D42"/>
  <rect x="20" y="86" width="38" height="24" rx="7" fill="#E63946"/>
  <circle cx="18" cy="82" r="4" fill="#FFE066" stroke="#B8860B" stroke-width="1.5"/>
  <rect x="52" y="70" width="28" height="40" rx="3" fill="#E63946"/>
  <rect x="49" y="66" width="34" height="6" rx="2" fill="#2B2D42"/>
  <rect x="57" y="76" width="18" height="13" rx="2" fill="#CFEFFF" stroke="#2B2D42" stroke-width="1.5"/>
  <rect x="16" y="108" width="68" height="5" rx="1" fill="#2B2D42"/>
  <circle cx="30" cy="116" r="5" fill="#2B2D42" stroke="#A9AEBB" stroke-width="2"/><circle cx="44" cy="116" r="5" fill="#2B2D42" stroke="#A9AEBB" stroke-width="2"/>
  <circle cx="69" cy="114" r="7" fill="#2B2D42" stroke="#A9AEBB" stroke-width="2"/>
  <!-- vagonlar: binler, yüzler, onlar, birler -->
  <rect x="92" y="30" width="32" height="80" rx="4" fill="#F3E8FF" stroke="#A855F7" stroke-width="2"/>
  <rect x="90" y="26" width="36" height="6" rx="3" fill="#A855F7"/>
  <rect x="101" y="34" width="14" height="12" rx="2" fill="none" stroke="rgba(0,0,0,.2)" stroke-dasharray="2 2"/>
  <circle cx="101" cy="114" r="4" fill="#2B2D42" stroke="#A9AEBB" stroke-width="1.5"/><circle cx="115" cy="114" r="4" fill="#2B2D42" stroke="#A9AEBB" stroke-width="1.5"/>
  <rect x="128" y="30" width="32" height="80" rx="4" fill="#E3EFFF" stroke="#2F86F0" stroke-width="2"/>
  <rect x="126" y="26" width="36" height="6" rx="3" fill="#2F86F0"/>
  <rect x="137" y="34" width="14" height="12" rx="2" fill="none" stroke="rgba(0,0,0,.2)" stroke-dasharray="2 2"/>
  <circle cx="137" cy="114" r="4" fill="#2B2D42" stroke="#A9AEBB" stroke-width="1.5"/><circle cx="151" cy="114" r="4" fill="#2B2D42" stroke="#A9AEBB" stroke-width="1.5"/>
  <rect x="164" y="30" width="32" height="80" rx="4" fill="#D9F7F1" stroke="#00B394" stroke-width="2"/>
  <rect x="162" y="26" width="36" height="6" rx="3" fill="#00B394"/>
  <rect x="173" y="34" width="14" height="12" rx="2" fill="none" stroke="rgba(0,0,0,.2)" stroke-dasharray="2 2"/>
  <circle cx="173" cy="114" r="4" fill="#2B2D42" stroke="#A9AEBB" stroke-width="1.5"/><circle cx="187" cy="114" r="4" fill="#2B2D42" stroke="#A9AEBB" stroke-width="1.5"/>
  <rect x="200" y="30" width="32" height="80" rx="4" fill="#FFE8DE" stroke="#FF6B35" stroke-width="2"/>
  <rect x="198" y="26" width="36" height="6" rx="3" fill="#FF6B35"/>
  <rect x="209" y="34" width="14" height="12" rx="2" fill="none" stroke="rgba(0,0,0,.2)" stroke-dasharray="2 2"/>
  <circle cx="209" cy="114" r="4" fill="#2B2D42" stroke="#A9AEBB" stroke-width="1.5"/><circle cx="223" cy="114" r="4" fill="#2B2D42" stroke="#A9AEBB" stroke-width="1.5"/>
  <line x1="82" y1="89" x2="236" y2="89" stroke="#2B2D42" stroke-width="2"/>
  <g font-family="Nunito, Segoe UI, sans-serif" font-weight="900" text-anchor="middle">
    <text x="62" y="19" font-size="12.5" fill="#FFD600">2 678 + 1 456</text>
    <text x="85" y="84" font-size="15" fill="#2B2D42">+</text>
    <text x="108" y="64" font-size="16" fill="#2B2D42">2</text><text x="108" y="84" font-size="16" fill="#2B2D42">1</text>
    <text class="ee-r4" x="108" y="106" font-size="16" fill="#A855F7">4</text>
    <text x="144" y="64" font-size="16" fill="#2B2D42">6</text><text x="144" y="84" font-size="16" fill="#2B2D42">4</text>
    <text class="ee-r3" x="144" y="106" font-size="16" fill="#2F86F0">1</text>
    <text x="180" y="64" font-size="16" fill="#2B2D42">7</text><text x="180" y="84" font-size="16" fill="#2B2D42">5</text>
    <text class="ee-r2" x="180" y="106" font-size="16" fill="#00B394">3</text>
    <text x="216" y="64" font-size="16" fill="#2B2D42">8</text><text x="216" y="84" font-size="16" fill="#2B2D42">6</text>
    <text class="ee-r1" x="216" y="106" font-size="16" fill="#FF6B35">4</text>
  </g>
  <!-- elde sandığı -->
  <g class="ee-sandik">
    <rect x="-6" y="-6" width="12" height="12" rx="2" fill="#FFD600" stroke="#B8860B" stroke-width="1.5"/>
    <text x="0" y="3.5" font-family="Nunito, Segoe UI, sans-serif" font-weight="900" font-size="9" fill="#6B4A00" text-anchor="middle">1</text>
  </g>
</svg>
</div>
`
      }
    ]
  },
  {
    name: "🔐 4. Sınıf Fen Bilimleri",
    tetik: 'hb',
    color: "#4CAF50",
    iconBg: "linear-gradient(135deg, #4CAF50, #00C9A7)",
    lineColor: "linear-gradient(90deg, #4CAF50, #00C9A7)",
    games: [
      {
        name: "Maden Kâşifi",
        file: "maden_kasifi.html",
        desc: "Türkiye haritasını gez, madenleri kazıp çıkar, nerelerde kullanıldıklarını eşleştir!",
        sinif: "4. Sınıf — Kayaçlar, madenler ve fosiller",
        eklenme: "2026-10-20",
        thumbBg: "linear-gradient(180deg, #9FD6F0, #7D5232)",
        customThumb: `
<div class="maden-kasifi-thumb">
<svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mkAltinG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF1A0"/><stop offset=".5" stop-color="#E8B923"/><stop offset="1" stop-color="#A87A0A"/></linearGradient>
  </defs>
  <!-- gökyüzü, çimen, toprak katmanları -->
  <rect width="240" height="34" fill="#9FD6F0"/>
  <rect y="34" width="240" height="8" fill="#6AA047"/>
  <rect y="42" width="240" height="38" fill="#B07A4A"/>
  <path d="M0 80 Q60 86 120 81 T240 80 V116 Q180 110 120 117 T0 114 Z" fill="#9A6640"/>
  <path d="M0 114 Q60 120 120 117 T240 116 V150 H0 Z" fill="#7D5232"/>
  <g fill="#000" opacity=".12"><ellipse cx="22" cy="60" rx="5" ry="3"/><ellipse cx="200" cy="58" rx="4" ry="2.5"/><ellipse cx="40" cy="132" rx="6" ry="3"/><ellipse cx="218" cy="138" rx="5" ry="3"/><ellipse cx="150" cy="140" rx="4" ry="2"/></g>
  <!-- toprağa gömülü madenler: bor ve bakır -->
  <g transform="translate(18 92) scale(.32)"><path d="M42 86 L42 30 L51 14 L60 30 L60 86 Z" fill="#fff" stroke="#9FB3C8" stroke-width="3"/><path d="M22 84 L20 48 L28 36 L36 46 L36 84 Z" fill="#E8F0F8" stroke="#9FB3C8" stroke-width="3" transform="rotate(-14 28 84)"/><path d="M64 84 L64 44 L72 32 L80 44 L80 84 Z" fill="#E8F0F8" stroke="#9FB3C8" stroke-width="3" transform="rotate(16 72 84)"/></g>
  <g transform="translate(196 100) scale(.3)"><path d="M14 64 L24 36 L48 20 L74 26 L88 50 L82 76 L54 88 L26 82 Z" fill="#D2733A" stroke="#7E3D17" stroke-width="4"/><circle cx="36" cy="60" r="6" fill="#4FA38A"/></g>
  <!-- altının çıktığı ışık -->
  <g class="mk-isik" fill="#FFE27A">
    <path d="M120 92 L108 52 L132 52 Z"/><path d="M120 92 L80 80 L80 104 Z"/><path d="M120 92 L160 80 L160 104 Z"/><path d="M120 92 L108 132 L132 132 Z"/>
  </g>
  <!-- kaya ve çatlakları -->
  <g class="mk-kaya">
    <path d="M86 104 L94 76 L116 64 L142 66 L158 82 L160 106 L146 122 L116 126 L96 120 Z" fill="#8A8378" stroke="#5E584F" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M94 76 L116 64 L142 66 L122 92 Z" fill="#fff" opacity=".15"/>
    <path class="mk-catlak" d="M122 92 L112 80 L116 70 M122 92 L138 98 L146 112 M122 92 L104 104 L98 116" fill="none" stroke="#3A352F" stroke-width="2.5" stroke-linecap="round"/>
  </g>
  <!-- ortaya çıkan altın -->
  <g class="mk-altin">
    <path d="M100 104 L106 90 L118 82 L132 85 L140 98 L137 110 L122 116 L108 113 Z" fill="url(#mkAltinG)" stroke="#A87A0A" stroke-width="2" stroke-linejoin="round"/>
    <path d="M106 90 L118 82 L132 85 L121 98 Z" fill="#fff" opacity=".35"/>
    <path d="M114 94 L116 99 L121 101 L116 103 L114 108 L112 103 L107 101 L112 99 Z" fill="#fff"/>
  </g>
  <!-- kazma -->
  <g class="mk-kazma">
    <path d="M196 112 L158 64" stroke="#8B5A2B" stroke-width="6" stroke-linecap="round"/>
    <path d="M140 72 Q156 50 182 56 Q160 60 152 76 Z" fill="#9AA3AD" stroke="#5F666D" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <!-- Türkiye işareti -->
  <g transform="translate(8 6)"><rect width="36" height="22" rx="4" fill="#E30A17"/><circle cx="14" cy="11" r="6" fill="#fff"/><circle cx="15.8" cy="11" r="4.8" fill="#E30A17"/><path d="M21.6 11 L27 9.2 L23.7 13.8 L23.7 8.2 L27 12.8 Z" fill="#fff"/></g>
</svg>
</div>
`
      }
    ]
  }
];

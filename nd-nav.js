/* Top-nav: expanding dropdowns + mobile burger.
   Uses DIRECT listeners on the buttons (reliable on iOS Safari, which can drop
   document-delegated click events for taps on non-interactive children). */
(function () {
  function closeDrops(except) {
    var open = document.querySelectorAll('.nav-drop.open');
    for (var i = 0; i < open.length; i++) {
      if (open[i] !== except) {
        open[i].classList.remove('open');
        var t = open[i].querySelector('.nav-dtoggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    }
  }
  function closeMenu() {
    var hs = document.querySelectorAll('header.nav.menu-open');
    for (var i = 0; i < hs.length; i++) hs[i].classList.remove('menu-open');
  }
  function init() {
    var burgers = document.querySelectorAll('.nav-burger');
    for (var i = 0; i < burgers.length; i++) {
      (function (b) {
        b.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var hdr = b.closest('header.nav');
          if (!hdr) return;
          var willOpen = !hdr.classList.contains('menu-open');
          hdr.classList.toggle('menu-open', willOpen);
          b.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
          if (!willOpen) closeDrops(null);
        });
      })(burgers[i]);
    }
    var toggles = document.querySelectorAll('.nav-dtoggle');
    for (var j = 0; j < toggles.length; j++) {
      (function (t) {
        t.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var drop = t.closest('.nav-drop');
          var willOpen = !drop.classList.contains('open');
          closeDrops(drop);
          drop.classList.toggle('open', willOpen);
          t.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });
      })(toggles[j]);
    }
    document.addEventListener('click', function (e) {
      var inDmenu = e.target.closest && e.target.closest('.nav-dmenu');
      var inHeader = e.target.closest && e.target.closest('header.nav');
      if (!inDmenu) closeDrops(null);
      if (!inHeader) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.keyCode === 27) { closeDrops(null); closeMenu(); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/* Floating support chatbot launcher (bottom-right) — opens the bot in its own
   first-party window (the hosted bot blocks guest sending inside a cross-origin iframe). */
(function () {
  if (window.__ndChat) return; window.__ndChat = true;
  var CHAT_URL = 'https://novogenia-support-bot.live.chatbot.twoxten.at/chat';
  function build() {
    if (document.querySelector('.ndc-launcher')) return;
    var de = (document.documentElement.lang || 'en').toLowerCase().indexOf('de') === 0;
    var label = de ? 'Frag uns!' : 'Chat with us';
    var frag = document.createElement('div');
    frag.className = 'ndc-launcher';
    frag.innerHTML =
      '<span class="ndc-label">' + label + '</span>' +
      '<button type="button" class="ndc-fab" aria-label="' + label + '">' +
        '<svg class="ndc-ic-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>' +
      '</button>';
    document.body.appendChild(frag);

    var win = null;
    frag.querySelector('.ndc-fab').addEventListener('click', function () {
      // re-focus an already-open chat window instead of spawning a new one
      try { if (win && !win.closed) { win.focus(); return; } } catch (e) {}
      var w = 420, h = 680;
      var sw = (window.screen && window.screen.availWidth) || 1280;
      var sh = (window.screen && window.screen.availHeight) || 800;
      var left = Math.max(0, sw - w - 24);
      var top = Math.max(0, sh - h - 70);
      var features = 'width=' + w + ',height=' + h + ',left=' + left + ',top=' + top + ',resizable=yes,scrollbars=yes';
      win = window.open(CHAT_URL, 'novogeniaSupport', features);
      if (!win) { window.open(CHAT_URL, '_blank'); return; } // popup blocked -> new tab
      try { win.focus(); } catch (e) {}
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();

/* ---- Cookie consent (GDPR / AT) — external media (YouTube, TradingView) load only after consent ---- */
(function () {
  if (window.__ndConsent) return; window.__ndConsent = true;
  var V = 1, NAME = 'nd_consent';
  var de = (document.documentElement.lang || 'en').toLowerCase().indexOf('de') === 0;
  var PRIV = de ? '/de/privacy.html' : '/privacy.html';
  var IMP = de ? '/de/imprint.html' : '/imprint.html';
  var T = de ? {
    title: 'Wir respektieren deine Privatsphäre',
    body: 'Wir verwenden nur technisch notwendige Cookies, damit diese Website funktioniert. Externe Medien — YouTube-Videos und den TradingView-Börsenkurs — laden wir erst mit deiner ausdrücklichen Einwilligung; dabei können Daten an Drittanbieter (auch in die USA) übertragen werden. Du entscheidest frei und kannst deine Auswahl jederzeit ändern.',
    accept: 'Alle akzeptieren', reject: 'Nur notwendige', settings: 'Einstellungen', save: 'Auswahl speichern',
    nec: 'Notwendig', necOn: 'Immer aktiv',
    necD: 'Erforderlich für den Betrieb der Website und das Speichern deiner Cookie-Auswahl. Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).',
    med: 'Externe Medien',
    medD: 'YouTube (Google Ireland Ltd.) und der TradingView-Börsenkurs werden erst nach deiner Zustimmung geladen. Dabei können personenbezogene Daten (z. B. deine IP-Adresse) an die Anbieter — auch in Drittländer wie die USA — übertragen werden. Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
    priv: 'Datenschutz', imp: 'Impressum', reopen: 'Cookie-Einstellungen',
    phT: 'Externer Inhalt blockiert', phB: 'Dieser Inhalt (YouTube / TradingView) wird erst geladen, wenn du „Externe Medien“ zustimmst.', phBtn: 'Akzeptieren & laden'
  } : {
    title: 'We respect your privacy',
    body: 'We only use strictly necessary cookies to make this site work. External media — YouTube videos and the TradingView stock quote — load only with your explicit consent; this may transfer data to third parties (including the USA). The choice is yours and you can change it any time.',
    accept: 'Accept all', reject: 'Necessary only', settings: 'Settings', save: 'Save choices',
    nec: 'Necessary', necOn: 'Always on',
    necD: 'Required to operate the website and to store your cookie choice. Legal basis: legitimate interest (Art. 6(1)(f) GDPR).',
    med: 'External media',
    medD: 'YouTube (Google Ireland Ltd.) and the TradingView stock quote load only after your consent. This may transfer personal data (e.g. your IP address) to these providers, including to third countries such as the USA. Legal basis: consent (Art. 6(1)(a) GDPR).',
    priv: 'Privacy', imp: 'Imprint', reopen: 'Cookie settings',
    phT: 'External content blocked', phB: 'This content (YouTube / TradingView) loads once you accept “External media”.', phBtn: 'Accept & load'
  };
  var root = null;

  function getConsent() {
    try {
      var m = document.cookie.match(/(?:^|;\s*)nd_consent=([^;]+)/);
      var raw = m ? decodeURIComponent(m[1]) : (localStorage.getItem(NAME) || '');
      var o = JSON.parse(raw); return (o && o.v === V) ? o : null;
    } catch (e) { return null; }
  }
  function setConsent(media) {
    var o = { v: V, essential: true, media: !!media, ts: Date.now() };
    var s = encodeURIComponent(JSON.stringify(o));
    document.cookie = 'nd_consent=' + s + ';path=/;max-age=31536000;SameSite=Lax';
    try { localStorage.setItem(NAME, JSON.stringify(o)); } catch (e) {}
    applyConsent(o); if (root) root.classList.remove('ndcc-show');
  }
  function placeholder() {
    var ph = document.createElement('div'); ph.className = 'ndcc-ph';
    ph.innerHTML = '<div class="ndcc-ph-in"><strong>' + T.phT + '</strong><p>' + T.phB + '</p><button type="button" class="ndcc-ph-btn">' + T.phBtn + '</button></div>';
    ph.querySelector('.ndcc-ph-btn').addEventListener('click', function () { setConsent(true); });
    return ph;
  }
  function applyConsent(o) {
    var grant = !!(o && o.media);
    var frames = document.querySelectorAll('iframe[data-consent="media"]');
    for (var i = 0; i < frames.length; i++) {
      var f = frames[i], host = f.parentNode, ph = host.querySelector(':scope > .ndcc-ph');
      if (grant) {
        if (f.getAttribute('data-src')) { f.src = f.getAttribute('data-src'); f.removeAttribute('data-src'); }
        f.style.display = ''; if (ph) ph.remove();
      } else {
        if (f.getAttribute('src')) { f.setAttribute('data-src', f.getAttribute('src')); f.removeAttribute('src'); }
        f.style.display = 'none'; if (!ph) host.insertBefore(placeholder(), f);
      }
    }
    var scripts = document.querySelectorAll('script[type="text/plain"][data-consent="media"]');
    for (var j = 0; j < scripts.length; j++) {
      var sc = scripts[j], cont = sc.closest('.tradingview-widget-container') || sc.parentNode, p2 = cont.querySelector(':scope > .ndcc-ph');
      if (grant) {
        if (!sc.getAttribute('data-loaded')) {
          var real = document.createElement('script');
          if (sc.getAttribute('data-src')) real.src = sc.getAttribute('data-src');
          if (sc.getAttribute('data-async')) real.async = true;
          real.text = sc.textContent; sc.setAttribute('data-loaded', '1');
          sc.parentNode.insertBefore(real, sc.nextSibling);
        }
        if (p2) p2.remove();
      } else if (!p2) { cont.insertBefore(placeholder(), cont.firstChild); }
    }
  }
  function build(openPanel) {
    if (root) { root.classList.add('ndcc-show'); if (openPanel) root.classList.add('ndcc-open'); return; }
    root = document.createElement('div'); root.className = 'ndcc' + (openPanel ? ' ndcc-open' : '');
    root.innerHTML =
      '<div class="ndcc-box" role="dialog" aria-label="Cookies" aria-live="polite">' +
        '<h2 class="ndcc-t">' + T.title + '</h2>' +
        '<p class="ndcc-b">' + T.body + ' <a href="' + PRIV + '">' + T.priv + '</a> · <a href="' + IMP + '">' + T.imp + '</a></p>' +
        '<div class="ndcc-cats">' +
          '<div class="ndcc-cat"><div class="ndcc-cat-h"><b>' + T.nec + '</b><em>' + T.necOn + '</em></div><p>' + T.necD + '</p></div>' +
          '<label class="ndcc-cat"><div class="ndcc-cat-h"><b>' + T.med + '</b><input type="checkbox" class="ndcc-media"></div><p>' + T.medD + '</p></label>' +
        '</div>' +
        '<div class="ndcc-actions">' +
          '<button type="button" class="ndcc-btn ndcc-reject">' + T.reject + '</button>' +
          '<button type="button" class="ndcc-btn ndcc-save">' + T.save + '</button>' +
          '<button type="button" class="ndcc-btn ndcc-accept">' + T.accept + '</button>' +
        '</div>' +
        '<button type="button" class="ndcc-cog">' + T.settings + '</button>' +
      '</div>';
    document.body.appendChild(root);
    var c = getConsent(); if (c) root.querySelector('.ndcc-media').checked = c.media;
    root.querySelector('.ndcc-accept').addEventListener('click', function () { setConsent(true); });
    root.querySelector('.ndcc-reject').addEventListener('click', function () { setConsent(false); });
    root.querySelector('.ndcc-save').addEventListener('click', function () { setConsent(root.querySelector('.ndcc-media').checked); });
    root.querySelector('.ndcc-cog').addEventListener('click', function () { root.classList.toggle('ndcc-open'); });
    setTimeout(function () { root.classList.add('ndcc-show'); }, 30);
  }
  function addReopen() {
    var navs = document.querySelectorAll('.foot .fnav');
    for (var i = 0; i < navs.length; i++) {
      if (navs[i].querySelector('.ndcc-reopen')) continue;
      var a = document.createElement('a'); a.href = '#'; a.className = 'ndcc-reopen'; a.textContent = T.reopen;
      a.addEventListener('click', function (e) { e.preventDefault(); build(true); });
      navs[i].appendChild(a);
    }
  }
  function start() { var c = getConsent(); applyConsent(c); addReopen(); if (!c) build(false); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

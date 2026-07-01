/* Novogenia — privacy-first analytics loader.
   ACTIVATE: replace GA4_ID with your real GA4 Measurement ID ("G-XXXXXXXXXX").
   GA4 loads ONLY after the visitor grants consent via the nd_consent cookie
   (GDPR / AT compliant — no tracking without opt-in). IP anonymisation is on. */
(function () {
  var GA4_ID = 'G-XXXXXXXXXX'; // <-- put the real Measurement ID here to go live
  if (!GA4_ID || GA4_ID.indexOf('G-XXXX') === 0) return; // not configured -> no-op

  function hasConsent() {
    var m = document.cookie.match(/(?:^|;\s*)nd_consent=([^;]+)/);
    if (!m) return false;
    var v = decodeURIComponent(m[1]).toLowerCase();
    return v === 'true' || v === 'all' || /stat|analy/.test(v);
  }
  function load() {
    if (window.__ngGA) return; window.__ngGA = 1;
    var s = document.createElement('script'); s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA4_ID, { anonymize_ip: true });
  }
  if (hasConsent()) load();
  // pick up a later "Accept" click from the consent banner
  document.addEventListener('nd:consent', function () { if (hasConsent()) load(); });
  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest && e.target.closest('.ndcc-accept,.ndcc-btn')) {
      setTimeout(function () { if (hasConsent()) load(); }, 300);
    }
  });
})();

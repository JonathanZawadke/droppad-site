// German browsers start in German, everyone else in English; a manual choice is remembered.
(function () {
  var saved = null;
  try { saved = localStorage.getItem('droppad-lang'); } catch (e) {}
  var lang = saved || ((navigator.language || 'en').toLowerCase().indexOf('de') === 0 ? 'de' : 'en');
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-switch button').forEach(function (button) {
      button.addEventListener('click', function () {
        var chosen = button.getAttribute('data-set');
        document.documentElement.setAttribute('data-lang', chosen);
        document.documentElement.setAttribute('lang', chosen);
        try { localStorage.setItem('droppad-lang', chosen); } catch (e) {}
      });
    });
  });
})();

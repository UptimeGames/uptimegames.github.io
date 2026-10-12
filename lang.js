// Choix de la langue : ?lang=fr|en|es, sinon la langue du navigateur, sinon l'anglais
(function () {
  var langs = ['fr', 'en', 'es'];
  var q = (location.search.match(/lang=(\w\w)/) || [])[1];
  var nav = (navigator.language || 'en').slice(0, 2);
  var cur = langs.indexOf(q) >= 0 ? q : langs.indexOf(nav) >= 0 ? nav : 'en';
  function show(l) {
    cur = l;
    document.documentElement.lang = l;
    document.querySelectorAll('section[lang]').forEach(function (s) { s.classList.toggle('on', s.lang === l); });
    document.querySelectorAll('.langs button').forEach(function (b) { b.classList.toggle('on', b.dataset.l === l); });
    document.querySelectorAll('[data-href]').forEach(function (a) { a.href = a.dataset.href + '?lang=' + l; });
  }
  document.querySelectorAll('.langs button').forEach(function (b) { b.addEventListener('click', function () { show(b.dataset.l); }); });
  show(cur);
})();

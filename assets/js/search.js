// =====================================================================
//  Sidebar search. Runs entirely in the visitor's browser:
//  1. On first keystroke, download /search.json (built by Jekyll).
//  2. On every keystroke, keep the posts whose title or text contain
//     ALL the typed words (case-insensitive), and list them as links.
// =====================================================================
(function () {
  "use strict";

  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  if (!input || !list) return;           // page has no search box → do nothing

  var posts = null;                      // filled once search.json arrives
  var loading = null;                    // the pending download, so we fetch only once

  // Download the index once; later calls reuse the same Promise.
  function loadIndex() {
    if (!loading) {
      loading = fetch(input.dataset.index)              // URL already includes baseurl
        .then(function (r) { return r.json(); })
        .then(function (data) {
          // Jekyll's text still contains HTML codes like &rsquo; (’). Parsing it
          // as HTML and reading textContent turns them back into real characters.
          var parser = new DOMParser();
          data.forEach(function (p) {
            p.text = parser.parseFromString(p.text || "", "text/html").documentElement.textContent;
          });
          posts = data;
        })
        .catch(function () { posts = []; });           // offline etc.: search just finds nothing
    }
    return loading;
  }

  // Lower-case, strip accents so "kávé" matches "kave" (handy for Hungarian),
  // and turn curly apostrophes into straight ones so "it's" matches "it’s".
  function normalize(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[‘’]/g, "'");
  }

  // Build one result: <li><a href="…">title</a><span>date</span></li>.
  // textContent (not innerHTML) so post text can never inject HTML.
  function resultItem(p) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = p.url;
    a.textContent = (p.chapter ? p.chapter + ". " : "") + p.title;
    var d = document.createElement("span");
    d.className = "search__date";
    d.textContent = p.date;
    li.appendChild(a);
    li.appendChild(d);
    return li;
  }

  function render() {
    var words = normalize(input.value).split(/\s+/).filter(Boolean);
    list.innerHTML = "";                                   // clear previous results
    if (!words.length || !posts) return;                   // empty box → show nothing

    var hits = posts.filter(function (p) {
      var hay = normalize(p.title + " " + p.text);
      return words.every(function (w) { return hay.indexOf(w) !== -1; });
    });

    if (!hits.length) {
      var none = document.createElement("li");
      none.className = "search__none";
      none.textContent = "nothing yet… maybe in a future chapter.";
      list.appendChild(none);
      return;
    }
    hits.slice(0, 8).forEach(function (p) { list.appendChild(resultItem(p)); });
  }

  input.addEventListener("input", function () { loadIndex().then(render); });
})();

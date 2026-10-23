// Where each printed QR code sends people.
// To change one: edit the address, commit and push. Phones pick it up within about 10 minutes.
// Leave an address empty ('') to show the "Coming soon" page instead.
var DESTINATIONS = {
  play: '',     // the game, e.g. 'https://arcade.example.com/'
  scores: '',   // the leaderboard, e.g. 'https://arcade.example.com/scores/'
};

// Addresses without https:// are relative to this file, so they work from any page.
var LINKS_BASE = document.currentScript.src;

// Forwards straight away, keeping any tag from the QR code (e.g. ?src=poster-lobby) so scans can be counted.
// With no address yet, the page shows "Coming soon" and checks again every minute, so anyone who scanned
// early is moved on automatically as soon as the address is set.
function forward(name) {
  var dest = DESTINATIONS[name];
  if (!dest) { watch(name); return; }
  var url = new URL(dest, LINKS_BASE);
  new URLSearchParams(location.search).forEach(function (value, key) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });
  location.replace(url.href);
}

function watch(name) {
  if (window.linksWatching) return;
  window.linksWatching = true;
  setInterval(function () {
    var s = document.createElement('script');
    s.src = LINKS_BASE.split('?')[0] + '?t=' + Date.now(); // skip the cached copy
    s.onload = function () { s.remove(); forward(name); };
    s.onerror = function () { s.remove(); };
    document.head.appendChild(s);
  }, 60000);
}

// Where each printed QR code sends people.
// To change one: edit the address, commit and push. Phones pick it up within about 10 minutes.
// Leave an address empty ('') to show the "Coming soon" page instead.
var DESTINATIONS = {
  play: 'demo/?from=play',      // demo only: replace with the real game address when it's hosted
  scores: '',                   // not set yet: shows "Coming soon"
};

// Addresses without https:// are relative to this file, so they work from any page.
var LINKS_BASE = document.currentScript.src;

// Forwards straight away, keeping any tag from the QR code (e.g. ?src=poster-lobby) so scans can be counted.
function forward(name) {
  var dest = DESTINATIONS[name];
  if (!dest) return;
  var url = new URL(dest, LINKS_BASE);
  new URLSearchParams(location.search).forEach(function (value, key) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });
  location.replace(url.href);
}

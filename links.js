// Where each printed QR code sends people.
// To change one: edit the address, commit and push. Phones pick it up within about 10 minutes.
// Leave an address empty ('') to show the "Coming soon" page instead.
var DESTINATIONS = {
  play: '../demo/?from=play',   // demo only: replace with the real game address when it's hosted
  scores: '',                   // not set yet: shows "Coming soon"
};

// Forwards straight away, keeping any tag from the QR code (e.g. ?src=poster-lobby) so scans can be counted.
function forward(name) {
  var dest = DESTINATIONS[name];
  if (!dest) return;
  var url = new URL(dest, location.href);
  new URLSearchParams(location.search).forEach(function (value, key) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });
  location.replace(url.href);
}

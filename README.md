# Arcade links

Short, permanent links for the printed QR codes. Each link forwards to wherever the arcade is hosted, so the posters never need reprinting.

| Link | QR code for | Goes to |
|---|---|---|
| `/play/` | Playing the games | set in `links.js` |
| `/scores/` | The leaderboard | set in `links.js` |

## Changing where a link goes

1. Open `links.js` and change the address next to `play` or `scores`. Use the full address, e.g. `'https://arcade.example.com/'`.
2. Commit and push. GitHub Pages updates within about 10 minutes.

Leave an address empty (`''`) to show the "Coming soon" page instead.

## Counting scans

Add a tag to the address each poster's QR code encodes, e.g. `/play/?src=poster-lobby`. The tag is passed on to the destination, so the game (or its analytics) can tell which poster people scanned.

This repo is public, so it holds only these redirect pages: no game code and no company content.

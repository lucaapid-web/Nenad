/**
 * Netlify (und andere Hoster) laden Ordner namens `node_modules` nicht hoch.
 * Expo legt dort aber die Icon-Schriften ab → Icons fehlen online.
 * Dieses Skript benennt den Ordner um und passt die Pfade im Build an.
 */
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const from = path.join(dist, 'assets', 'node_modules');
const to = path.join(dist, 'assets', 'vendor');

if (fs.existsSync(from)) {
  fs.rmSync(to, { recursive: true, force: true });
  fs.renameSync(from, to);
}

let changed = 0;
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(js|html|json|css)$/.test(entry.name)) {
      const src = fs.readFileSync(p, 'utf8');
      const out = src.split('/assets/node_modules/').join('/assets/vendor/');
      if (out !== src) {
        fs.writeFileSync(p, out);
        changed++;
      }
    }
  }
})(dist);

console.log(`fix-web-export: assets/node_modules → assets/vendor (${changed} Dateien angepasst)`);

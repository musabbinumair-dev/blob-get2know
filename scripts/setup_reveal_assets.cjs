const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { PNG } = require('pngjs');

const rootDir = path.resolve(__dirname, '..');
const zipPath = path.join(rootDir, 'ResultPageDecorations-clean.zip');
const revealDir = path.join(rootDir, 'public/assets/reveal');

fs.mkdirSync(revealDir, { recursive: true });

if (fs.existsSync(zipPath)) {
  try {
    execSync(`unzip -o "${zipPath}" -d "${revealDir}"`, { stdio: 'ignore' });
  } catch (e) {
    console.warn('unzip warning:', e.message);
  }
}

const nestedDir = path.join(revealDir, 'reveal');
if (fs.existsSync(nestedDir)) {
  for (const f of fs.readdirSync(nestedDir)) {
    fs.renameSync(path.join(nestedDir, f), path.join(revealDir, f));
  }
  fs.rmdirSync(nestedDir);
}

// Alpha-trim avatar-1.png and avatar-4.png so their visible bounds match the 50x53 stage spec
for (const name of ['avatar-1.png', 'avatar-4.png']) {
  const filePath = path.join(rootDir, 'public/assets/avatars', name);
  if (!fs.existsSync(filePath)) continue;
  const src = PNG.sync.read(fs.readFileSync(filePath));
  if (src.width < 1000) continue; // already trimmed
  let minX = src.width, maxX = 0, minY = src.height, maxY = 0;
  for (let y = 0; y < src.height; y++) {
    for (let x = 0; x < src.width; x++) {
      if (src.data[(y * src.width + x) * 4 + 3] > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX > minX && maxY > minY) {
    const w = maxX - minX + 1;
    const h = maxY - minY + 1;
    const dst = new PNG({ width: w, height: h });
    PNG.bitblt(src, dst, minX, minY, w, h, 0, 0);
    fs.writeFileSync(filePath, PNG.sync.write(dst));
  }
}

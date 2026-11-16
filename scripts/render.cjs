// Renderiza cada .slide de um carrossel.html em PNG 1080x1350.
// Uso: node scripts/render.cjs saidas/<pasta>/carrossel.html
// Precisa do Playwright: npm i playwright && npx playwright install chromium
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const file = process.argv[2];
  if (!file) { console.error('Uso: node scripts/render.cjs <caminho/carrossel.html>'); process.exit(1); }
  const abs = path.resolve(file);
  const outDir = path.dirname(abs);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1500 } });
  await page.goto('file://' + abs);
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({ content: '.slide{zoom:1!important}.barra{display:none!important}' });
  await page.waitForTimeout(600);
  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const out = path.join(outDir, 'slide-' + String(i + 1).padStart(2, '0') + '.png');
    await slides[i].screenshot({ path: out });
  }
  console.log(slides.length + ' PNGs salvos em ' + outDir);
  await browser.close();
})();

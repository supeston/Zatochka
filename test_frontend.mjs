import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Try localhost:4173 which is the default preview port
  await page.goto('http://localhost:4173');

  // Let animations settle
  await page.waitForTimeout(1000);

  // Verify UI and screenshot
  await page.screenshot({ path: 'full-page.png', fullPage: true });

  await browser.close();
})();

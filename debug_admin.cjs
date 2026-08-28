const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  const logs = [];
  page.on('console', (msg) => logs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', (err) => logs.push(`[PAGEERROR] ${err.message}`));
  page.on('requestfailed', (req) => logs.push(`[REQFAIL] ${req.url()} ${req.failure()?.errorText}`));

  try {
    await page.goto('https://www.vandiza.com/admin', { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (e) {
    logs.push(`[GOTO ERROR] ${e.message}`);
  }

  await new Promise((r) => setTimeout(r, 5000));

  const bodyHtml = await page.evaluate(() => document.body.innerHTML.slice(0, 500));
  const bodyText = await page.evaluate(() => document.body.innerText.slice(0, 300));

  console.log('=== CONSOLE LOGS ===');
  console.log(logs.join('\n'));
  console.log('\n=== BODY INNER HTML (first 500) ===');
  console.log(bodyHtml);
  console.log('\n=== BODY INNER TEXT (first 300) ===');
  console.log(bodyText);

  await browser.close();
})();

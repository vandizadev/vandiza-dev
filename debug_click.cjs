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
  page.on('response', (res) => { if (res.url().includes('/api/auth')) logs.push(`[API AUTH] ${res.status()} ${res.url()}`); });

  await page.goto('https://www.vandiza.com/admin', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 3000));

  // Coba klik button "Login with GitHub"
  let clickResult = 'button not found';
  try {
    const clicked = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button, a'));
      const btn = btns.find((b) => /login with github/i.test(b.textContent || ''));
      if (btn) { btn.click(); return true; }
      return false;
    });
    clickResult = clicked ? 'clicked' : 'button not found';
  } catch (e) {
    clickResult = 'click error: ' + e.message;
  }

  await new Promise((r) => setTimeout(r, 3000));
  const url = page.url();
  const bodyText = await page.evaluate(() => document.body.innerText.slice(0, 200));

  console.log('=== CLICK RESULT ===', clickResult);
  console.log('=== URL AFTER CLICK ===', url);
  console.log('=== BODY TEXT ===', bodyText);
  console.log('=== LOGS ===');
  console.log(logs.join('\n'));

  await browser.close();
})();

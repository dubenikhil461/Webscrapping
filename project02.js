import puppeteer from 'puppeteer';

(async () => {
	const browser = await puppeteer.launch({ headless: 'new' });
	const page = await browser.newPage();

	await page.goto('https://books.toscrape.com/', { waitUntil: 'domcontentloaded' });

	// Optional: Set viewport size
	await page.setViewport({ width: 1280, height: 800 });

	// Take screenshot and save
	await page.screenshot({ path: 'books-page.png', fullPage: true });

	await browser.close();
	console.log('📸 Screenshot saved as books-page.png');
})();
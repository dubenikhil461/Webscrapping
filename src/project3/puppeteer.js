import puppeteer from "puppeteer";
import { setTimeout } from "node:timers/promises"
import expect from 'expect.js'
describe("describe", () => {

    let browser;
    let page;

    beforeEach(async function () {
        this.timeout(20000); // Increase Mocha timeout to 20 seconds
        browser = await puppeteer.launch({
            headless: false,
            userDataDir: "/test",
            timeout: 15000,
            devtools: false,
        });
        page = await browser.newPage();
    });
    afterEach(async function () {
        await page.screenshot({ path: 'example.png' })
        await browser.close();
    });

    it.skip("test1", async () => {
        await page.goto("https://example.com/")
        await page.setViewport({ width: 1280, height: 1280 })
        console.log(await page.title())
        console.log(await browser.version())
        console.log(await page.url())
        expect(await page.title()).to.contain('Example Domain1')
    });
    it.only("test2", async () => {
        await page.goto("https://quotes.toscrape.com/login")
        await page.waitForSelector("form")
        await page.type("#username", "nikhil", { delay: 100 })
        await page.type("#password", "123456")
        await page.click("input[type='submit']")
    })
})
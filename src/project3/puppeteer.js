import puppeteer from "puppeteer";
import { setTimeout } from "node:timers/promises"
import expect from 'expect.js'
describe("describe", () => {

    let browser;
    let page;

    beforeEach(async function () {
        browser = await puppeteer.launch({
            headless: false,
            userDataDir: "/test",
            timeout: 10000,
            devtools: false, // true for debbuging
        });
        page = await browser.newPage();
    });
    afterEach(async function () {
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
    it("test2", async () => {
        await page.goto("https://quotes.toscrape.com/login")
        await page.waitForSelector("form")
        await page.type("#username", "nikhil", { delay: 100 })
        await page.type("#password", "123456")
        await page.click("input[type='submit']")
        await page.waitForSelector(".alert.alert-success")
        const url =await page.url()
        await page.goto(url)
        await page.screenshot({ path: 'example.png', fullPage: true })
    })
})
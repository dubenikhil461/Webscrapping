import puppeteer from "puppeteer";
import {setTimeout} from "node:timers/promises"
describe("describe", () => {
    it("test", async function () {
        this.timeout(20000); // Increase Mocha timeout to 20 seconds
        const browser = await puppeteer.launch({
            headless: false,
            userDataDir: "/test",
            timeout: 15000
        })
        const page = await browser.newPage()
        await page.goto("https://example.com/")
        await page.setViewport({ width: 1280, height: 1280 })
        await setTimeout(3000)
        // await page.reload()
        // await page.goForward()
        // await page.goBack()
        await page.screenshot({path : 'example.png'})
        console.log(await page.title())
        console.log(await browser.version())
        console.log(await page.url())
        await browser.close()
    })
})
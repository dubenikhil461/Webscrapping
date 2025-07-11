const puppeteer = require('puppeteer');
const {toMatchImageSnapshot} = require('jest-image-snapshot');
expect.extend({toMatchImageSnapshot});
describe('jest snapshot matching',()=>{
    let browser,page;
    beforeAll(async()=>{
        browser=await puppeteer.launch({headless:true});
        page=await browser.newPage();
    });
    afterAll(async()=>{
        await browser.close();
    });

    it.only('visual test',async()=>{
        await page.goto('https://www.google.com');
        const image = await page.screenshot({path:'google.png'});
        expect(image).toMatchImageSnapshot({
            failureThreshold:500,
            failureThresholdType:'pixel',
        });
    });
});
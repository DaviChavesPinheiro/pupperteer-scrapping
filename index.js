const puppeteer = require('puppeteer');



(async () => {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ],
        // headless: false
    });
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36")
    await page.goto('https://mangayabu.com/manga/vagabond');
    console.log("start")
    // await page.waitFor('.manga-chapters h2')
    console.log(await page.content())
    // const chapters = await page.evaluate(() => {
       
    //     return document.querySelector(".manga-chapters h2").textContent
    // });

    // console.log('chapters:', chapters);

    await browser.close();
})();
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
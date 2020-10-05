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

    await page.goto('https://charlotte-services.herokuapp.com/mangas');

    const chapters = await page.evaluate(() => {
        const info = document.querySelector("pre").textContent
        // console.log(document.querySelector("pre"))
        return info
    });

    console.log('chapters:', chapters);

    await browser.close();
})();
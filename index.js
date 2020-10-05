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
    await page.goto('https://manganero.site/#/manga/642');
    await page.waitFor('.sc-jrsJCI.sc-iqAbSa.dZkMxf.cYCoKy p')

    const chapters = await page.evaluate(() => {
        const info = document.querySelector(".sc-jrsJCI.sc-iqAbSa.dZkMxf.cYCoKy p").textContent
        // console.log(document.querySelector("pre"))
        console.log(info)
        return info
    });

    console.log('chapters:', chapters);

    await browser.close();
})();
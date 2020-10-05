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
    await page.waitFor('.manga-chapters')

    const chapters = await page.evaluate(() => {
        const chaptersElements = document.querySelectorAll(".single-chapter a")
        const chapters = []
        chaptersElements.forEach(chapterElement => {
            chapters.push({title: chapterElement.textContent, url: chapterElement.href})
        })
        return chapters.reverse()
    });

    console.log('chapters:', chapters);

    await browser.close();
})();
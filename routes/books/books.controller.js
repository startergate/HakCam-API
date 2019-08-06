const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true, 
        timeout:0,
        defaultViewport: null
    });
    const page = await browser.newPage();
 
    await page.goto('http://book.gen.go.kr/r/reading/search/schoolCodeSetting.jsp?schoolCode=2353', {timeout:0});
    await page.type('#searchCon2', 'C#');       // "C#"쪽을 다른 변수이름으로 바꿀날이 오긴 할까
    await page.click('[class=searchBtn]');
    await page.waitFor('.result');
 
    const result = await page.$$('.result tbody tr');
    for (let item of result) {
        let title = await item.$eval('a', node => node.innerText)
        /*let htmlw = await item.$eval('a', node => node.outerHTML)
        let strArray = htmlw.split("'");
        htmlw = 'http://book.gen.go.kr/r/reading/search/schoolBookDetail.jsp?controlNo='+strArray[1];*/
        console.log(title/*, htmlw*/);
    }
 
    await browser.close();
})();
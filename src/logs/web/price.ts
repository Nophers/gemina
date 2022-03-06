import puppeteer from "puppeteer";
import cheerio from "cheerio";

(async () => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage();
  await page.goto("https://www.amazon.com/-/de/dp/B09JFFG8D7/ref=sr_1_4?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=QMYYSJT5LQLO&keywords=iPhone+13+pro&qid=1642615675&sprefix=iphone+13+pr%2Caps%2C187&sr=8-4")

  await page.screenshot({ path: "image.png" })

  const pageData = await page.evaluate(() => {
      return {
          html: document.documentElement.innerHTML,
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
      };
  });

  const $ = cheerio.load(pageData.html);

  const element = $("#variable-name-with-price")
  console.log(element.text());
  
  await browser.close()
})();
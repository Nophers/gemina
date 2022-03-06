import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage();
  await page.goto("https://cody-bot.xyz")

  await page.screenshot({ path: "image.png" })

  const html = await page.evaluate(() => {
      return {
          html: document.documentElement.innerHTML,
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
      };
  });

  console.log(html)
  await browser.close()
})();
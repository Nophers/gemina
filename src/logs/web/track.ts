import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch()

  /*
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 500,
      height: 900,
    },
  })
  */

  // Open a new browser window, and navigate to the url. 
  const page = await browser.newPage();
  await page.goto("https://sex.com")

  // Screenshot that n?G@
  await page.screenshot({ path: "image.png" })

  await browser.close()
})();
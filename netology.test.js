let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

test("Main page content'", async () => {
  await page.goto("https://netology.ru/", {
    waitUntil: "load",
    timeout: 54321,
  });
  const direction =
    "#directions > div > div.src-reallyShared-components-core-Heading--heading--PkavA.src-reallyShared-components-core-Heading--weight-600--U8Af_.src-Landings-pages-Main-components-DirectionCards--title--Wca82";
  await page.waitForSelector(direction, { visible: true });
  const actual = await page.$eval(direction, (link) => link.textContent);
  expect(actual).toContain("Направления обучения");
}, 60000);

test("The first link attribute", async () => {
  await page.goto("https://netology.ru/degree", {
    waitUntil: "load",
    timeout: 54321,
  });
  const actual = await page.$eval("a", (link) => link.getAttribute("href"));
  expect(actual).toEqual("#course");
}, 60000);

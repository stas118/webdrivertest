const { remote } = require('webdriverio');
const assert = require('assert');

describe('Webdriver.io', function() {
  let browser;
    this.timeout(20000);

  before(async () => {
    browser = await remote({
      loglevel: 'error',
      capabilities: {
        browserName: 'chrome'
      }
    });
  });

  beforeEach(async () => {
    await browser.url('https://webdriver.io');
  });

  after(async () => {
    await browser.deleteSession();
  });

  it('should display the search bar', async () => {
    const searchBar = await browser.$('.DocSearch-Button-Placeholder');

    assert(await searchBar.isDisplayed());
  });

  it('should search for text and display search results', async () => {
    const searchBar = await browser.$('.DocSearch-Button-Placeholder');
    await searchBar.click();

    const searchInput = await browser.$('.DocSearch-Input');
    await searchInput.setValue('getting started');
    await browser.pause(3000)

    const searchResults = await browser.$$('.DocSearch-Hit');

    assert(searchResults.length > 0);
  });

  it("Test why webdriver.io", async () =>  {
    const button = await browser.$("#docusaurus_skipToContent_fallback > header > div > div.buttons_pzbO > a:nth-child(2)");
    await button.click();

    const header = browser.$ ('header > h1')
    await header.waitForDisplayed()

    assert(await header.getText() === "Why Webdriver.IO?")

  it.only("Test wetting Started.io", async () =>  {
    const button = await browser.$("#docusaurus_skipToContent_fallback > header > div > div.buttons_pzbO > a:nth-child(1)");
    await button.click();

    const header = browser.$ ('header > h1')
    await header.waitForDisplayed()

    assert(await header.getText() === "Getting Started")

      })
     });
  });

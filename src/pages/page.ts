import { WebDriver, IWebElement, By, until } from 'selenium-webdriver';

export class Page {
  private _driver: WebDriver;
  private _url: string;

  constructor(driver: WebDriver, url: string) {
    this._driver = driver;
    this._url = url;
  }

  public getDriver(): WebDriver {
    return this._driver;
  }

  public openPage() {
    this._driver.get(this._url);
  }

  public getElementCss(locator: string): IWebElement {
    this.getDriver().findElement(By.css(locator));
  }

  public waitToLocateIWE(locator: string): any {
    return this._driver.wait(until.elementLocated(By.css(locator)), 2000);
  }
}



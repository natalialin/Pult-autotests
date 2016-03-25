import { Builder, WebDriver, By, IWebElement } from 'selenium-webdriver';

export function getDriver(): WebDriver {
  return new Builder()
      .withCapabilities({ browserName: 'firefox' })
      .build();
}
export function getElementByCss(driver: WebDriver, locator: string): IWebElement {
     return driver.findElement(By.css(locator));
 }


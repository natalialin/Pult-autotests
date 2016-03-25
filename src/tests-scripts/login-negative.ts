import { Builder, By, until, IWebElement, WebDriver } from 'selenium-webdriver';
import { page } from './../login/page-elements';


export class LoginNegative {
    public _driver: WebDriver;
    constructor(driver: WebDriver) {
        this._driver = driver;
    }
    public loginNegative() {
        let self = this;
        return () => {
            // self._driver.get(page.URL);
            self._driver.findElement(By.css(page.LOGIN)).sendKeys('wronglogin@test.test');
            self._driver.findElement(By.css(page.PASS)).sendKeys('159236');
            self._driver.findElement(By.css(page.SUBMIT)).click();
            self._driver.wait(until.elementLocated(By.css(page.ERROR)));
            self._driver.quit();
        };
    }
    //
    //  private getDriver(): WebDriver {
    //     return new Builder()
    //          .withCapabilities({ browserName: 'firefox' })
    //          .build()
    //  }
    //
    // private getElementByCss(driver: WebDriver, locator: string): IWebElement {
    //     return driver.findElement(By.css(locator));
    // }  
    //    
}


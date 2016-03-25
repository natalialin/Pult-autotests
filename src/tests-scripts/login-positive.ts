import { By, until, WebDriver } from 'selenium-webdriver';
import { LoginPage } from '../pages/login-page';
import { Page } from '../pages/page';
import {SideMenu} from '../pages/side-menu';
import { getElementByCss } from '../util';



export class Login {
  public _driver: WebDriver;

  constructor(driver: WebDriver) {
    this._driver = driver;
  }

  public loginPositive(email, pass, callback) {
    let pageLogin = new LoginPage(this._driver);
    let page = new Page();
    let pageSideMenu = new SideMenu();

    console.log('start test');
    pageLogin.openPage();
    // this._driver.findElement(By.css(page.LOGIN)).sendKeys(email);
    pageLogin.getLogin().sendKeys(email);
    pageLogin.getPass().sendKeys(pass);
    pageLogin.getSubmit().click();
    pageLogin.waitToLocateIWE();
    page.waitToLocateIWE( pageSideMenu._settingsBtn);
    page.getElementByCss(pageSideMenu._settingsBtn).click();
    pageLogin.getElementCss(
        By.css('body > div:nth-child(4) > div > div > div > ' +
            'div:nth-child(3) > div:nth-child(5) > button')).click();
    // page.waitToLocateIWE()
    // let loginLocator = page.waitToLocateIWE(pageLogin._login);

    loginLocator.then(() => {
      callback();
    });
    // this._driver.quit()
  }
}






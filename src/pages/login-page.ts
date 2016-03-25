import { WebDriver, IWebElement, By } from 'selenium-webdriver';
import { Page } from './page';
import { urls } from './urls';

export class LoginPage extends Page {.
  public _login: string = '#email';
  private _password: string = '#pass';
  private _submit: string = '#app > section > form > div.style__buttons___1Wt2d > button';
  private _error: string = '#app > section > form > div.style__hint___1-s2Q';
  private _resetPass: string = '#app > section > form > div.style__buttons___1Wt2d > a';

  constructor(driver: WebDriver) {
    super(driver, urls.GoToUrl);
  }

  public getLogin(): IWebElement {
    return this.getElementCss(this._login);
  }
  public getPass(): IWebElement {
    return this.getElementCss(this._password);
  }
  public getSubmit(): IWebElement {
    return this.getElementCss(this._submit);
  }
  public getError(): IWebElement {
    return this.getElementCss(this._error);
  }
  public getResetPass(): IWebElement {
    return this.getElementCss(this._resetPass);
  }
}


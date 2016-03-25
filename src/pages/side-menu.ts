import { WebDriver, IWebElement } from 'selenium-webdriver';
import { Page } from './page';
import {urls} from './urls';

export class SideMenu extends Page {
  public _settingsBtn: string = '#app > div > aside > button.style__btn___2KkvM > svg';
  private _operatorAva: string = '#app > div > aside > button.style__statusOnline___2L8eY.style__status___JGHTO > img';
  private _operatorName: string = 'body > div:nth-child(4) > div > div > div > div:nth-child(1) > div';
  private _statusMenu: string = 'body > div:nth-child(4) > div > div > div';
  private _statusOnBtn: string = 'body > div:nth-child(4) > div > div > div > div:nth-child(3) > div:nth-child(1) > button';
  private _statusOffBtn: string = 'body > div:nth-child(4) > div > div > div > div:nth-child(3) > div:nth-child(3) > button';
  private _statusOutBtn: string = 'body > div:nth-child(4) > div > div > div > div:nth-child(3) > div:nth-child(2) > button';
  private _logOutBtn: string = 'body > div:nth-child(4) > div > div > div > div:nth-child(3) > div:nth-child(5) > button';

  constructor(driver: WebDriver) {
    super(driver, urls.GoToUrl);
  }

  public getSettingsBtn(): IWebElement {
    return this.getElementCss(this._settingsBtn);
  }

  public getOperatorAva(): IWebElement {
    return this.getElementCss(this._operatorAva);
  }

  public getOperatorName(): IWebElement {
    return this.getElementCss(this._operatorName);
  }

  public getSettingsBtn(): IWebElement {
    return this.getElementCss(this._settingsBtn);
  }

  public getStatusMenu(): IWebElement {
    return this.getElementCss(this._statusMenu);
  }

  public getStatusOnBtn(): IWebElement {
    return this.getElementCss(this._statusOnBtn);
  }

  public getStatusOffBtn(): IWebElement {
    return this.getElementCss(this._statusOffBtn);
  }

  public getStatusOutBtn(): IWebElement {
    return this.getElementCss(this._statusOutBtn);
  }

  public getLogOutBtn(): IWebElement {
    return this.getElementCss(this._logOutBtn);
  }
}

import { getDriver } from './util';
import { getElementByCss } from './util';
import {LoginNegative} from '././tests-scripts/login-negative';
import {Login} from '././tests-scripts/login-positive';
// import {Login} from './login-positive';
export {LoginNegative} from '././tests-scripts/login-negative';

const driver = getDriver();
//const element = getElementByCss(driver, '');

let login = new Login(driver);
let loginNegative = new LoginNegative(driver);

login.loginPositive('test7@test.test', '159236', loginNegative.loginNegative());


//
// private getElementByCss(driver: WebDriver, locator: string): IWebElement {
//   return driver.findElement(By.css(locator));
// }


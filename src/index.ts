import { Builder, By, until } from 'selenium-webdriver';
import { toolkit } from './toolkit/toolkit';


interface ISearch {
  query: string;
}

let search: Array<ISearch> = [
  { query: 'webdriver' },
  { query: 'livetex' },
  { query: 'hello' }
];


let driver = new Builder()
    .withCapabilities({ browserName: 'firefox' })
    .build();

toolkit.dataFlush<ISearch>(search, (item) => {
  driver.get('http://www.google.com/ncr');
  driver.findElement(By.name('q')).sendKeys(item.query);
  driver.findElement(By.name('btnG')).click();
  driver.wait(until.titleIs(item.query + ' - Google Search'), 1000);
});

driver.quit();

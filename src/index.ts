import { Builder, By, until } from 'selenium-webdriver';

let driver = new Builder()
    .withCapabilities({ browserName: 'firefox' })
    .build();

driver.get('http://www.google.com/ncr').then(() => {
  driver.findElement(By.name('q')).sendKeys('webdriver');
  driver.findElement(By.name('btnG')).click();
  driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  driver.quit();
});


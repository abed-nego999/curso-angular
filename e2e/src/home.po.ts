import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('dev-root h1')).getText();
  }
}

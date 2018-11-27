import { browser, by, element } from 'protractor';

export class AboutPage {
  navigateTo() {
    return browser.get('/about');
  }

  getParagraphText() {
    return element(by.css('dev-about p')).getText();
  }
}

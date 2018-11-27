import { browser, by, element } from 'protractor';

export class TasksPage {
  navigateTo() {
    return browser.get('/tasks');
  }

  getParagraphText() {
    return element(by.css('dev-tasks p')).getText();
  }
}

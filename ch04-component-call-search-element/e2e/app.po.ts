import { browser, element, by } from 'protractor';

export class Ch04ComponentCallSearchElementPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

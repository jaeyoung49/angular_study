import { Ch04ComponentStylePage } from './app.po';

describe('ch04-component-style App', function() {
  let page: Ch04ComponentStylePage;

  beforeEach(() => {
    page = new Ch04ComponentStylePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

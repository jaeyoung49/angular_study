import { Ch04ComponentCallSearchElementPage } from './app.po';

describe('ch04-component-call-search-element App', function() {
  let page: Ch04ComponentCallSearchElementPage;

  beforeEach(() => {
    page = new Ch04ComponentCallSearchElementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ChazzPage } from './app.po';

describe('chazz App', () => {
  let page: ChazzPage;

  beforeEach(() => {
    page = new ChazzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

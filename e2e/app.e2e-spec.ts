import { Practice123Page } from './app.po';

describe('practice123 App', function() {
  let page: Practice123Page;

  beforeEach(() => {
    page = new Practice123Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

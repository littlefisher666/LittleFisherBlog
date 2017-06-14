import { LittleFisherBlogPage } from './app.po';

describe('little-fisher-blog App', () => {
  let page: LittleFisherBlogPage;

  beforeEach(() => {
    page = new LittleFisherBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { PecafacilGuiPage } from './app.po';

describe('pecafacil-gui App', () => {
  let page: PecafacilGuiPage;

  beforeEach(() => {
    page = new PecafacilGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

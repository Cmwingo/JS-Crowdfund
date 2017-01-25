import { CrowdfundPage } from './app.po';

describe('crowdfund App', function() {
  let page: CrowdfundPage;

  beforeEach(() => {
    page = new CrowdfundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

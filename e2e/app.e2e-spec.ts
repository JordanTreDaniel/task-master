import { CiOrganizationClientPage } from './app.po';

describe('ci-organization-client App', () => {
  let page: CiOrganizationClientPage;

  beforeEach(() => {
    page = new CiOrganizationClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

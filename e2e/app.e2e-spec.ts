import { Ng2MaterialTestPage } from './app.po';

describe('ng2-material-test App', () => {
  let page: Ng2MaterialTestPage;

  beforeEach(() => {
    page = new Ng2MaterialTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

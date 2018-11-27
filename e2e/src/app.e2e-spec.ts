import { HomePage } from './home.po';
import { TasksPage } from './tasks.po';
import { AboutPage } from './about.po';

describe('TEST - Home page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display "angular-devoteam - Producción"', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('angular-devoteam - Producción');
  });
});

describe('TEST - Tasks page', () => {
  let page: TasksPage;

  beforeEach(() => {
    page = new TasksPage();
  });

  it('should display "tasks works!"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tasks works!');
  });
});

describe('TEST - About page', () => {
  let page: AboutPage;

  beforeEach(() => {
    page = new AboutPage();
  });

  it('should display "tasks works!"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('about works!');
  });
});

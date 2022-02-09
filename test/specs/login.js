const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('numud@mailto.plus', 'ZTqjCTtGTBNfpquwIRrj');

        await expect(HomePage.spanText).toHaveTextContaining('Js Sj');
        await expect(browser).toHaveUrlContaining('dashboard');
    });
});

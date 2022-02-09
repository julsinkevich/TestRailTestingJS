const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('My Logout application', () => {
    it('should be successful', async () => {
        await LoginPage.open();
        await LoginPage.login('numud@mailto.plus', 'ZTqjCTtGTBNfpquwIRrj');

        await HomePage.logout();

        await expect(browser).toHaveUrl('https://jstest1.testrail.io/index.php?/auth/login');
        await expect(browser).toHaveTitle('Login - TestRail');
        await expect(LoginPage.inputUsername).toBePresent;
    });
});
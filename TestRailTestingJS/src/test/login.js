const { config } = require("../../wdio.conf")
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(config.userData.email, config.userData.password);

        await expect(HomePage.spanText).toHaveTextContaining(config.userData.fullName);
        await expect(browser).toHaveUrlContaining('dashboard');
    });
});

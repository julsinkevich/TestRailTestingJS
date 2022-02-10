const { config } = require("../../wdio.conf")
const LoginStep = require('../steps/login.step');
const HomePage = require('../pages/home.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginStep.open();

        await LoginStep.login(config.userData.email, config.userData.password);

        await expect(HomePage.spanText).toHaveTextContaining(config.userData.fullName);
        await expect(browser).toHaveUrlContaining('dashboard');
    });
});

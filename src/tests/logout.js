const { config } = require('../../wdio.conf');
const { settings } = require('../appsettings');
const LoginStep = require('../steps/login.step');
const LogoutStep = require('../steps/logout.step');

const {userData: {email, password}} = settings;

describe('My Logout application', () => {
    it('should be successful', async () => {
        await LoginStep.open();
        await LoginStep.login(email, password);

        await LogoutStep.logout();

        await expect(browser).toHaveUrlContaining(`${config.baseUrl}index.php?/auth/login`);
        await expect(browser).toHaveTitle('Login - TestRail');
    });
});

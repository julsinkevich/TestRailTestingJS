const { config } = require("../../wdio.conf");
const LoginStep = require('../steps/login.step');
const LogoutStep = require('../steps/logout.step');

describe('My Logout application', () => {
    it('should be successful', async () => {
        await LoginStep.open();
        await LoginStep.login(config.userData.email, config.userData.password);

        await LogoutStep.logout();

        await expect(browser).toHaveUrl(`${config.baseUrl}index.php?/auth/login`);
        await expect(browser).toHaveTitle('Login - TestRail');
    });
});

import { config } from "../../wdio.conf";
const { settings } = require('../appsettings');
import LogoutStep from "../steps/logout.step";
import LoginStep from "../steps/login.step";

const { userData: { email, password } } = settings;

describe('My Logout application', () => {
    it('should be successful', async () => {
        await LoginStep.Login(email, password);
        await LogoutStep.Logout();

        await expect(browser).toHaveUrlContaining(`${config.baseUrl}index.php?/auth/login`);
        await expect(browser).toHaveTitle('Login - TestRail');
    });
});

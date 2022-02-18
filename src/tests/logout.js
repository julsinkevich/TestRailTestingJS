import {SETTINGS} from "../appsettings";
import LogoutStep from "../steps/logoutStep";
import LoginStep from "../steps/loginStep";

const {USER_DATA: {EMAIL, PASSWORD}} = SETTINGS;
const USER = {email: EMAIL, password: PASSWORD};

describe('My Logout application', () => {
    it('should be successful', async () => {
        await LoginStep.Login(USER);
        await LogoutStep.Logout();

        await expect(browser).toHaveUrlContaining(`${SETTINGS.URL}index.php?/auth/login`);
        await expect(browser).toHaveTitle('Login - TestRail');
    });
});

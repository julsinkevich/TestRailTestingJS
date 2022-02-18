import {SETTINGS} from "../appsettings";
import {HOMEPAGE_SELECTOR} from "../pages/homePage";
import LoginStep from "../steps/loginStep";

const {USER_DATA: {EMAIL, PASSWORD, FULL_NAME}} = SETTINGS;
const USER = {email: EMAIL, password: PASSWORD};

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginStep.Login(USER);

        await expect($(HOMEPAGE_SELECTOR.USERNAME)).toHaveTextContaining(FULL_NAME);
        await expect(browser).toHaveUrlContaining('dashboard');
    });
});

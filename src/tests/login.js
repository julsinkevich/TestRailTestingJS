const { settings } = require('../appsettings');
import {HOMEPAGE_SELECTOR}  from "../pages/home.page";
import LoginStep from "../steps/login.step";

const {userData: {email, password, fullName}} = settings;

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await LoginStep.Login(email,password);

        await expect($(HOMEPAGE_SELECTOR.USERNAME)).toHaveTextContaining(fullName);
        await expect(browser).toHaveUrlContaining('dashboard');
    });
});

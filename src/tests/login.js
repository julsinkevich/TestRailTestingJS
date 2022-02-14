const { settings } = require('../appsettings');
const LoginStep = require('../steps/login.step');
const HomePage = require('../pages/home.page');

const {userData: {email, password, fullName}} = settings;

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginStep.open();

        await LoginStep.login(email, password);

        await expect(HomePage.spanText).toHaveTextContaining(fullName);
        await expect(browser).toHaveUrlContaining('dashboard');
    });
});

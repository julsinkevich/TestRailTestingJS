const BaseStep = require('./base.step');
const LoginPage = require('../pages/login.page');

class LoginStep extends BaseStep {
    async login(username, password) {
        await LoginPage.inputUsername.setValue(username);
        await LoginPage.inputPassword.setValue(password);
        await LoginPage.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new LoginStep();

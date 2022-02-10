const BaseStep = require('./base.step');
const HomePage = require('../pages/home.page');

class LogoutStep extends BaseStep {
    async logout() {
        await HomePage.spanText.click();
        await HomePage.hrefLogOut.click();
    }
}

module.exports = new LogoutStep();

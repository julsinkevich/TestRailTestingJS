const Page = require('./page');

class LoginPage extends Page {
    get inputUsername() {
        return $('#name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#button_primary');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();

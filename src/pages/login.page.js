class LoginPage {
    get inputUsername() {
        return $('#name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#button_primary');
    }
}

module.exports = new LoginPage();

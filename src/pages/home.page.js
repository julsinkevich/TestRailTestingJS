class HomePage {
    get spanText() {
        return $('.navigation-username');
    }

    get hrefLogOut() {
        return $('#navigation-user-logout');
    }
}

module.exports = new HomePage();

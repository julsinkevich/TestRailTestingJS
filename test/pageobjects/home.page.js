const Page = require('./page');

class HomePage extends Page {

    get spanText(){
        return $('.navigation-username')
    }

    get hrefLogOut(){
        return $('#navigation-user-logout')
    }

    async logout () {
        await this.spanText.click();
        await this.hrefLogOut.click();
    }
}

module.exports = new HomePage();

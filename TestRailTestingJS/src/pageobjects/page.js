const { config } = require("../../wdio.conf")

module.exports = class Page {
    open() {
        return browser.url(config.baseUrl);
    }
}

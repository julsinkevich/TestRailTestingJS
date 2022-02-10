const { config } = require("../../wdio.conf")

module.exports = class BaseStep {
    open() {
        return browser.url(config.baseUrl);
    }
}

exports.config = {
    specs: [
        './src/tests/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    logLevel: 'info',

    bail: 0,

    baseUrl: 'https://jstest1.testrail.io/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['chromedriver'],

    framework: 'mocha',

    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register']
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}

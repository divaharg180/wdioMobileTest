import url from 'node:url'
import path from 'node:path'
import allure from 'allure-commandline'
import allureReporter from '@wdio/allure-reporter'


export const config: Omit<WebdriverIO.Config, 'capabilities'> = {

    user: "jegadeeshwaranm_swvxKX",
    key: "EzSCZwyqgVEtzj1zYr2X",
    host: 'hub.browserstack.com',
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    services: ['selenium-standalone'],


    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],


    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 4,
    //
    specs: ['./test/specs/**/*.ts'
    ],
    enablePopups: true,
    allowAllCookies: true,
//   autoAcceptPermissions: 'true',
//     autoAcceptAlerts: 'True',

    // specFileRetries: 1,
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'trace',
    // outputDir: path.resolve(__dirname, 'logs'),
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: process.env.MEMBER_URL,
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 30000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 100000,
    //

    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'jasmine',

    //
    // Options to be passed to Jasmine.
    jasmineOpts: {
        // Jasmine default timeout
        defaultTimeoutInterval: 500000,
    },

    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
        }]
    ],
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        console.log("Taking screenshot")
        // await browser.takeScreenshot();
    },
    use: {
        headless: false,
        screenshot: "only-on-failure",
        video: "only-on-failure",
        'safariAllowPopups': 'true',
        'autoAcceptPermissions': 'true',
        'autoAcceptAlerts': 'True',
    },
    // Default request retries count
    retries: 3,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }]],
    /* onComplete: function () {
         console.log("Generating report")
         const reportError = new Error('Could not generate Allure report')
         const generation = allure(['generate', 'allure-results', '--clean'])
         return new Promise((resolve, reject) => {
             const generationTimeout = setTimeout(
                 () => reject(reportError),
                 5000)
 
             generation.on('exit', function (exitCode : any) {
                 clearTimeout(generationTimeout)
 
                 if (exitCode !== 0) {
                     return reject(reportError)
                 }
 
                 console.log('Allure report successfully generated')
                 resolve()
             })
         })
     } */

}

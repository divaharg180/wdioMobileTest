exports.config = {
    user: process.env.LT_USERNAME || "divaharg509",
    key: process.env.LT_ACCESS_KEY || "WJelZfv7TAHrWgTsvYMw1rKJwHUPnRK14NGjOFGzbEvU0HdvGj",

    updateJob: false,
    specs: [
     // './test/specs/**/pdfDownload.spec.ts',
     './test/specs/**/upload.spec.ts'
    ],
    exclude: [],

    maxInstances: 10,
    commonCapabilities: {
        name: "webdriverIO-parallel_test",
        build: "webdriverIO-lambdatest",
        visual: false,
        video: true,
        console: false,
        network: false,
    },

    capabilities: [
        {
            browserName: "chrome",
            version: "latest",
            platform: "WIN10",
        },
        // {
        //     browser: "firefox",
        //     version: "latest",
        //     platform: "WIN7",
        // },
        // {
        //     browser: "internet explorer",
        //     version: "latest",
        //     platform: "WIN10",
        // },
        // {
        //     browser: "MicrosoftEdge",
        //     version: "latest",
        //     platform: "WIN10",
        // },
    ],

    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: "hub.lambdatest.com",
    port: 80,

    framework: "jasmine",
    mochaOpts: {
        ui: "bdd",
        timeout: 20000,
    },
};

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
        caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
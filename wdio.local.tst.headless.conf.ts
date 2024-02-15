import { config as sharedConfig } from './wdio.shared.conf.js'
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        services: ['chromedriver'],
        capabilities: [
            {
                browserName: 'chrome',
                specs: [
                    './test/specs/**/pdfDownload.spec.ts'

                ],
                'goog:chromeOptions': {
                    'args': [
                        '--geoLocation=US',
                        '--resolution=2560x1600',
                        '--timezone=America/New_York',
                        '--force-device-scale-factor=0.85' // Zoom out 75%
                    ]
                }
            }
            // {
            //     browserName: 'firefox',
            //     "moz:firefoxOptions": {
            //         args: ['-headless']
            //     }
            // },
        ],
        use: {
            headless: false,
            screenshot: "only-on-failure",
            video: "only-on-failure"
        },
        // Default request retries count
        retries: 3,
        reporter: [["dot"], ["json", {
            outputFile: "jsonReports/jsonReport.json"
        }], ["html", {
            open: "never"
        }]],
        // Options to be passed to Jasmine.
        jasmineOpts: {
            // Jasmine default timeout
            defaultTimeoutInterval: 1500000,
        },
    }
}

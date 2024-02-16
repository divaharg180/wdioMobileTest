import { config as sharedConfig } from "./wdio.shared.conf.ts"

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    services: [
      ['browserstack', {
        testObservability: false,
      }]
    ],

    capabilities: [
      {
        browserName: 'Chrome',
        specs: [



         // './test/specs/**/pdfDownload.spec.ts',
          //'./test/specs/**/upload.spec.ts'

       

        ],
        'bstack:options': {
          os: 'Windows',
          osVersion: '11',
          browserVersion: 'latest',
          // geoLocation: 'US',
          resolution: '1920x1080',
          buildName: 'Test_Divahar',
          buildTag: 'regression',
          projectName: 'Test',
        }
      },
      {
        browserName: 'chrome',
        specs: [
        //  './test/specs/**/upload.mobile.spec.ts'

        ],
        'bstack:options': {
          deviceName: 'Samsung Galaxy S20',
          platformVersion: '10',
          platformName: 'android',
          buildName: 'Test_DivaharMobile',
          buildTag: 'regression',
          projectName: 'Test',
        },
      },

      {
        browserName: 'Safari',
        specs: [

        ],
        'bstack:options': {
          os: 'OS X',
          osVersion: 'Big Sur',
          browserVersion: 'latest',
          buildName: 'Test_Divahar',
          buildTag: 'regression',
          projectName: 'Test',
          resolution: '2560x1600',
        }
      },

      {
        browserName: 'safari',
        specs: [
          './test/specs/**/upload.mobile.spec.ts',


        ],
        'bstack:options': {
          deviceName: 'iPhone 11',
          buildName: 'Test_DivaharMobile',
          buildTag: 'regression',
          projectName: 'Test',
        
       },
      },
    ],

    // Options to be passed to Jasmine.
    jasmineOpts: {
      // Jasmine default timeout
      defaultTimeoutInterval: 3000000,
    },
  }
}

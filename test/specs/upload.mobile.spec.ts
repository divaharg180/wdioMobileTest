import path = require("path");
import { fileURLToPath } from "url";

describe("upload", () => {
    let filePath:any;

  it("tests upload", async () => {

    // Click on the element
    await browser.url("https://the-internet.herokuapp.com/upload")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/upload")
//    await browser.$("#file-upload").click()
//     await browser.$("#file-upload").setValue("C:\\fakepath\\Screenshot 2023-10-06 172845.png")
//   //  await browser.$("#file-upload").setValue("../../uploadItems/image.png")
//    await browser.$("#file-submit").click()
//    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/upload")


 

   if (driver.isAndroid) {
       filePath = '/sdcard/Pictures/BrowserStack.jpg';
   } else {
       filePath = '/var/mobile/Media/DCIM/100APPLE/IMG_0005.PNG'
       // '///var/mobile/Media/DCIM/100APPLE/IMG_0005.PNG'
   }


   const fileInputSelector = await $("#file-upload");
   const fileInputSelectorParent = await $("#file-upload");

   // const inputElement = result.iterateNext() as HTMLInputElement;
   (await $("#file-upload")).addValue(filePath)
   await new Promise(resolve => setTimeout(resolve, 2000));
    // await browser.$("#file-submit").click()
    // await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/upload")
   
  });
  // it("upload image 2nd way",async ()=>{

  //   await driver.get("https://the-internet.herokuapp.com/upload")
  // await new Promise(r => setTimeout(r, 2000));
  // element = await driver.waitForElementById('file-upload')
  // await element.click()
  // await driver.context('NATIVE_APP')
  // element = await driver.waitForElementByName('Photo Library')
  // await element.click()
  // await new Promise(r => setTimeout(r, 2000));
  // element = await driver.elementsByClassName('XCUIElementTypeImage')
  // await element[0].click()
  // await new Promise(r => setTimeout(r, 5000));
  // element = await driver.waitForElementByName('Choose')
  // await element.click()
  // await new Promise(r => setTimeout(r, 10000));
  // contexts = await driver.contexts();
  // await driver.context(contexts[1])
  // element = await driver.waitForElementById("file-submit")
  // await element.click()
  // await driver.quit();
  //   // await browser.url('https://the-internet.herokuapp.com/upload');
  //   //     await browser.pause(2000);

  //   //     const fileUpload = await browser.$('#file-upload');
  //   //     await fileUpload.click();

  //   //     // await browser.switchToNativeContext();

  //   //     const photoLibrary = await browser.$('~Photo Library');
  //   //     await photoLibrary.click();

  //   //     await browser.pause(2000);

  //   //     const images = await browser.$$('.XCUIElementTypeImage');
  //   //     await images[0].click();

  //   //     await browser.pause(5000);

  //   //     const chooseButton = await browser.$('~Choose');
  //   //     await chooseButton.click();

  //   //     await browser.pause(10000);

  //   //     const contexts = await browser.getContexts();
  //   //     // await browser.switchContext(contexts[1]);

  //   //     const submitButton = await browser.$('#file-submit');
  //   //     await submitButton.click();
  // })
});

 
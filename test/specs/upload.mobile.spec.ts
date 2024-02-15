import path = require("path");
import { fileURLToPath } from "url";

describe("upload", () => {
    let filePath:any;

  it("tests upload", async () => {
    await browser.setWindowSize(1440, 900)
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
       filePath = 'private/var/mobile/Media/DCIM/100APPLE/IMG_0004.JPG';
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
});

 
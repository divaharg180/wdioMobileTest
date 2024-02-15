import path = require("path");
import { fileURLToPath } from "url";

describe("upload", () => {
  it("tests upload", async () => {
    await browser.setWindowSize(1440, 900)
    await browser.url("https://the-internet.herokuapp.com/upload")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/upload")
   await browser.$("#file-upload").click()
    await browser.$("#file-upload").setValue("C:\\fakepath\\Screenshot 2023-10-06 172845.png")
  //  await browser.$("#file-upload").setValue("../../uploadItems/image.png")
   await browser.$("#file-submit").click()
   await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/upload")


    // const filePath = path.join(__dirname, '../../uploadItems/image.png');
    // const remoteFilePath = await browser.uploadFile(filePath);
    // await (await browser.$("#file-upload")).addValue(remoteFilePath)
    // await browser.$("#file-submit").click()
    // await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/upload")
   
  });
});

 
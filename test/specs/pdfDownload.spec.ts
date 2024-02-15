describe("Recording 2/15/2024 at 4:23:13 PM", () => {
    it("tests Recording 2/15/2024 at 4:23:13 PM", async () => {
        await browser.setWindowSize(1440, 900)
        await browser.url("https://filemasterdev.enerlex.com/")
        await expect(browser).toHaveUrl("https://filemasterdev.enerlex.com/")
        await browser.url("https://filemasterdev.enerlex.com/")
        await expect(browser).toHaveUrl("https://filemasterdev.enerlex.com/")
        await browser.$("aria/Your Username").click()

        await browser.$("aria/Your Username").setValue("praneshBuyer")
        await browser.$("aria/Password").click()

        await browser.$("aria/Password").setValue("U67dQBvGdE2j")
        await browser.$("//*[@id=\"logInForm\"]/fieldset[3]/input").click()
        await expect(browser).toHaveUrl("https://filemasterdev.enerlex.com/dashboard.php")
     
 
        await browser.$("/html/body/div[1]/nav/div[2]/form/div/input").click()
        await browser.$("/html/body/div[1]/nav/div[2]/form/div/input").setValue("4")
        await browser.$("/html/body/div[1]/nav/div[2]/form/div/div/button/span").click()
        await expect(browser).toHaveUrl("https://filemasterdev.enerlex.com/findname.php?searchFor=4")
        await browser.$("aria/Ivy, Robert Emmett[role=\"link\"]").click()
        await expect(browser).toHaveUrl("https://filemasterdev.enerlex.com/editfile_buyerview.php?fileid=24234")
        await browser.$("#pills-docs-tab").click()
        await browser.$("aria/Accurint.Kimberly Wilcox.pdf").click()
    });
});

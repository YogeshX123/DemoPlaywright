import { test, expect } from 'playwright/test'

import { HomePage } from '../pages/Homepage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { TestConfig } from '../test.config';
import { Loginpage } from '../pages/Loginpage';


let config: TestConfig;
let homepage: HomePage;
let loginpage: Loginpage;
let myAccountPage: MyAccountPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);

    homepage = new HomePage(page);
    myAccountPage = new MyAccountPage(page);
    loginpage = new Loginpage(page);
})

test.afterEach(async ({ page }) => {
     await page.waitForTimeout(3000);
    await page.close();
})


test('Login page test  @master @sanity @regression', async ({ page }) => {

    // navigate to loginpage via homepage
    await homepage.clickMyAccount();
    await homepage.clickLogin();

    // enter valid credientials and log in
    await loginpage.setEmail(config.email)
    await loginpage.setPassword(config.password)
    await loginpage.clickLoginButton();

    // verify successful login by checking 'My Account' page presence
    const isLoggedIn = await myAccountPage.MyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();


})
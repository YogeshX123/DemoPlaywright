import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/Homepage';
import { RegistrationPage } from '../pages/RegistrationPage'
import { RandomDataUtil } from '../utils/randomDataGenerator'
import { TestConfig } from '../test.config';


let homepage: HomePage;
let registrationPage: RegistrationPage;

test.beforeEach(async ({ page }) => {


    const config = new TestConfig();
    await page.goto(config.appUrl)

    homepage = new HomePage(page);
    registrationPage = new RegistrationPage(page);

})


test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})




test('User registration test @master @sanity @regression', async ({ page }) => {




    await homepage.clickMyAccount();
    await homepage.clickRegister();


    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getlastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();

    const confirmationMsg = await registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!')






})








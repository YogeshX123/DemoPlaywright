import { Page, Locator, expect } from "@playwright/test";
import { promises } from "dns";

export class RegistrationPage {

    private page: Page;

    // locators
    private txtFirstName: Locator;
    private txtLastName: Locator;
    private txtEmail: Locator;
    private txtTelephone: Locator;
    private txtPassword: Locator;
    private txtConfirmPassword: Locator;
    private chkdPolicy: Locator;
    private btnContinue: Locator;
    private msgConfirmation: Locator;

    constructor(page: Page) {
        this.txtFirstName = page.locator('//input[@id="input-firstname"]');
        this.txtLastName = page.locator('//input[@id="input-lastname"]');
        this.txtEmail = page.locator('//input[@id="input-email"]');
        this.txtTelephone = page.locator('//input[@id="input-telephone"]');
        this.txtPassword = page.locator('//input[@id="input-password"]');
        this.txtConfirmPassword = page.locator('//input[@id="input-confirm"]');
        this.chkdPolicy = page.locator('//input[@name="agree"]');
        this.btnContinue = page.locator('//input[@value="Continue"]');
        this.msgConfirmation = page.locator('//div[@id="content"]//h1');
    }

    async setFirstName(fname: string): Promise<void> {
        await this.txtFirstName.fill(fname);
    }


    async setLastName(lname: string): Promise<void> {
        await this.txtLastName.fill(lname);
    }

    async setEmail(email: string): Promise<void> {
        await this.txtEmail.fill(email);
    }



    async setTelephone(tel: string): Promise<void> {
        await this.txtTelephone.fill(tel);
    }


    async setPassword(pwd: string): Promise<void> {
        await this.txtPassword.fill(pwd);
    }


    async setConfirmPassword(pwd: string): Promise<void> {
        await this.txtConfirmPassword.fill(pwd)
    }

    async setPrivacyPolicy(): Promise<void> {
        await this.chkdPolicy.check();

    }

    async clickContinue(): Promise<void> {
        await this.btnContinue.click();

    }


    async getConfirmationMsg(): Promise<string> {
        return await this.msgConfirmation.textContent() ?? '';

    }

    async completeRegistration(userData: {
        firstName: string;
        lastNmae: string;
        email: string;
        telephone: string;
        password: string;


    }): Promise<void> {
        await this.setFirstName(userData.firstName)
        await this.setLastName(userData.lastNmae)
        await this.setEmail(userData.email)
        await this.setTelephone(userData.telephone)
        await this.setPassword(userData.password)
        await this.setConfirmPassword(userData.password)
        await this.setPrivacyPolicy()
        await this.clickContinue()
        await expect(this.msgConfirmation).toBeVisible();

    }
}
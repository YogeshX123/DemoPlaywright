import { Page, Locator, expect } from 'playwright/test';
import { title } from 'process';

export class HomePage {
    private page: Page;

    // locators
    private lnkMyAccount: Locator;
    private lnkRegister: Locator;
    private lnkLogin: Locator;
    private txtSearchBox: Locator;
    private btnsearch: Locator;


    // constructor

    constructor(page: Page) {

        this.page = page;
        this.lnkMyAccount = page.locator('(//span[@class="hidden-xs hidden-sm hidden-md"])[3]')
        this.lnkRegister = page.locator('(//a[@href="https://naveenautomationlabs.com/opencart/index.php?route=account/register"])[1]')
        this.lnkLogin = page.locator('(//a[@href="https://naveenautomationlabs.com/opencart/index.php?route=account/login"])[1]')
        this.txtSearchBox = page.locator('//input[@placeholder="Search"]')
        this.btnsearch = page.locator('(//button[@type="button"])[4]')

    }


    // action method

    // check home page exists

    async isHomePageExists() {

        let title: string = await this.page.title();
        if (title) {
            return true;
        }
        return false;
    }


    // click 'My Account' link

    async clickMyAccount() {
        try {
            await this.lnkMyAccount.click();
        }
        catch (error) {
            console.log(`Exception Occured while clicking 'My Account': ${error}`);
            throw error;
        }

    }

    async clickRegister() {
        try {
            await this.lnkRegister.click();
        }
        catch (error) {
            console.log(`Exception Occured while clicking 'Register': ${error}`);
            throw error;
        }

    }



    async clickLogin() {
        try {
            await this.lnkLogin.click();
        }
        catch (error) {
            console.log(`Exception Occured while clicking 'Login': ${error}`);
            throw error;
        }

    }


    async enterProductName(pName: string) {
        try {
            await this.txtSearchBox.fill(pName);
        }
        catch (error) {
            console.log(`Exception Occured while clicking 'Search': ${error}`);
            throw error;
        }

    }


    async clickSerach() {
        try {
            await this.btnsearch.click();
        }
        catch (error) {
            console.log(`Exception Occured while clicking 'Search': ${error}`);
            throw error;
        }

    }

}
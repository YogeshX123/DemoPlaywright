import {test, expect, Page, Locator} from 'playwright/test'

export class Loginpage{

    private page:Page;

    private txtEmailAddress : Locator;
    private txtPassword: Locator;
    private btnLogin:Locator;
    private txtErrorMessage: Locator;

    constructor(page:Page){
        this.page=page;

        this.txtEmailAddress=page.locator('//input[@id="input-email"]');
        this.txtPassword=page.locator('//input[@id="input-password"]');
        this.btnLogin=page.locator('//input[@value="Login"]');
        this.txtErrorMessage=page.locator('//div[@class="alert alert-danger alert-dismissible"]');

    }




    async setEmail(email:string){
       await this.txtEmailAddress.fill(email);
    }
  

     async setPassword(pwd:string){
       await this.txtEmailAddress.fill(pwd);
    }


   async clickLoginButton(){
       await this.btnLogin.click();
    }


    async getLoginErrorMessage():Promise<null | string>{
        return(this.txtErrorMessage.textContent());
    }

}
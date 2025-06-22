import {test,expect, Page, Locator} from 'playwright/test'


export class MyAccountPage{

    private page:Page;

    private msgHeading: Locator;

    constructor(page:Page){
        this.page=page;

        this.msgHeading= page.locator('(//div[@id="content"]//h2)[1]')
    }

     async MyAccountPageExists(): Promise<boolean>{
        try{
          const isVisible = this.msgHeading.isVisible();
          return isVisible;
        }
        catch(error){
            console.log(`Error checking MyAccount Page Heading Visbility : ${error}`);
            return false;
        }
     }
}
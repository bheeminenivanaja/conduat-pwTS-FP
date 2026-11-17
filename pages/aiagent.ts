import {Page, Locator} from '@playwright/test';

export class AiAgent{
    //Login elements
    readonly emailidEle :Locator
    readonly PasswordEle : Locator
    readonly signinbtnEle : Locator
    //Declare to click on WM Healthcare agent
    readonly wmhealthcareEle : Locator

    constructor (readonly page: Page){
        this.emailidEle=page.getByPlaceholder("name@aivante.local");
        this.PasswordEle=page.getByPlaceholder("••••••••");
        this.signinbtnEle=page.getByRole('button', {name: 'Sign in'})
        //this.signinbtnEle=page.locator('[class="aivante-auth__submit-label"]')
    //define wmhealthcare element
        this. wmhealthcareEle= page.getByText("WM Healthcare")
    }

    async login(user: string, pass:string){
        await this.page.goto("http://169.61.105.103:9800/");
        await this.emailidEle.fill(user);
        await this.PasswordEle.fill(pass);
        await this.signinbtnEle.click();
            }
      //creating new method to click on WM Healthcare agent
      async clickwmhealthcare(){
        await this.wmhealthcareEle.click();
      }     

    }




    




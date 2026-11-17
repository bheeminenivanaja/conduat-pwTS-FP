import  {Page, Locator} from '@playwright/test'

 export default class Fplogin{

   // readonly page:Page : locator
    readonly usernametxtboxEle : Locator
    readonly passwordtxtboxEle : Locator
    readonly loginbuttonEle : Locator

constructor(readonly page:Page){

    //this. page=page
    this. usernametxtboxEle= page.getByRole('textbox', { name: 'Email / User ID' })
    this. passwordtxtboxEle= page.getByRole('textbox', { name: 'Password' })
    this. loginbuttonEle= page.getByRole('button', { name: 'Login' })
}

async gotologin(){
    await this.page.goto('http://169.61.105.110/New_FP/Dzee/financial_planner/login');
}

async gotofplogin(username: string, password:string){
    await this.usernametxtboxEle.fill(username)
    await this.passwordtxtboxEle.fill(password)
    await this.loginbuttonEle.click()
}

}

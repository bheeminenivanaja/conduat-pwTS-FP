import { Page} from '@playwright/test';
export default class LoginPage {

    readonly page: Page
    readonly username_textbox
    readonly password_textbox
    readonly login_button

    constructor(page: Page) {
        this.page = page
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Log in' })
    }

    async gotologinpage() {
        await this.page.goto('http://169.61.105.110/medicareAdvantage_sandbox/login');

    }

    async login(username: string, password: string) {

        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

}
//export default LoginPage;
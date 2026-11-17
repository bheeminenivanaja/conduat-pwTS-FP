import { test } from '@playwright/test';
import LoginPage from '../pages/login';


test('test', async ({ page }) => {
// await page.goto('http://169.61.105.110/medicareAdvantage_sandbox/login');

   const Login = new LoginPage(page)
   await Login.gotologinpage()
   await Login.login('valli@gmail.com' , 'sri');

//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('valli@gmail.com',{timeout: 3000});
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('sri');
//   await page.getByRole('button', { name: 'Log in' }).click();
});
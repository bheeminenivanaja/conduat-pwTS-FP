import { test, expect } from '@playwright/test';
import Fplogin from '../pages/fplogin';

test('test', async ({ page }) => {
    const loginpage = new Fplogin(page)
    await loginpage.gotologin()
    await loginpage.gotofplogin("auto1@gmail.com" , "dzee123")


//   await page.goto('http://169.61.105.110/New_FP/Dzee/financial_planner/login');
//   await page.getByRole('textbox', { name: 'Email / User ID' }).click();
//   await page.getByRole('textbox', { name: 'Email / User ID' }).fill('auto1@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('dzee123');
//   await page.getByRole('button', { name: 'Login' }).click();
});
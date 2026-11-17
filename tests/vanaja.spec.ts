import { test, expect } from '@playwright/test';
import { LoginPage} from '../pages/vanaja';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  //await page.waitForTimeout(5000);
});
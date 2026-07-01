import { test, expect } from '@playwright/test';
import { LoginPage } from './pomfile';
 
test('Verify user login', async ({ page }) => {
 
  const loginPage = new LoginPage(page);
 
  await loginPage.navigate();
  await loginPage.login('student', 'Password123');
 
  // Assertion
  //await expect(page).toHaveURL('https://example.com/dashboard');
});
 

import { test as setup, expect } from '@playwright/test';
import path from 'path';

// Path to store authentication state
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');

  await page.getByRole('button', { name: 'Submit' }).click();

  await page.waitForURL('https://practicetestautomation.com/practice-test-login/');
  //await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

  await page.context().storageState({ path: authFile });
});
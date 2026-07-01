import { test, expect } from '@playwright/test';
import loginData from './data/loginData.json';

loginData.forEach((data, index) => {

  test(`Login Test ${index + 1} with ${data.username}`, async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.fill('#username', data.username);
    await page.fill('#password', data.password);

    await page.click('#submit');

    
    if (
      data.username === 'student' &&
      data.password === 'Password123'
    ) {

      await expect(page).toHaveURL(/logged-in-successfully/);

    } else {

      await expect(page.locator('#error')).toBeVisible();

    }

  });

});




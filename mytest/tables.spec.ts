
import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  

 const rows = await page.locator('#');

 const rowCount = await rows.count();

 console.log('Total Rows:', rowCount);

});
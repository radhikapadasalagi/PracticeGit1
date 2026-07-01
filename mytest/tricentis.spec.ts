import { test, expect, chromium } from '@playwright/test';
 
 
test('test', async ({ page }) => {
  await page.goto('https://sampleapp.tricentis.com/101/');
  await page.getByRole('link', { name: 'Get a quote', description: 'Get Quote Camper', exact: true }).click();
  await page.locator('#make').selectOption('BMW');
  await page.locator('#engineperformance').click();
  //await page.waitForTimeout(50000);
  await page.locator('#engineperformance').click();
  await page.locator('#engineperformance').fill('1000');
  //await page.locator('#engineperformance').press('F15');
  await page.getByTitle('Open Date of Manufacture').click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.locator('#numberofseats').selectOption('3');
  await page.locator('.ideal-radio').first().click();
  await page.locator('#fuel').selectOption('Diesel');
  await page.locator('#payload').click();
  await page.locator('#payload').fill('100');
  await page.locator('#totalweight').click();
  await page.locator('#totalweight').fill('100');
  await page.locator('#listprice').click();
  await page.locator('#listprice').fill('1000');
  await page.locator('#licenseplatenumber').click();
  await page.locator('#licenseplatenumber').fill('TER');
  await page.locator('#licenseplatenumber').press('AudioVolumeDown');
  await page.locator('#licenseplatenumber').press('AudioVolumeDown');
  await page.locator('#licenseplatenumber').press('AudioVolumeDown');
  await page.locator('#licenseplatenumber').fill('TER2222');
  await page.locator('#annualmileage').click();
  await page.locator('#annualmileage').click();
  await page.locator('#annualmileage').fill('588');
  await page.locator('label:nth-child(2) > .ideal-radio').first().click();
});
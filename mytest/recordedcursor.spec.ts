import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('label').filter({ hasText: 'Radio2' }).getByRole('radio').check();
  //await page.locator('#autocomplete').fill('Ind');
  //await page.getByText('India').click();

  await page.locator('#dropdown-class-example').selectOption('option2');
  await page.locator('#checkBoxOption3').check();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('radhika Birajdar');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: 'Home' }).click();
  
  await expect(page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: 'Courses', exact: true })).toBeVisible();
  
  await expect(page.locator('iframe[name="iframe-name"]').contentFrame().locator('body')).toContainText('why we are Leaders in market?!');
  
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('cell', { name: 'Rahul Shetty' }).nth(1).click();
  await page.getByRole('cell', { name: 'Learn SQL in Practical +' }).click();
  await page.getByRole('button', { name: 'Show' }).click();


});

 
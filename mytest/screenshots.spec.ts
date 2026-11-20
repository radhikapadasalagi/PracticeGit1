import { test, expect, } from '@playwright/test';

//test.afterAll(async () => {
  //console.log('Running after all tests');

test('capture screenshots test1', async ({ page }) => {
  console.log("Test1 execution started");
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('label').filter({ hasText: 'Radio2' }).getByRole('radio').check();
  
 await page.getByRole('textbox', { name: 'Type to Select Countries' }).fill('India');
 
const options = page.locator('#ui-id-3');
 
await options.first().waitFor();
 

const count = await options.count();

 
for (let i = 0; i < count; i++) {
  const text = await options.nth(i).textContent();
 console.log(count);

  if (text?.trim() === 'India') {
    await options.nth(i).click();
    break;
  }
}
  /*await page.getByRole('textbox', { name: 'Type to Select Countries' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).press('Enter');*/
 
  await page.locator('#dropdown-class-example').selectOption('option2');
  await page.locator('#checkBoxOption3').check();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('radhika Birajdar');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('cell', { name: 'Rahul Shetty' }).nth(1).click();
  await page.getByRole('cell', { name: 'Learn SQL in Practical +' }).click();
  await page.getByRole('button', { name: 'Show' }).click();
});
  test('capture screenshots test2', async ({ page }) => {
  console.log("Test2 execution started");
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('.logoClass').screenshot({path:'./screenshot/home page screenshot.png'});
  await page.screenshot({path:'./screenshot/whole fullPage.png'});
  await page.screenshot({path:'./screenshot/fullPage1.png', fullPage:true});
  await test.info();
  

});



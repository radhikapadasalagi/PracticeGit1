

import {test, expect} from '@playwright/test';
 
test('Count Number', async({page}) => {
await page.goto('https://sampleapp.tricentis.com/101/');
 
await page.getByRole('link', { name: 'Automobile', exact: true }).click();
await page.waitForSelector('#make option', { state: 'attached' });
const count = await page.locator('#make option').count();
 
console.log(count)
const options = page.locator('#make option');

    for (let i = 0; i < count; i++) {
    const text = await options.nth(i).textContent();
    console.log(text);
    }
    
 //await expect(page.locator('#make option')).toContainText([
  //'Audi'
//]);
 //await page.screenshot({path :'./data/passtest.png'});   
  });
import {test, expect} from '@playwright/test';

test('Handling dropdown', async({page})=>
{
    await page.goto('https://sampleapp.tricentis.com/101/app.php');
    await page.getByRole('link', { name: 'Automobile' }).click();
    await page.locator('#fuel').selectOption('Diesel');
    //await page.getByLabel('Fuel Type').selectOption('Petrol');

    await expect(page.locator('#fuel')).toHaveText(['Petrol','Diesel','Electric Power']);

});
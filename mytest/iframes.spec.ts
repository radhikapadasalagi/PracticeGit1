import { test, expect } from '@playwright/test';
import { LoginPage } from './pomfile';
 
test('Handling Iframes', async ({ page }) => 
    {
        await page.goto('https://jqueryui.com/droppable/');
        
//await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  //await page.frameLocator('#my-frame').locator('button').click();
        const dragele = page.frameLocator('.demo-frame').locator('#draggable');
        const dropele = page.frameLocator('.demo-frame').locator('#droppable');
        await dragele.dragTo(dropele);
        //page.frameLocator('#demo-frame');



    });
import { test, expect } from '@playwright/test';

 
test('Handling Iframes', async ({ page }) => 
    {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
      await page.getByRole('textbox', { name: 'Type to Select Countries' }).fill('India');
 
// Capture all suggestions
const options = page.locator('#ui-id-3');
 
// Wait until options are visible
await options.first().waitFor();
 
// Loop and choose exact match
const count = await options.count();

 
for (let i = 0; i < count; i++) {
  const text = await options.nth(i).textContent();
 console.log(count);

  if (text?.trim() === 'India') {
    await options.nth(i).click();
    break;
  }
}

    });
    
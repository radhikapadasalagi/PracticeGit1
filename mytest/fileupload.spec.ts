import { test, expect } from '@playwright/test';


test('Upload a single file', async ({ page }) => {
await page.goto('https://practice.expandtesting.com/upload'); 
const fileInput = page.locator('input[type="file"]'); 
await page.getByTestId('file-input').setInputFiles('data/Radhika CV.pdf');
await page.getByTestId('file-submit').click();
});


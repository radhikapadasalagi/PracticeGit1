import { test, expect } from '@playwright/test';
 
test('basic assertion example', async ({ page }) => {
  await page.goto('https://coforge.com');
 
  const title = await page.title();
  console.log('Page Title:', title);
  expect(title).toBe('Coforge | Where AI Engineering Meets Industry Expertise');
  await page.screenshot({path:'./data/coforge page.png'});
});
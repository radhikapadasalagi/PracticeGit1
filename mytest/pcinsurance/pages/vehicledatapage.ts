import { Page } from '@playwright/test';

export class VehicleDataPage {

constructor(private page: Page) {}

async fillVehicleData() {

await this.page.locator('#make').selectOption('Audi');

//await this.page.fill('#engineperformance', '120');
await this.page.locator('#engineperformance').click();
  await page.waitForTimeout(50000);
  await this.page.locator('#engineperformance').click();
  await this.page.locator('#engineperformance').fill('1000');
//await this.page.fill('#dateofmanufacture', '01/01/2024');

await this.page.selectOption('#numberofseats', '2');

await this.page.click('#nextenterinsurantdata');

}

}
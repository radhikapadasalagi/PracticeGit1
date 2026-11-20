import { Page } from '@playwright/test';

export class ProductDataPage {

constructor(private page: Page) {}

async fillProductData() {

await this.page.fill('#startdate', '10/10/2026');

await this.page.selectOption('#insurancesum', '3000000');

await this.page.click('#nextselectpriceoption');

}

}
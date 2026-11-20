import { Page } from '@playwright/test';

export class InsurantDataPage {

constructor(private page: Page) {}

async fillInsurantData() {

await this.page.fill('#firstname', 'Radhika');

await this.page.fill('#lastname', 'Padasalagi');

await this.page.fill('#birthdate', '01/01/1995');

await this.page.fill('#streetaddress', 'Mumbai');

await this.page.fill('#zipcode', '400001');

await this.page.fill('#city', 'Mumbai');

await this.page.click('#nextenterproductdata');

}

}
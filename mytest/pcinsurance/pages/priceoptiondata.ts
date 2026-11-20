import { Page } from '@playwright/test';

export class PriceOptionPage {

constructor(private page: Page) {}

async selectPrice() {

await this.page.check(

'input[value="Silver"]'

);

await this.page.click('#nextsendquote');

}
}
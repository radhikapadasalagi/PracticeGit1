import { Page } from '@playwright/test';

export class SendQuotePage {

constructor(private page: Page) {}

async sendQuote() {

await this.page.fill(

'#email',

'radhika@test.com'

);

await this.page.fill(

'#username',

'radhika'

);

await this.page.fill(

'#password',

'Password123'

);

await this.page.fill(

'#confirmpassword',

'Password123'

);

await this.page.click('#sendemail');

}

}
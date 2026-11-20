import { test, expect } from '@playwright/test';

import { VehicleDataPage } from '../pages/vehicledatapage.ts';

import { InsurantDataPage } from '../pages/insurancedatapage.ts';

import { ProductDataPage } from '../pages/productdatapage.ts';

import { PriceOptionPage } from '../pages/priceoptiondata.ts';

import { SendQuotePage } from '../pages/sendquote.ts';

test('Create Insurance Quote', async ({ page }) => {

await page.goto(

'https://sampleapp.tricentis.com/101/'

);

const vehicle = new VehicleDataPage(page);

const insurant = new InsurantDataPage(page);

const product = new ProductDataPage(page);

const price = new PriceOptionPage(page);

const quote = new SendQuotePage(page);

await vehicle.fillVehicleData();

await insurant.fillInsurantData();

await product.fillProductData();

await price.selectPrice();

await quote.sendQuote();

});

import * as fs from 'fs';

import * as path from 'path';
export class TestDataReader {
static getQuoteData() {
const filePath = path.join(
__dirname,
'../testdata/quoteData.json'
);
const jsonData = fs.readFileSync(
filePath,
'utf-8'
);
return JSON.parse(jsonData);
}
}
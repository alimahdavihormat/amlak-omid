const { test } = require('node:test');
const assert = require('node:assert/strict');
const { priceInRange } = require('../lib/price-filter');
test('مقایسه عددی قیمت و ارقام فارسی', () => {
  assert.equal(priceInRange('۱٬۵۰۰٬۰۰۰٬۰۰۰', '500000000-1500000000'), true);
  assert.equal(priceInRange('2,000,000,000', '500000000-1500000000'), false);
  assert.equal(priceInRange('٥٠٠٠٠٠٠٠٠٠', '5000000000'), true);
  assert.equal(priceInRange('', '0-100'), false);
});

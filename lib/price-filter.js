// قیمت‌ها در پایگاه داده رشته هستند؛ ارقام فارسی و جداکننده‌ها را نیز می‌پذیریم.
function priceInRange(value, range) {
  const normalized = String(value).replace(/[۰-۹٠-٩]/g, digit => {
    const code = digit.charCodeAt(0);
    return String(code >= 0x06f0 ? code - 0x06f0 : code - 0x0660);
  }).replace(/[,٬\s]/g, '');
  if (!/^\d+$/.test(normalized)) return false;
  const amount = Number(normalized);
  const [min, max] = range.split('-').map(Number);
  return amount >= min && (max === undefined || amount <= max);
}
module.exports = { priceInRange };

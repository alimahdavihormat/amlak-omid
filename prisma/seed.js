// افزودن محدوده‌ها بدون حذف یا تغییر اطلاعات موجود
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  let city = await prisma.city.findFirst({ where: { name: 'پرند' } });
  if (!city) city = await prisma.city.create({ data: { name: 'پرند' } });
  for (const name of ['فاز ۰', 'فاز ۱', 'فاز ۲', 'فاز ۳', 'فاز ۴', 'فاز ۵', 'فاز ۶', 'فاز ۷', 'فاز ۸', 'فاز ۹']) {
    const existing = await prisma.cityArea.findFirst({ where: { cityId: city.id, name } });
    if (!existing) await prisma.cityArea.create({ data: { name, cityId: city.id } });
  }
  console.log('شهر پرند و محدوده‌های آن آماده هستند.');
}
main().catch((error) => { console.error(error); process.exitCode = 1; }).finally(() => prisma.$disconnect());

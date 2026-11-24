import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { priceInRange } from '../../../lib/price-filter';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ errors: ['روش درخواست مجاز نیست.'] });
  const { cityId, cityAreaId, type, roomCount, meter, assignmentType, price } = req.body;
  const where: any = { isActive: true, city: { name: 'پرند' } };
  for (const [key, value] of Object.entries({ cityId, cityAreaId, type, roomCount, meter, assignmentType })) {
    if (typeof value === 'string' && value) where[key] = value;
  }
  try {
    let items = await prisma.realEstate.findMany({ where, include: { cityArea: { select: { name: true } }, city: { select: { name: true } }, agency: { select: { name: true, agencyImage: true } } }, orderBy: { createdAt: 'desc' } });
    // قیمت در ساختار فعلی به صورت رشته ذخیره می‌شود؛ مقایسه عددی انجام می‌دهیم.
    if (typeof price === 'string' && /^\d+(?:-\d+)?$/.test(price)) {
      items = items.filter(item => priceInRange(item.price, price));
    }
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ errors: ['دریافت آگهی‌ها امکان‌پذیر نیست.'] });
  }
}

import { Accordion } from 'react-bootstrap';
import AccordionFaq from './AccordionFaq';
export default function FaqContent() {
  return <div className="shadow-es rounded-3 p-4"><h3 className="h5 mb-4">پرسش‌های متداول املاک امید</h3><Accordion>
    <AccordionFaq number="0" title="املاک امید چه محدوده‌ای را پوشش می‌دهد؟" discription="جست‌وجو و ثبت آگهی برای شهر پرند و فازهای آن در نظر گرفته شده است." />
    <AccordionFaq number="1" title="چگونه ملک مناسب را پیدا کنم؟" discription="در صفحه اصلی یا صفحه خرید و اجاره، فاز و سایر مشخصات موردنظر خود را انتخاب و جست‌وجو کنید. سپس برای کسب اطلاعات بیشتر با آگهی‌دهنده تماس بگیرید." />
    <AccordionFaq number="2" title="چگونه آگهی ثبت کنم؟" discription="از گزینه ثبت آگهی وارد حساب کاربری خود شوید و مشخصات ملک را وارد کنید." />
  </Accordion></div>;
}

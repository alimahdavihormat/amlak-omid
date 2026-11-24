import { Container } from 'react-bootstrap';
import BgTop from '../components/bgTop/BgTop';
export default function About() {
  return <div className="mt-5"><BgTop img="/img/bg-about.png" content="درباره املاک امید" /><Container className="py-5 lh-lg"><h2 className="h4">همراه شما در جست‌وجوی ملک در پرند</h2><p>املاک امید بستری برای جست‌وجوی آگهی‌های خرید، فروش، رهن و اجاره ملک در پرند است. می‌توانید بر اساس فاز، نوع ملک، متراژ و بودجه، آگهی مناسب خود را پیدا کنید.</p><p>مالک‌ها و مشاوران املاک نیز می‌توانند پس از ورود به حساب کاربری، اطلاعات ملک خود را ثبت کنند. پیش از هر معامله، اطلاعات آگهی و مدارک ملک را با دقت بررسی کنید.</p></Container></div>;
}

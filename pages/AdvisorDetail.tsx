import Link from 'next/link';
import { Container } from 'react-bootstrap';
export default function Page() {
  return <Container className="pt-5 mt-5 pb-5 text-center"><h1 className="h4">جست‌وجوی آگهی‌های پرند</h1><p>برای مشاهده اطلاعات واقعی هر ملک، آگهی مورد نظر خود را انتخاب کنید.</p><Link href="/Buy"><a className="btn btn-es">مشاهده آگهی‌ها</a></Link></Container>;
}

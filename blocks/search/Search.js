import { Button, Form } from 'react-bootstrap';
import SingleSelect from '../../components/SingleSelect';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCityApi, getCityAreaByIdApi } from '../../api';

export default function Search({ defaultAssignment = '' }) {
  const router = useRouter();
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [areas, setAreas] = useState([]);
  const [cityError, setCityError] = useState(false);
  useEffect(() => {
    axios.get(getCityApi, { params: { name: 'پرند' } }).then(({ data }) => {
      const parand = data.find(item => item.name === 'پرند');
      if (parand) setCity(parand.id); else setCityError(true);
    }).catch(() => setCityError(true));
  }, []);
  useEffect(() => {
    if (!city) return;
    axios.get(getCityAreaByIdApi, { params: { cityId: city } }).then(({ data }) => setAreas(data)).catch(() => setCityError(true));
  }, [city]);
  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const query = new URLSearchParams({ cityId: city, cityAreaId: area, type: form.type.value, roomCount: form.roomCount.value, meter: form.meter.value, assignmentType: form.assignmentType.value, price: form.price.value });
    router.push('/Search?' + query.toString());
  }
  return <Form className="Search row pt-4" onSubmit={submit}>
    <Form.Group className="mb-3 col-sm-6 col-11 mx-auto"><Form.Label>شهر</Form.Label><Form.Control value="پرند" readOnly aria-label="شهر" /></Form.Group>
    <Form.Group className="mb-3 col-sm-6 col-11 mx-auto"><Form.Label>فاز یا محدوده</Form.Label><Form.Select aria-label="فاز یا محدوده" value={area} onChange={e => setArea(e.target.value)}><option value="">همه محدوده‌ها</option>{areas.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</Form.Select></Form.Group>
    <SingleSelect val={[{title:'آپارتمان',val:'a'},{title:'اداری / تجاری',val:'c'},{title:'ویلایی / باغ',val:'v'},{title:'زمین / کلنگی',val:'l'},{title:'مستقلات / پنت‌هاوس',val:'i'}]} name="type" title="نوع ملک" myClass="col-sm-4 col-11 mx-auto" />
    <SingleSelect val={[{title:'۱',val:'one'},{title:'۲',val:'two'},{title:'۳',val:'three'},{title:'۴',val:'four'},{title:'۵',val:'five'}]} name="roomCount" title="تعداد خواب" myClass="col-sm-4 col-11 mx-auto" />
    <SingleSelect val={[{title:'۱۰ تا ۹۰ متر',val:'m10'},{title:'۹۰ تا ۱۵۰ متر',val:'m90'},{title:'۱۵۰ تا ۲۲۰ متر',val:'m150'},{title:'۲۲۰ متر به بالا',val:'m220'}]} name="meter" title="متراژ" myClass="col-sm-4 col-11 mx-auto" />
    <div className="mb-3 col-sm-6 col-11 mx-auto"><Form.Select name="assignmentType" aria-label="نوع واگذاری" defaultValue={defaultAssignment}><option value="">نوع واگذاری - همه</option><option value="forSale">خرید</option><option value="rental">رهن و اجاره</option><option value="fastSale">فروش فوری</option></Form.Select></div>
    <SingleSelect val={[{title:'۱۰۰ تا ۵۰۰ میلیون تومان',val:'100000000-500000000'},{title:'۵۰۰ میلیون تا ۱٫۵ میلیارد تومان',val:'500000000-1500000000'},{title:'۱٫۵ تا ۳٫۵ میلیارد تومان',val:'1500000000-3500000000'},{title:'۳٫۵ تا ۵ میلیارد تومان',val:'3500000000-5000000000'},{title:'۵ میلیارد تومان به بالا',val:'5000000000'}]} name="price" title="قیمت" myClass="col-sm-6 col-11 mx-auto" />
    {cityError && <p className="text-danger text-center" role="alert">دریافت محدوده‌های پرند امکان‌پذیر نیست. لطفاً بعداً دوباره تلاش کنید.</p>}
    <div className="col-11 mx-auto text-center"><Button type="submit" disabled={!city} className="btn-es col-lg-3 col-md-4 col-12">جست‌وجوی ملک</Button></div>
  </Form>;
}

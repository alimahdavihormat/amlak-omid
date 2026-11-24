import Search from '../search/Search';
import { useRouter } from 'next/router';
export default function SearchRent() {
  const { pathname } = useRouter();
  return <div className="pt-5 mt-5 pb-3"><h1 className="h4 text-center">{pathname.startsWith('/Rent') ? 'رهن و اجاره ملک در پرند' : 'خرید ملک در پرند'}</h1><Search defaultAssignment={pathname.startsWith('/Rent') ? 'rental' : 'forSale'} /></div>;
}

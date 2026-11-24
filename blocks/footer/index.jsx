import {Container,Row,Col} from 'react-bootstrap';
import List from '../../components/list/List'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram,faFacebook,faPinterest} from '@fortawesome/free-brands-svg-icons'
function Footer() {
  const list1 = [
        {
          'title': 'درباره ما',
          'href' : '/About',
        },
        {
          'title': 'ارتباط‌ باما',
          'href' : '/Contact',
        },
        {
          'title': 'مجله املاک',
          'href' : '/Articles',
        },
        {
          'title': 'تبلیغات',
          'href' : '/AdvisorDetail',
        },
      
  ];
  const list2 = [
    {
      'title': 'ورود و ثبت‌‌نام مشاورین املاک',
      'href' : '/signin?goTo=/profile/agency'
    },
    {
      'title':'ورود و ثبت‌نام کاربر',
      'href' : '/signin?goTo=/'
    },
    {
      'title':'قوانین درج‌ ‌آگهی',
      'href' : '/Rules'
    },
    {
      'title': 'سوالات متداول',
      'href' : '/Faq'
    },
  ];
  return (
        <Container fluid className='Footer bg-light mt-5 px-lg-4 pt-3'>
          <Row>
            <Col md={4} sm={12} className='border-start border-3'>
              <List lists={list1}/>
            </Col>
            <Col md={4} sm={12} className='border-start border-3'>
              <List lists={list2}/>
            </Col>
            <Col md={4} sm={12} className='py-3'><h2 className="h5">املاک امید پرند</h2><p>جست‌وجوی خرید، فروش و اجاره ملک در فازهای پرند</p></Col>
            <Col sm={12} className='pt-3 px-4'>
              <div className='d-flex flex-md-row flex-column text-sm-center justify-content-md-between border-top border-3 pt-3'>
                  <p className='text-sm-center'>کلیه حقوق این سایت متعلق به گروه املاک امید است.</p>

              </div>
            </Col>
          </Row>
        </Container>
  );
}

export default Footer;




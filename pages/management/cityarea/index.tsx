
    import {useState,useEffect,useContext} from 'react';
    import axios from 'axios';
    import { toast } from 'react-toastify';
    import { context } from "../../../context";
    import Table from 'react-bootstrap/Table';
    import FormModal from '../../../components/modal';
    import Form from 'react-bootstrap/Form';
    const cityArea = ()=> {
        
        const { setShowLoading } = useContext(context);
        const [cityAreaList,setcityAreaList] = useState([]);
        const [modalShow, setModalShow] = useState(false);
        const [modalObj, setModalObj] = useState(null);
        
        const [citySearchList, setcitySearchList] = useState([]);

        let searchTimeOut = null;
        useEffect(()=>{
           get({});
        },[])
        function getFilters(){
            return ''
        }
        function get(filters){

                    setShowLoading(true);
                    axios.get('/api/cityArea'+getFilters()).then((res) => {
                setcityAreaList(res.data)
                if (res.status === 200) {
                    setShowLoading(false);
                 // setPageCount(res.data.count / itemsPerPage)
                }
              })
                .catch((err) => {
                  if (err.response?.data) {
                    err?.response?.data?.errors?.map(issue => toast.error(issue));
                  } else {
                    toast.error('مشکلی پیش آمده است !')
                  }
                  setShowLoading(false);
                })
          
        }
        function remove(data){
            axios.delete('/api/cityArea?id='+data.id).then((res) => {
                get({});
            })
        }
 
        function upsert(){
            let submitForm = document.getElementById('submitForm')
            let formData = new FormData(submitForm);
            modalObj?.id && formData.append('id',modalObj.id)
            console.log('ok')
            let object = {};
            formData.forEach((value, key) => object[key] = value);
            axios.post('/api/cityArea',object).then((res) => {
                setModalShow(false);
                get({});
            })
        }
     
        function search(value,field,searchTableName){
            clearTimeout(searchTimeOut);
            searchTimeOut = setTimeout(() => {
                axios.get(`/api/${searchTableName}/search?text=`+value).then((res) => {
                    console.log(res.data)
                    eval(`
                        set${field}SearchList(res.data)
                    `)
                })
            }, 1000);
        }
        function openDialoge(obj){
            if(obj)
                setModalObj(obj);
            setModalShow(true)
        }
        function closeDialoge(){
            setModalObj({});
            setModalShow(false)

        }
       
        return (
            <>
            <div className="p-2 pt-5">
                <h2 >محدوده
                <button className="ms-2 me-2" onClick={() => openDialoge()}>+</button>
                </h2>
               
            </div>
            <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">نام</th>
<th scope="col">شهر</th>
<th scope="col">ملک</th>
<th scope="col">مشاور املاک</th>
<th scope="col">تاریخ ایجاد</th>

        <th scope="col">عملیات</th>

                </tr >
            </thead >
            <tbody>
            {
                cityAreaList?.map((data,i)=>{
                    return (
                        <tr>
                        <td scope="row">{i}</td>
                        <td>{data.name}</td>
<td>{data.city}</td>
<td>{data.realEstate}</td>
<td>{data.agency}</td>
<td>{data.createdAt}</td>

                        <td scope="row">
                            <button className='btn btn-success' onClick={()=>{remove(data)}}> حذف </button>
                            <button className='btn btn-danger' onClick={()=>{openDialoge(data)}}> ویرایش </button>
                        </td>
                    </tr>
                    )
                })
            }
            
                
            </tbody>
        </Table>
        
        <FormModal
        show={modalShow}
        onCancel={() => closeDialoge()}
        onSave={upsert}
        title="add/edit cityArea"
    >
    <Form dir='rtl' name="submitForm" id="submitForm">
        
                <Form.Group className="mb-3" controlId="name">
                <Form.Label>نام</Form.Label>
                <Form.Control value={modalObj?.name} name="name" type="string" placeholder="نام را وارد کنید" />
                </Form.Group>
                

            <input className="form-control" placeHolder="city"  name="searchcity" onChange={(e)=>{search(e.target.value,'city','city')}}/>
            <select  className="form-select" multiple aria-label="multiple select example" name="cityId">
            {
                citySearchList.map((e)=>{
                    return ` <option value="${e.id}">e.name</option>`
                })

            }
           
          </select>
            
    </Form>
    </FormModal>
        </>
        )
    }
    export default cityArea;
    
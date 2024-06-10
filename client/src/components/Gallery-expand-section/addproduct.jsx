import React, { useEffect } from 'react'
import { Button, Container, Form, Row,Col } from 'react-bootstrap'
import { useState } from 'react'
import AXIOS from 'axios';
import Addcategory from './addcategory';

export default function Addproduct() {
  const [record,setRecord]=useState({})
  const [cate,setCate]=useState([])
  useEffect(()=>{
    const url="http://localhost:9000/getcategory";
     AXIOS.get(url)
     .then((res)=>{
            setCate(res.data.record)
     })
  })
  const formdata=new FormData()
    const setValue=(field,value)=>{ 
        setRecord({...record,[field]:value})

    }
    const handlersubmit=(e)=>{
      e.preventDefault();
      const url="http://localhost:9000/addproduct";
      formdata.append("image",record.image)
      formdata.append("productname",record.productname)
      formdata.append("title",record.title)
      formdata.append("description",record.description)
      formdata.append("price",record.price)
      formdata.append("category",record.category)
      AXIOS.post(url,formdata,{headers:{'Content-Type':'multipart/form-data'}}).then(
          (res)=>{
                 alert(res.data)
                 window.location.reload();
          }
      )

  }
  return (
    <>
   <Container>
    <Row>
      <Col>
      <Addcategory/>
      </Col>
    </Row>
    <Row>
        <Col>
        <Form onSubmit={handlersubmit} encType='multipart/form-data'> 
        <Form.Group className='mt-4'>

        <Form.Control className='fw-bold' type="file" name="image" onChange={(e)=>{
            setValue(e.target.name,e.target.files[0])
          }} />

        </Form.Group>
        <Form.Group className='mt-4'>

<Form.Control className='fw-bold' type="text" name="productname" onChange={(e)=>{
    setValue(e.target.name,e.target.value)
  }} placeholder='product name'/>
  
</Form.Group>
<Form.Group className='mt-4'>

<Form.Control className='fw-bold' type="text" name="title" onChange={(e)=>{
    setValue(e.target.name,e.target.value)
  }} placeholder='Title'/>
  
</Form.Group>
<Form.Group className='mt-4'>

<Form.Control as="textarea" className='fw-bold' name="description" onChange={(e)=>{
    setValue(e.target.name,e.target.value)
  }} placeholder='description'/>
  
</Form.Group>
<Form.Group className='mt-4'>

<Form.Control className='fw-bold' type="text" name="price" onChange={(e)=>{
    setValue(e.target.name,e.target.value)
  }} placeholder='Price'/>
  
</Form.Group>
<Form.Group className='mt-4'>
<Form.Select className='fw-bold' name="category" onChange={(e)=>{
    setValue(e.target.name,e.target.value)
  }} required>
  <option>select category</option>
  {
    cate.map((ls)=>{
      return(
        <option value={ls._id}>{ls.catname}</option>
      )

    })
  }

    </Form.Select>
   
</Form.Group>

<Form.Group>
    <Button variant='info' type="submit" className='mt-4'>
        upload
    </Button>
</Form.Group>
         

        </Form>
        </Col>
    </Row>
   
 </Container>
    
    </>
  )
}

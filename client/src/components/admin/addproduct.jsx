import React from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import { useState } from 'react';
import AXIOS from 'axios';
import Webheader from "../webheader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function AddProduct() {

  const[record,setRecord]=useState({});
  const[errors,setErrors]=useState({});
  const formdata=new FormData();
const catid=sessionStorage.getItem('categoryid')



  const setValue=(field,value)=>{
    setRecord({...record,[field]:value})
    if(!!errors[field]){ setErrors({
      ...errors,[field]:null
    })
  }
  }

  //validation
  const findErrors=()=>{
    const{pname,pqty,type,img,pprice,pmrp,mfdate,exdate}=record;
    const newErrors={}

    if(!pname||pname==="")newErrors.pname='cannot be blank!'
      
      if(!pqty||pqty==="")newErrors.pqty='cannot be blank!' 
      
      if(!type||type==="")newErrors.type='cannot be blank!'

      if(!img||img==="")newErrors.img='cannot be blank!'

      if(!pprice||pprice==="")newErrors.pprice='cannot be blank!' 

      if(!pmrp||pmrp==="")newErrors.pmrp='cannot be blank!' 

      if(!mfdate||mfdate==="")newErrors.mfdate='cannot be blank!' 
    
      if(!exdate||exdate==="")newErrors.exdate='cannot be blank!' 


      return newErrors;
  }

const handlerSubmit=(e)=>{
  e.preventDefault();
 const newErrors=findErrors();
  if(Object.keys(newErrors).length>0){
    setErrors(newErrors);
  }
  else{
    const url=`https://abeesinteriors-server.onrender.com/addproduct/${catid}`;
    
    formdata.append("pname",record.pname)
    formdata.append("pqty",record.pqty)
    formdata.append("type",record.type)
    formdata.append("img",record.img)
    formdata.append("pprice",record.pprice)
    formdata.append("pmrp",record.pmrp)
    formdata.append("mfdate",record.mfdate)
    formdata.append("exdate",record.exdate)
    AXIOS.post(url,formdata,{headers:{'Content-Type':'multipart/form-data'}}).then(
      (res)=>{
             toast.success(res.data.msg)
  })
}
}

  return (
    <>
      <Form onSubmit={handlerSubmit} encType='multipart/form-data'>
        <Container>
          <Row className='justify-content-center '>
            <Col lg={5} className='p-3 bg-dark '>
              <h1 className='text-center text-light text-shadow '>ADD-PRODUCT</h1>
            </Col>
          </Row>

          <Row className='justify-content-center'>
            <Col lg={5} className='border p-3 mb-2 bg-light shadow'>
              <Row className='mb-3'>
                <Col md="6">
                  <FloatingLabel controlId="floatingInputGrid1" label="Product Name" className='mb-2'>
                    <Form.Control type="text" name='pname' onChange={(e)=>{
                      setValue(e.target.name,e.target.value)
                    }}  isInvalid={!!errors.pname}placeholder="Product Name" />
                    {record.pname}
                    <Form.Control.Feedback type='invalid'>
                      {errors.pname}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                  
                </Col>
                <Col md="6">
                  <FloatingLabel controlId="floatingInputGrid2" label="Product Qty" className='mb-2'>
                    <Form.Control type="number" name='pqty'onChange={(e)=>{
                      setValue(e.target.name,e.target.value)
                    }}  isInvalid={!!errors.pqty} placeholder="Product Quantity" />
                    {record.pqty}
                    <Form.Control.Feedback type='invalid'>
                      {errors.pqty}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
              </Row>

              <FloatingLabel controlId="floatingSelectGrid" label="Select" className='mb-3'>
                <Form.Control as="select" name='type'  onChange={(e)=>{
                      setValue(e.target.name,e.target.value)
                    }} isInvalid={!!errors.type} >
                  <option>--Type--</option>
                  <option value="Furnitures">Furnitures</option>
                  <option value="Lighting">Lighting</option>
                  <option value="Curtains">Curtains & Blinds</option>
                  <option value="Wall coverings">Wall coverings</option>
                </Form.Control>
                {record.type}
                <Form.Control.Feedback type='invalid'>
        { errors.type }
    </Form.Control.Feedback>
              </FloatingLabel>
              
        <FloatingLabel controlId="floatingInputGrid3" label="Image" className='mb-5'>
        <Form.Control type="file" size="sm" name="img" onChange={(e)=>{
            setValue(e.target.name,e.target.files[0])
          }} isInvalid={!!errors.img}  />
          <Form.Control.Feedback type='invalid'>
        { errors.img }
    </Form.Control.Feedback>
        </FloatingLabel>
              <Row className='mb-3'>
                <Col md="6">
                  <FloatingLabel controlId="floatingInputGrid3" label="Product Price" className='mb-2'>
                    <Form.Control type="number" name='pprice' onChange={(e)=>{
                      setValue(e.target.name,e.target.value)
                    }} isInvalid={!!errors.pprice} placeholder="Product Price" />
                    {record.pprice}
                    <Form.Control.Feedback type='invalid'>
                      {errors.pprice}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
                <Col md="6">
                  <FloatingLabel controlId="floatingInputGrid4" label="Product MRP" className='mb-2'>
                    <Form.Control type="number" name='pmrp' onChange={(e)=>{
                      setValue(e.target.name,e.target.value)
                    }} isInvalid={!!errors.pmrp} placeholder="Product MRP" />
                    {record.pmrp}
                    <Form.Control.Feedback type='invalid'>
                      {errors.pmrp}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className='mb-3'>
                <Col md="6">
                  <FloatingLabel controlId="floatingInputGrid5" label="Manufacturing Date" className='mb-2'>
                    <Form.Control type="date" name='mfdate' onChange={(e)=>{
                      setValue(e.target.name,e.target.value)
                    }} placeholder="mfdate" />
                    {record.mfdate}
                  </FloatingLabel>
                </Col>
                <Col md="6">
                  <FloatingLabel controlId="floatingInputGrid6" label="Expiry Date" className='mb-2'>
                    <Form.Control type="date" onChange={(e)=>{
                      setValue(e.target.name,e.target.value)
                    }} name='exdate' placeholder="exdate"/>
                    {record.exdate}
                  </FloatingLabel>
                </Col>
              </Row>
              <Form.Group>
                <Button type="submit" name='submit' className='mt-3 me-1' variant='outline-success'>Submit</Button>
                <Button type="Reset" className='mt-3' variant='outline-info'>Reset</Button>
              </Form.Group>
            </Col>
          </Row>
          <ToastContainer position="bottom-center" theme="dark" />
        </Container>
      </Form>
    </>
  );
}
import  AXIOS  from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Adminlog() {
  const nav=useNavigate();
  const [form,setForm]=useState({})
  function setValue(field,value){
        setForm({...form,[field]:value})
  }
  function sign(e){
    alert('hello')
    e.preventDefault();
    if(form.username=="admin"){
     nav('/adminpage')
    }
  }
      return (
    <>
       <Container>
        <Row className='justify-centent-center p-3 mt-3'>
          <Col lg={6} className='border rounded shadow'>
            <Form onSubmit={sign}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" onChange={(e)=>{
                  setValue(e.target.name,e.target.value)
                }} required/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" name="password" onChange={(e)=>{
                  setValue(e.target.name,e.target.value)
                }} required/>
              </Form.Group>
              <Form.Group>
                <Button type="submit">
                  Login
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
       </Container>
    </>
 
  )
}

export default Adminlog
import React from 'react'
import AXIOS from 'axios';
import {useState} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
export default function Addcategory() {
    const [cat,setCat]=useState("");
    const handler=(e)=>{
        e.preventDefault();
       const url="http://localhost:9000/addcategory";
       AXIOS.post(url,{'catname':cat})
       .then((res)=>{
           alert(res.data)
       })
   

    }
  return (
 <>
<Container>
    <Row>
        <Col>
        <Form onSubmit={handler}>
            <Form.Group>
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" onChange={(e)=>{setCat(e.target.value)}}></Form.Control>
                {cat}
                <br>
                </br>
                <Button type="submit" variant='success'>Create Category</Button>
            </Form.Group>
        </Form>
        </Col>
    </Row>
</Container>
 </>
  )
}

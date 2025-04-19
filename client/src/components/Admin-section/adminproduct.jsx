import React from 'react'
import {useState,useEffect} from 'react'
import AXIOS from 'axios'
import sty from '../Gallery-expand-section/prd.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
export default function Productview() {
    const[change,setChange]=useState("Table")
    const [product,setProduct]=useState([])
  

    const [cate,setCate]=useState([])
    useEffect(()=>{
      const url="http://localhost:9000/api/getcategory";
       AXIOS.get(url)
       .then((res)=>{
              setCate(res.data.record)
       })
    },[])
    useEffect(()=>{
      
        const url="http://localhost:9000/api/fetchallprd";
       AXIOS.get(url)
       .then((res)=>{
              setProduct(res.data)
       })
      },[cate])
  return (
   <>
   <Container>
 <Row>
    <Col>
        {
            cate.map((ls)=>{
                  return(
                    <button type="button" key={ls._id} className={sty.btn} onClick={()=>setChange(ls.catname)}>
                        {ls.catname}
                    </button>
                  )
            })
        }
    </Col>
 </Row>

   </Container>
   <div className={sty.wrapper}>
    {

        product
        
        .map((ls)=>{
           return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://abeesinteriors-server.onrender.com/${ls.image}`} />
            <Card.Body>
              <Card.Title>{ls.title}</Card.Title>
              <Card.Text>
              {ls.description}
              
              </Card.Text>
              <Card.Text>
              &#8377; {ls.price}
             
              </Card.Text>
              <button >Go somewhere</button>
            </Card.Body>
          </Card>
           )
        })
    }


   </div>
   
   
   
    </>
  )
}

import React from 'react';
import {Link} from 'react-router-dom'
import kitchen from '../images/kitchen.jpg';
import kidsBed from '../images/kids-bed.jpg';
import furniture from '../images/furniture.jpg';
import diningTable from '../images/dining-table.jpg';
import {useState,useEffect} from 'react'
import AXIOS from 'axios'
import sty from '../Gallery-expand-section/prd.module.css'
import './Section5.css';

function Section5() {
  const[change,setChange]=useState("Table")
    const [product,setProduct]=useState([])
  

    const [cate,setCate]=useState([])
    useEffect(()=>{
      const url="http://localhost:9000/getcategory";
       AXIOS.get(url)
       .then((res)=>{
              setCate(res.data.record)
       })
    },[])
    useEffect(()=>{
      
        const url="http://localhost:9000/fetchallprds";
       AXIOS.get(url)
       .then((res)=>{
              setProduct(res.data)
       })
      },[cate])
  return (
  <>
  <div className='container'>
  <div className='row text-center'>
    <h2>Gallery</h2>
  </div>
  <div className="row row-cols-1 row-cols-md-3 g-4 ">
  {

product

.map((ls)=>{
   return(
      <div className="col">
        <div className="card">
          <img src={ls.image} className="card-img-top gallery-img" alt="..." />
          <div className="card-body">
            <h3 className="card-title text-center">Kitchen</h3>
            <div className="btn btn-primary"><Link className='text-light text-decoration-none' to='/kitchen-gallery'>more...</Link></div>
          </div>
        </div>
      </div>
 )
})
}
      <div className="col">
        <div className="card">
          <img src={furniture} class="card-img-top gallery-img" alt="..." />
          <div className="card-body">
            <h3 className="card-title text-center">Furniture</h3>
            <div className="btn btn-primary">more..</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={kidsBed} class="card-img-top gallery-img" alt="..." />
          <div className="card-body">
            <h3 className="card-title text-center">Kids Bed</h3>
            <div className="btn btn-primary">more..</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={diningTable} class="card-img-top gallery-img" alt="..." />
          <div className="card-body">
            <h3 className="card-title text-center">Dining Table</h3>
            <div className="btn btn-primary">more..</div>
            </div>
        </div>
      </div>
    </div>
  </div>
    
  </>
  )
}

export default Section5
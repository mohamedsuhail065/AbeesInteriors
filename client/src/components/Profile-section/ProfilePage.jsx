import {React,useContext} from 'react'
import { profileContext } from '../../Contexts/context'
import { Col, Container, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Addproduct from '../Gallery-expand-section/addproduct'
import Displayproduct from '../Gallery-expand-section/displayproduct'
import Productview from './productview'
import Userheader from './userheader'
import KitchenGallery from '../Gallery-expand-section/KitchenGallery'

function ProfilePage() {

  const {data} =useContext(profileContext)
  return (
  <>
  <Userheader/>
   <Container>
    <Row>
      <Col lg={2}>
       
     <p>
      
    
     </p>
     
      </Col>
      <Col lg={10}>
       <KitchenGallery/>

        <Routes>
          <Route path="/addproduct" element={<Addproduct/>}/>
          <Route path="/pdisplay" element={<Productview/>}/>
       
        </Routes>
      </Col> 
    </Row> 
   </Container>
  </>
  )
}

export default ProfilePage
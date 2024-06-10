import React from 'react'
import '../Top-Section/Section1.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { Routes, Route, Link } from 'react-router-dom';
import logo from '../images/logo.jpeg'

export default function Userheader() {
  return (
   <>
      <div className='container-fluid top-container'>
        <div className='nav-1 row'>

        </div>
        <div className='row bg-dark' style={{ 'height': '60px' }}>

        </div>
        <div className='row nav-'>
          <Navbar className='nav-3 col-lg-10  m-auto ' variant="dark">
            <Container>
              <Navbar.Brand href="#home"><img className='logo-image' src={logo} alt='logo' /></Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav.Link ><Link to='/userpage'>Home</Link></Nav.Link>
                {/* <Nav.Link ><Link to='/register'>Register</Link></Nav.Link>
                <Nav.Link ><Link to='/login'>Login</Link></Nav.Link> */}
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
   
   </>
  )
}

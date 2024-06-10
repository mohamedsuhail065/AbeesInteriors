import React from 'react'
import '../Top-Section/Section1.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { Routes, Route, Link } from 'react-router-dom';
import logo from '../images/logo.jpeg'

export default function Adminheader() {
  return (
   <>
      <div className='container-fluid top-container'>
        <div className='nav-1 row'>

        </div>
        <div className='bg-dark flex-grow-1 d-flex align-items-center'>

        </div>
        <div className='row nav-'>
        <Navbar className='nav-3 col-lg-10  m-auto ' variant="dark">
            <Container>
              <Navbar.Brand href="#home"><img className='logo-image' src={logo} alt='logo' /></Navbar.Brand>
              <Nav className="justify-content-end">
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav.Link href='/adminpage'>Home</Nav.Link>
                <Nav.Link href='/logout'>Logout</Nav.Link>
                {/* <Nav.Link ><Link to='/register'>Register</Link></Nav.Link>
                <Nav.Link ><Link to='/login'>Login</Link></Nav.Link> */}
                </Navbar.Collapse>
              </Nav>
            </Container>
          </Navbar>
        </div>
      </div>
   
   </>
  )
}

import React from 'react'
import './Section1.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavDropdown from "react-bootstrap/NavDropdown";
import { Routes, Route, Link } from 'react-router-dom';
import logo from '../images/logo.jpeg'

export default function Header() {
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
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Register" id="basic-nav-dropdown">
              <NavDropdown.Item href="Userregister">User</NavDropdown.Item>
              <NavDropdown.Item href="Supplieregister">
                Supplier
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="Adminregister">Admin</NavDropdown.Item> */}
            </NavDropdown>
                <Nav.Link href='/login'>Login</Nav.Link>
                </Navbar.Collapse>
              </Nav>
              
            </Container>
          </Navbar>
        </div>
      </div>
   
   </>
  )
}

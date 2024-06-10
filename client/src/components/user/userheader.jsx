import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.jpeg'
import Nav from 'react-bootstrap/Nav';

export default function Userheader(){
  return(
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
                <Nav.Link href="/userpage">Home</Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
                </Navbar.Collapse>
              </Nav>
              
            </Container>
          </Navbar>
        </div>
      </div>
    </>
  )
}
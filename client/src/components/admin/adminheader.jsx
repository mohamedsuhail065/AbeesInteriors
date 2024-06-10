import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Adminheader(){
  return(
    <>
        <Navbar  className="bg-success">
        <Container fluid>
          <Navbar.Brand href="#home">
            <h1 style={{color:"white"}} >Abees Interiors</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
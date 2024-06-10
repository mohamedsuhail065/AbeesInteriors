import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./logo.jpeg";
import { red } from "@mui/material/colors";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-success">
      <Container className="bg-light shadow">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          &nbsp;&nbsp;Abees Interior
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="fw-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Register" id="basic-nav-dropdown">
              <NavDropdown.Item href="Userregister">User</NavDropdown.Item>
              <NavDropdown.Item href="Supplieregister">
                Supplier
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="Adminregister">Admin</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="Userlogin">Login</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
              <NavDropdown.Item href="Contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

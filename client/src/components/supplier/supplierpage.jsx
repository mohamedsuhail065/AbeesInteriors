import { Container, Row, Col, Nav } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Supplierheader from "./supplierheader";
import Orderview from "../supplier/orderview";
import Delivery from "./delivery";
import Sprofile from "./sprofile";

export default function Supplierpage() {
  return (
    <>
  <Supplierheader/>
      <Container fluid>
        <Row>
          <Col lg={2} style={{ height: '100vh' }} className="bg-light shadow">
            <Nav defaultActiveKey="/home" className="flex-column">
              {/* Use Link component instead of anchor tags */}
              <Nav.Link href="/supplierpage/delivery" className="text-dark rounded bg-info mt-2 just justify-content-center">Delivery details</Nav.Link>
              {/* <Nav.Link href="/userp/productview" className="text-dark rounded bg-info mt-2 just justify-content-center">PRODUCTS</Nav.Link> */}
              <Nav.Link href="/supplierpage/orderview" className="text-dark rounded bg-info mt-2 just justify-content-center">Orders</Nav.Link>
              <Nav.Link href="/supplierpage/sprofile" className="text-dark rounded bg-info mt-2 just justify-content-center">Profile</Nav.Link>
              
            </Nav>
          </Col>
          <Col lg={10}>
            <Routes> 
              <Route path="/delivery" element={<Delivery/>}/>
              <Route path="/orderview" element={<Orderview/>}/>
              <Route path="/sprofile" element={<Sprofile/>}/>
              {/* <Route path="/productview" element={<Productview/>}/> */}
            </Routes>
          </Col>
        </Row>
      </Container>

    </>
  );
}

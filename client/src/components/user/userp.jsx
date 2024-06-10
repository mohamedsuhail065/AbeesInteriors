import { Container, Row, Col, Nav } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Profile from "./profile";
import Userheader from "./userheader";
import KitchenGallery from "../Gallery-expand-section/KitchenGallery";
import OrderViewer from "../supplier/orderview";
export default function Emppage() {
  return (
    <>
      <Userheader />
      <Container fluid>
        <Row>
          <Col lg={2} style={{ height: "100vh", background: "black" }}>
            <Nav defaultActiveKey="/home" className="flex-column">
              {/* Use Link component instead of anchor tags */}
              <Nav.Link
                href="/userp/store"
                className="text-dark rounded bg-info mt-2 just justify-content-center"
              >
                Products
              </Nav.Link>
              {/* <Nav.Link href="/userp/productview" className="text-dark rounded bg-info mt-2 just justify-content-center">PRODUCTS</Nav.Link> */}
              <Nav.Link
                href="/userp/orderview"
                className="text-dark rounded bg-info mt-2 just justify-content-center"
              >
                Orders
              </Nav.Link>
              <Nav.Link
                href="/userp/profile"
                className="text-dark rounded bg-info mt-2 just justify-content-center"
              >
                Profile
              </Nav.Link>
            </Nav>
          </Col>
          <Col lg={10}>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/orderview" element={<OrderViewer />} />
              <Route path="/store" element={<KitchenGallery/>}/>
              {/* <Route path="/productview" element={<Productview/>}/> */}
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

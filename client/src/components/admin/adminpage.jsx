import { Container, Row, Col, Nav, Card } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Adminheader from "./adminheader";
import Userview from "./userview";
import Supplierview from "./supplierview";
import AddProduct from "./addproduct";
import Editpoduct from "./editproducts";
import Aprofile from "./aprofile";
import Usersearch from "./usersearch";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Adminpage() {
  const [userData, setUserData] = useState({});
  const [supplierData, setSupplierData] = useState({});
  const [productData, setProductData] = useState({});
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersResponse = await axios.get("https://abeesinteriors-server.onrender.com/usersn"); // Assuming endpoint for users data
      const suppliersResponse = await axios.get("https://abeesinteriors-server.onrender.com/suppliersn"); // Assuming endpoint for suppliers data
      const productsResponse = await axios.get("https://abeesinteriors-server.onrender.com/productsn"); // Assuming endpoint for products data
      const ordersResponse = await axios.get("https://abeesinteriors-server.onrender.com/ordersn"); // Assuming endpoint for orders data

      setUserData(usersResponse.data);
      setSupplierData(suppliersResponse.data);
      setProductData(productsResponse.data);
      setOrderData(ordersResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
    <Adminheader/>
      <Container fluid>
        <Row>
          <Col lg={2} style={{ height: '100vh' }} className="bg-light shadow">
            <Nav defaultActiveKey="/home" className="flex-column">
              {/* Use Link component instead of anchor tags */}
              <Nav.Link href="/adminpage/userview" className="text-dark rounded bg-info mt-2 just justify-content-center">Users</Nav.Link>
              {/* <Nav.Link href="/userp/productview" className="text-dark rounded bg-info mt-2 just justify-content-center">PRODUCTS</Nav.Link> */}
              <Nav.Link href="/adminpage/supplierview" className="text-dark rounded bg-info mt-2 just justify-content-center">Suppliers</Nav.Link>
              <Nav.Link href="/adminpage/addproduct" className="text-dark rounded bg-info mt-2 just justify-content-center">Add Products</Nav.Link>
              <Nav.Link href="/adminpage/editproduct" className="text-dark rounded bg-info mt-2 just justify-content-center">Edit Product</Nav.Link>
              <Nav.Link href="/adminpage/aprofile" className="text-dark rounded bg-info mt-2 just justify-content-center">Profile </Nav.Link>
              {/* <Nav.Link href="/adminpage/usersearch" className="text-dark rounded bg-info mt-2 just justify-content-center">Search </Nav.Link> */}
              <Nav.Link href="/" className="text-dark rounded bg-info mt-2 just justify-content-center">Logout</Nav.Link>
              
            </Nav>
          </Col>
          <Col lg={10}>
            <Routes> 
              <Route path="/" element={<Adminpage/>}/>
              <Route path="/userview" element={<Userview/>}/>
              <Route path="/supplierview" element={<Supplierview/>}/>
              <Route path="/addproduct" element={<AddProduct/>}/>
              <Route path="/editproduct" element={<Editpoduct/>}/>
              <Route path="/aprofile" element={<Aprofile/>}/>
              <Route path="/usersearch" element={<Usersearch/>}/>
              {/* <Route path="/productview" element={<Productview/>}/> */}
            </Routes>
          </Col>
        </Row>
        <Row className="mt-4">
          <h1>H</h1>
          <Col>
            <Card className="bg-light shadow">
              <Card.Body>
                <h4 className="mb-3">Dashboard Overview</h4>
                <Row>
                  <Col md={3}>
                    <Card className="text-center bg-primary text-white p-3">
                      <h3>{userData.totalUsers}</h3>
                      <p>Total Users</p>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="text-center bg-success text-white p-3">
                      <h3>{supplierData.totalSuppliers}</h3>
                      <p>Total Suppliers</p>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="text-center bg-info text-white p-3">
                      <h3>{productData.totalProducts}</h3>
                      <p>Total Products</p>
                    </Card>
                  </Col>
                  <Col md={3}>
                    <Card className="text-center bg-warning text-white p-3">
                      <h3>{orderData.totalOrders}</h3>
                      <p>Total Orders</p>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}

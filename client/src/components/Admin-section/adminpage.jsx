import React, { useContext, useEffect, useState } from 'react';
import { profileContext } from '../../Contexts/context';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Addproduct from '../Gallery-expand-section/addproduct';
import Displayproduct from '../Gallery-expand-section/displayproduct';
import Adminheader from './adminheader';
import { Nav } from 'react-bootstrap';
import Userview from '../admin/userview';
import Supplierview from '../admin/supplierview';
import OrderView from './orders';
import axios from 'axios';
import AdminHome from './adminhome';

function AdminPage() {
  const [userData, setUserData] = useState({});
  const [supplierData, setSupplierData] = useState({});
  const [productData, setProductData] = useState({});
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersResponse = await axios.get('https://abeesinteriors-server.onrender.com/usersn'); // Assuming endpoint for users data
      const suppliersResponse = await axios.get('https://abeesinteriors-server.onrender.com/suppliersn'); // Assuming endpoint for suppliers data
      const productsResponse = await axios.get('https://abeesinteriors-server.onrender.com/productsn'); // Assuming endpoint for products data
      const ordersResponse = await axios.get('https://abeesinteriors-server.onrender.com/ordersn'); // Assuming endpoint for orders data

      setUserData(usersResponse.data);
      setSupplierData(suppliersResponse.data);
      setProductData(productsResponse.data);
      setOrderData(ordersResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const { data } = useContext(profileContext);
  return (
    <>
      <Adminheader />
      <Container>
        <Row>
          <Col lg={2} style={{ height: '100vh', background: 'black' }}>
            <Nav.Link href="/adminpage/userview" className="text-dark rounded bg-info mt-2 just justify-content-center">
              View Users
            </Nav.Link>
            <Nav.Link href="/adminpage/supplierview" className="text-dark rounded bg-info mt-2 just justify-content-center">
              View Suppliers
            </Nav.Link>
            <Nav.Link href="/adminpage/addproduct" className="text-dark rounded bg-info mt-2 just justify-content-center">
              Add product
            </Nav.Link>
            <Nav.Link href="/adminpage/display" className="text-dark rounded bg-info mt-2 just justify-content-center">
              Products
            </Nav.Link>
            <Nav.Link href="/adminpage/orders" className="text-dark rounded bg-info mt-2 just justify-content-center">
              Orders
            </Nav.Link>
          </Col>
          <Col lg={10} style={{ marginTop: '20px' }}>
            <Routes>
              <Route path="/" element={<AdminHome/>}/>
              <Route path="/userview" element={<Userview />} />
              <Route path="/supplierview" element={<Supplierview />} />
              <Route path="/addproduct" element={<Addproduct />} />
              <Route path="/display" element={<Displayproduct />} />
              <Route path="/orders" element={<OrderView />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminPage;

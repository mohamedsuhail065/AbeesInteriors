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

function AdminHome() {
  const [userData, setUserData] = useState({});
  const [supplierData, setSupplierData] = useState({});
  const [productData, setProductData] = useState({});
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersResponse = await axios.get('http://localhost:9000/usersn'); // Assuming endpoint for users data
      const suppliersResponse = await axios.get('http://localhost:9000/suppliersn'); // Assuming endpoint for suppliers data
      const productsResponse = await axios.get('http://localhost:9000/productsn'); // Assuming endpoint for products data
      const ordersResponse = await axios.get('http://localhost:9000/ordersn'); // Assuming endpoint for orders data

      setUserData(usersResponse.data);
      setSupplierData(suppliersResponse.data);
      setProductData(productsResponse.data);
      setOrderData(ordersResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return(
    <>
    <Container style={{ marginTop: '20px' }}>
        <Row>
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
  )
}
export default AdminHome;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaShippingFast } from 'react-icons/fa'; // Import shipping icon
import './OrderViewer.css'; // Import custom CSS for styling

const OrderViewer = () => {
  const [orders, setOrders] = useState([]);
  const userid = sessionStorage.getItem('userid');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`https://abeesinteriors-server.onrender.com/orders/${userid}`); // Update URL as needed
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleCancelOrder = async (orderId) => {
    // Show confirmation dialog
    const confirmCancel = window.confirm('Are you sure you want to cancel this order?');
    
    if (confirmCancel) {
      try {
        await axios.put(`https://abeesinteriors-server.onrender.com/cancelorder/${orderId}`, { status: 'Cancelled' });
        // Refetch orders after cancellation
        fetchOrders();
      } catch (error) {
        console.error('Error cancelling order:', error);
      }
    }
  };

  return (
    <Container className="order-viewer-container">
      <h1 className="text-center mb-4">My Orders</h1>
      {orders.map(order => (
        <Card key={order._id} className="mb-4">
          <Card.Body>
            <Card.Title className="order-id">Order ID: {order._id}</Card.Title>
            <Row>
              <Col md={6}>
                <Card.Text>Total Price: ${order.totalPrice}</Card.Text>
                <Card.Text>Address: {order.Address}</Card.Text>
                <Card.Text>Status: {order.Status}</Card.Text>
                <Card.Text>Payment Mode:{order.paymentmode}</Card.Text>
              </Col>
              <Col md={6} className="text-right">
                <FaShippingFast className="shipping-icon" /> {/* Shipping icon */}
              </Col>
            </Row>
            <hr />
            <h4 className="mt-3">Products:</h4>
            <ul className="product-list">
              {order.product.map(item => (
                <li key={item._id} className="product-item">
                  <div>
                    <p>Product Name: {item.productid.productname}</p>
                    <p>Quantity: {item.qty}</p>
                    <p>Total Price: ${item.totalprice}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* Conditionally render Cancel Order button */}
            {order.Status !== 'Delivered' && order.Status !== 'Cancelled' && (
              <Button variant="danger" onClick={() => handleCancelOrder(order._id)}>Cancel Order</Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default OrderViewer;

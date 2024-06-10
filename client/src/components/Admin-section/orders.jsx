import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { FaShippingFast } from "react-icons/fa"; // Import shipping icon

const OrderView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/ordersad/`); // Update URL as needed
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    const confirmed = window.confirm(`Are you sure you want to change the status to ${newStatus}?`);
    if (!confirmed) return; // If user cancels the confirmation, do nothing
    
    try {
      const response = await axios.put(
        `http://localhost:9000/order/${orderId}`,
        {
          status: newStatus,
        }
      );
      // Update orders state after status change
      fetchOrders();
      console.log(response.data); // Optional: Log the response
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <Container className="order-viewer-container">
      <h1 className="text-center mb-4">Orders</h1>

      {orders.map((order) => (
        <Card key={order._id} className="mb-4">
          <Card.Body>
            <Card.Title className="order-id">Order ID: {order._id}</Card.Title>
            <Row>
              <Col md={6}>
                <p>
                  Username: {order.product[0].userid.fname}{" "}
                  {order.product[0].userid.lname}
                </p>
                <Card.Text>Address: {order.Address}</Card.Text>
                <Card.Text>Total Price: ${order.totalPrice}</Card.Text>
                <Card.Text>Status: {order.Status}</Card.Text>
                <Form.Group controlId={`statusSelect${order._id}`}>
                  <Form.Label>Change Status:</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue={order.Status}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                  >
                    <option value="Ordered">Ordered</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} className="text-right">
                <FaShippingFast className="shipping-icon" />{" "}
                {/* Shipping icon */}
              </Col>
            </Row>

            <hr />
            <h4 className="mt-3">Products:</h4>
            <ul className="product-list">
              {order.product.map((item) => (
                <li key={item._id} className="product-item">
                  <div>
                    <p>Product Name: {item.productid.productname}</p>
                    <p>Quantity: {item.qty}</p>
                    <p>Total Price: ${item.totalprice}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default OrderView;

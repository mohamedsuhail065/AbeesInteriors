import React from "react";
import { useEffect, useState } from "react";
import AXIOS from "axios";
import { MdDeleteForever } from "react-icons/md";
import {
  Col,
  Container,
  Row,
  Table,
  Button,
  Form,
  Card,
  Collapse,
  Alert,
} from "react-bootstrap";
import { useHistory, useNavigate } from "react-router-dom";
function CartItems() {
  const [items, setItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const userid = sessionStorage.getItem("userid");
  const [dataform, setDataform] = useState([]);
  const [addressError, setAddressError] = useState("");
  const nav = useNavigate();
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  useEffect(() => {
    fetchCartItems();
  }, [userid]);

  const fetchCartItems = () => {
    AXIOS.get(`http://localhost:9000/cartview/${userid}`).then((res) => {
      setItem(res.data);
      // Calculate total amount when cart items are fetched or updated
      calculateTotalAmount(res.data);
    });
  };

  const calculateTotalAmount = (cartItems) => {
    const calculatedTotal = cartItems.reduce(
      (total, item) => total + parseFloat(item.totalprice),
      0
    );
    setTotalAmount(calculatedTotal);
  };

  const handleQuantityChange = (itemId, newQty) => {
    const updatedItems = items.map((item) =>
      item._id === itemId
        ? {
            ...item,
            qty: newQty,
            totalprice: newQty * parseFloat(item.productid.price),
          }
        : item
    );
    setItem(updatedItems);
    calculateTotalAmount(updatedItems);
  
    // Update quantity in the database
    const url = `http://localhost:9000/updateCartItem/${itemId}`;
    AXIOS.put(url, { qty: newQty }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.error("Error updating quantity:", err);
    });
  };
  const [address, setAddress] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setAddressError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address.trim()) {
      setAddressError("Please enter your address");
      return;
    }
    console.log("Address submitted:", address);
    setIsAddressOpen(false);

    // Redirect to payment page or process payment
  };

  const deleteitem = (id) => {
    let ans = window.confirm("Do you want to remove from cart?");
    if (ans) {
      const url = `http://localhost:9000/deletefcart/${id}`;
      AXIOS.get(url).then((res) => {
        alert(res.data);
        // Update items and total amount after successful deletion
        fetchCartItems();
        const urlUpdate = `http://localhost:9000/updateCartItem/${id}`;
        AXIOS.put(urlUpdate, { qty: 0 }).then((resUpdate) => {
          console.log(resUpdate.data);
        }).catch((errUpdate) => {
          console.error("Error updating quantity:", errUpdate);
        });
      });
    }
  };

  const proceedToPayment = () => {
    if (items.length === 0) {
      alert("Your cart is empty. Please add items before proceeding.");
    } else if (address.length === 0) {
      alert("Please fill address");
    } else {
      const paymentMode = window.prompt(
        "Select Payment Mode: Enter 'COD' for Cash on Delivery or 'Online' for Online Payment"
      );
      if (paymentMode && paymentMode.trim().toLowerCase() === "cod") {
        // Process Cash on Delivery
        placeOrder("COD");
      } else if (paymentMode && paymentMode.trim().toLowerCase() === "online") {
        // Process Online Payment
        placeOrder("Online");
        window.location.href="https://buy.stripe.com/test_6oEaFT0I8c1EbFSfYY"
      } else {
        alert("Invalid payment mode. Please enter 'COD' or 'Online'.");
      }
    }
  }
  
  

    const placeOrder = (paymentMode) => {
      const url = "http://localhost:9000/addorder/";
      console.log(userid);
      setDataform({
        ...dataform,
        userid: userid,
        totalprice: totalAmount,
        address: address,
      });
    
      AXIOS.post(url, { userid, totalAmount, address, paymentMode })
        .then((response) => {
          nav("/userp/orderview");
          alert("Order placed successfully! Payment Mode: " + paymentMode);
        })
        .catch((error) => {
          console.error("Error placing order:", error);
        });
    };
    


  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <Table style={{ marginBottom: "20px" }} striped bordered hover>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.productid.productname}</td>
                    <td>
                      <img
                        src={item.productid.image}
                        alt="Product"
                        width="80"
                        height="70"
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {item.productid.price}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Form.Control
                        type="number"
                        min="1"
                        value={item.qty}
                        onChange={(e) =>
                          handleQuantityChange(
                            item._id,
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>{item.totalprice}</td>
                    <td>
                      <MdDeleteForever
                        onClick={() => deleteitem(item._id)}
                        style={{
                          color: "red",
                          fontSize: "25px",
                          cursor: "pointer",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="text-end">
              <h4>Total Amount: &#8377; {totalAmount}</h4>
              <Button
                variant="success"
                onClick={() => setIsAddressOpen(!isAddressOpen)}
                style={{ marginRight: "10px" }}
              >
                Add Address
              </Button>
              <Button variant="primary" onClick={proceedToPayment}>
  Proceed to Payment (COD/Online)
</Button>
            </div>
            <Collapse in={isAddressOpen}>
              <Card className="mt-3">
                <Card.Header>
                  <h5>Enter Your Delivery Address</h5>
                </Card.Header>
                <Card.Body>
                  {addressError && (
                    <Alert variant="danger">{addressError}</Alert>
                  )}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="addressInput">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        isInvalid={!!addressError}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {addressError}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Save Address
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartItems;

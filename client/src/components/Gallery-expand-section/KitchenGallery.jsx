import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import cartImg from "../images/shopping-cart.png";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function KitchenGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [count, setCount] = useState(0);
  const [qty, setQty] = useState(1);
  const [items, setItems] = useState([]);
  const [msg, setMsg] = useState("");
  const userid = sessionStorage.getItem("userid");
  const refElement = useRef(null);

  useEffect(() => {
    const url = "http://localhost:9000/fetchAllprd";
    axios.get(url).then((res) => {
      setItems(res.data);
      setFilteredItems(res.data);
    });
  }, []);

  useEffect(() => {
    const url = `http://localhost:9000/getCartCount/${userid}`;
    axios.get(url).then((res) => {
      setCount(res.data.count);
    });
  }, [count, userid]);

  const addCart = (key, prc) => {
    setCount(count + 1);
    if (qty > 0) {
      const url = `http://localhost:9000/addcart/${key}/${userid}`;
      let totalprice = parseInt(qty) * parseFloat(prc);
      axios.post(url, { qty: qty, totalprice: totalprice }).then((response) => {
        setCount(response.data.count);
        setMsg(response.data);
        alert(response.data);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
        alert("Error adding item to cart. Please try again.");
      });
    } else {
      alert("Please select quantity");
    }
  };

  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, items]);

  return (
    <Container className="py-4">
      <Row className="mb-4 align-items-center">
        <Col xs={12} md={6} className="mb-2 mb-md-0">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6}>
          <Button
            variant="primary"
            className="w-100"
            onClick={() => setSearchQuery("")}
          >
            Reset Search
          </Button>
        </Col>
        <Col>
          <ul className="d-flex justify-content-end list-unstyled align-items-center mb-0">
            <li className="mr-3">
              <Link to="/cart-items">
                <img
                  src={cartImg}
                  alt="cart"
                  style={{ width: "35px", height: "35px" }}
                />
              </Link>
            </li>
            <li className="pt-2">Cart items: {count}</li>
          </ul>
        </Col>
      </Row>

      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {filteredItems.map((item) => (
          <Col key={item._id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={item.image}
                className="img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Form.Group controlId={`quantity-${item._id}`}>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    max="10"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  />
                </Form.Group>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => addCart(item._id, item.price)}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default KitchenGallery;

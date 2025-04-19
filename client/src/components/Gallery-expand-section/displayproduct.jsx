import React from "react";
import { useState, useEffect } from "react";
import AXIOS from "axios";
import sty from "./prd.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Dropdown, Col, Container, Row, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function Displayproduct() {
  const [change, setChange] = useState("Table");
  const [product, setProduct] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const url = "https://abeesinteriors-server.onrender.com/fetchAllprd";
    AXIOS.get(url).then((res) => {
      setProduct(res.data);
    });
  }, []);

  const [cate, setCate] = useState([]);
  useEffect(() => {
    const url = "https://abeesinteriors-server.onrender.com/getcategory";
    AXIOS.get(url)
      .then((res) => {
        setCate(res.data.record);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteitem = (idn) => {
    let ans = window.confirm("Do you want to delete?");
    if (ans) {
      const url = `https://abeesinteriors-server.onrender.com/deleteproducts/${idn}`;
      AXIOS.get(url).then((res) => {
        alert(res.data);
      });
    }
  };

  useEffect(() => {
    if (selectedCategoryId) {
      const url = `http://localhost:9000/fetchByCategory/${selectedCategoryId}`;
      AXIOS.get(url).then((res) => {
        setProduct(res.data);
      });
    }
  }, [selectedCategoryId]);

  const editItem = (product) => {
    setEditProduct(product);
  };

  const saveChanges = () => {
    const url = `http://localhost:9000/updateProduct/${editProduct._id}`;
    AXIOS.put(url, editProduct)
      .then((res) => {
        alert(res.data);
        window.location.reload();
        setEditProduct(null); // Clear edit state after saving changes
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Dropdown style={{ width: "210px" }}>
              <Dropdown.Toggle variant="primary" id="categoryDropdown">
                Filter by Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => window.location.reload()}>
                  All
                </Dropdown.Item>
                {cate.map((cat) => (
                  <Dropdown.Item
                    key={cat._id}
                    onClick={() => setSelectedCategoryId(cat._id)}
                  >
                    {cat.catname}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>

      <div className={sty.wrapper}>
        {product.map((ls) => {
          return (
            <Card
              style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
            >
              <Card.Img
                variant="top"
                src={ls.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title
                  style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}
                >
                  {ls.title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "1rem",
                    marginBottom: "1rem",
                    color: "#555",
                  }}
                >
                  {ls.description}
                </Card.Text>
                <Card.Text
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  &#8377; {ls.price}
                </Card.Text>
                <MdDelete
                  style={{ color: "red" }}
                  className={sty.icons_c}
                  onClick={() => {
                    deleteitem(ls._id);
                  }}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaEdit
                  style={{ color: "green", cursor: "pointer" }}
                  className={sty.icons_c}
                  onClick={() => editItem(ls)}
                />
                {/* <FaEdit style={{color:'green'}} className={sty.icons_c}/> */}
              </Card.Body>
            </Card>
          );
        })}
      </div>
      {editProduct && (
        <div className={sty.editForm} >
          <h2 className="mb-4">Edit Product</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={editProduct.title}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, title: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <input
                type="text"
                id="description"
                className="form-control"
                value={editProduct.description}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                type="text"
                id="price"
                className="form-control"
                value={editProduct.price}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, price: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category:
              </label>
              <select
                id="category"
                className="form-select"
                value={editProduct.category}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, category: e.target.value })
                }
                required
              >
                <option value="">Select category</option>
                {cate.map((ls) => (
                  <option key={ls._id} value={ls._id}>
                    {ls.catname}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-grid">
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveChanges}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import AXIOS from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Webheader from "../webheader";


export default function Adminregister() {
  const [record, setRecord] = useState({
    name: "",
    mob:"",
    email: "",
    password: "",
  }); //record-store value, setRecord-update fn
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const setValue = (field, value) => {
    setRecord({ ...record, [field]: value });
    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };
  const findErrors = () => {
    // const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const { name, mob, password} = record;
    const newErrors = {};
    //fname errors
    if (!name || name === "") newErrors.name = "cannot be blank!";

    if (!mob || mob === "") newErrors.mob = "cannot be blank!";
    else if (mob.length !== 10) newErrors.mob = "in-corect number!";

    if (!password || password === "") {
      newErrors.password = "Password field required!";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password =
        "Password must include at least one lowercase letter";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must include at least one uppercase letter";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must include at least one digit";
    }

    return newErrors;

  };
  const handlerSubmit = (e) => {
    e.preventDefault(); //prevent refresh
    const newErrors = findErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const url = "http://localhost:9000/aregister";
      AXIOS.post(url, record).then((res) => {
        if (res.data.status === 1) {
          nav("/Userlogin");
        } else {
          toast.error(res.data.msg);
        }
      });
    }
  };

  return (
    <>
    <Webheader/>
      <Form onSubmit={handlerSubmit}>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center text-info">Admin Register</h1>
            </Col>
          </Row>
          <Row className="border shadow justify-content-center p-5 mt-3 rounded">
            <Col md>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value);
                  }}
                  isInvalid={!!errors.fname}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.fname}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Form.Group as="Col" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setValue(e.target.name, e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as="Col" className="mb-3">
              <Form.Label>Mobile:</Form.Label>
              <Form.Control
                name="mob"
                type="number"
                placeholder="Mobile Number"
                onChange={(e) => {
                  setValue(e.target.name, e.target.value);
                }}
                isInvalid={!!errors.mob}
              />
              <Form.Control.Feedback type="invalid">
                {errors.mob}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as="Col" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setValue(e.target.name, e.target.value);
                }}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col lg={3}>
                <Form.Group className="mt-2 align-center">
                  <Button variant="outline-primary me-3" type="submit">
                    Submit
                  </Button>
                  <Button variant="outline-primary" type="reset">
                    Reset
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Row>
        </Container>
        <ToastContainer theme="dark" position="top-center" />
      </Form>
    </>
  );
}

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Webheader from "../webheader";
import AXIOS from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link,useNavigate } from "react-router-dom";
import Header from "../Top-Section/header";

export default function Userregister() {
  const [record, setRecord] = useState({
    fname: "",
    mob: "",
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
    const { fname, mob, password } = record;
    const newErrors = {};
    //fname errors
    if (!fname || fname === "") newErrors.fname = "cannot be blank!";
    else if (fname.length > 15) newErrors.fname = "name is too long!";

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
      newErrors.password =
        "Password must include at least one uppercase letter";
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
      const url = "http://localhost:9000/uregister";
      AXIOS.post(url, record).then((res) => {
        if (res.data.status === 1) {
          alert("Regiistration Successfull")
          nav("/login");

        } else {
          toast.error(res.data.msg);
        }
      });
    }
  };

  return (
    <>
      
        {/* <Webheader /> */}
        <Header />
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="card text-black" style={{ borderRadius: "20px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        User-Sign up
                      </p>
                      <form onSubmit={handlerSubmit} className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                              name="fname"
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
                        </div>
                      </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                      <Form.Group className="mb-3">
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
                      </div></div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <Form.Group className="mb-3">
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
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <Form.Group className="mb-3">
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
                            <Form.Text className="text-muted">
                              Password must be at least contain:<li> 8 characters long</li>
                              <li>one lowercase letter</li>
                              <li>one uppercase letter</li>
                              <li> one digit</li>
                            </Form.Text>
                          </Form.Group>
                        </div>
                      </div>
                      <Form.Group className="mt-2 align-center">
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Button variant="outline-primary me-3" className="btn btn-primary btn-lg" type="submit">
                          Submit
                        </Button>
                        </div>
                        <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login"
                        className="link-danger">Login</Link></p>
                      </Form.Group>
                      </form>
                      </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer theme="dark" position="top-center" />
      
    </>
  );
}

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Webheader from "../webheader";
import AXIOS from "axios";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Userlogin() {
  const nav = useNavigate();
  const [record, setRecord] = useState({});
  const [errors, setErrors] = useState({});

  //valuecatiching
  const setValue = (field, value) => {
    setRecord({ ...record, [field]: value })
  };

  const findErrors = () => {
    const { email, pass} = record;
    const newErrors = {};

    if (!email || email === "") {
      newErrors.email = "Email is required";
    }

    if (!pass || pass === "") {
      newErrors.pass = "Password field required!";
    }

    return newErrors;
  };
  const handlerSubmit=(e)=>{
    e.preventDefault();
    const newErrors=findErrors();
    if(Object.keys(newErrors).length>0){
       setErrors(newErrors);
    }
    else{
      const url="http://localhost:9000/login";
      AXIOS.post(url,record).then((response)=>{
        if(response.data.status===1){
          toast.info(response.data.msg);
          sessionStorage.setItem("userid",response.data.userid);
          sessionStorage.setItem("username",response.data.username);
          sessionStorage.setItem("username",response.data.lname);
          if(response.data.type==="User"){
            nav("/userpage")//add respective  router name
          }
          if(response.data.type==="Supplier"){
            nav("/supplierpage")//add respective  router name
          }
          if(response.data.type==='Admin'){
            nav("/adminpage")//add respective  router name
          }
         
      
         
    
      }
      else{
    
    
      
      setRecord({...record,email:"",password:''})
        toast.error(response.data.msg);
      }});//clientside postin
    }
  };

  return (
    <>
      <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid" alt="Sample " />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handlerSubmit}>
        <div className="form-outline mb-4">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setValue(e.target.name, e.target.value);
                }}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            </div>
            <div className="form-outline mb-3">
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="pass"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setValue(e.target.name, e.target.value);
                }}
                isInvalid={!!errors.pass}
              />
              <Form.Control.Feedback type="invalid">
                {errors.pass}
              </Form.Control.Feedback>
            </Form.Group>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
              <Form.Group className="mt-2 pt-4">
                <Button variant="outline-primary" type="submit" className="btn btn-primary btn-lg"
                      style={{"paddingLeft": "2.5rem", "paddingRight":" 2.5rem"}}>
                  Submit
                </Button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                        className="link-danger">Register</Link></p>
                </Form.Group>
                </div>
        </form>
        </div>
        </div>
        </div>
        </section>   
        <ToastContainer position="top-center" theme="dark" />
 
    </>
  );
}

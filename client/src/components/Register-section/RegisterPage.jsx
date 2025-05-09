import React from 'react'
import { useState } from 'react'
import AXIOS from 'axios'
import { Link } from 'react-router-dom';
function Register() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  function reg() {
    AXIOS.post('http://localhost:9000/api/register', { user: user, email: email, password: password }).then((response) => {
      console.log('hy');
      console.log(response.data.msg);
      setUser('')
      setEmail('')
      setPassword('')
      setMsg(response.data.msg)
    })
  }

  return (
    <>
      <h3>{msg}</h3>
      <section className="vh-100" style={{ "backgroundColor": "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ "borderRadius": "20px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input value={user} onChange={(e) => { setUser(e.target.value) }} placeholder='UserName' type="text" className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email' className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Enter a Password' className="form-control" />
                          </div>
                        </div>


                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button onClick={reg} type="button" className="btn btn-primary btn-lg">Register</button>
                         
                        </div>
                        <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login"
                        className="link-danger">Login</Link></p>
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
        </div>
      </section>
    </>
  )
}

export default Register
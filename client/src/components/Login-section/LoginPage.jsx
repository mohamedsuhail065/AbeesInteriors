import {React , useState,useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import AXIOS from 'axios'
import { profileContext } from '../../Contexts/context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Top-Section/header';

function Login() {
const navigate = useNavigate();
    const [email,setUser] =useState('');
    const [password,setPassword] = useState('');
    const [msg,setMsg] = useState('');
const {setData}= useContext(profileContext);
    function log(){
      
        AXIOS.post('http://localhost:9000/api/signins',{email:email,password:password}).then((res)=>{
            setUser('')
            setPassword('')
            if(res.data.status==1){
              sessionStorage.setItem("userid",res.data.userid)
              sessionStorage.setItem('token',res.data.token)
              toast(res.data.msg)

              navigate("/userpage")

          }
          else{toast(res.data.msg)}
       
          // setUser({...user,email:"",password:''})

      })
       
    }

  return (
    <>
    <h3>{msg}</h3>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid" alt="Sample " />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="form-outline mb-4">
                    <input value={email} onChange={(e)=>{setUser(e.target.value)}} type="text"  className="form-control form-control-lg"
                      placeholder="Enter a valid email" />
                    
                  </div>

                 
                  <div className="form-outline mb-3">
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"  className="form-control form-control-lg"
                      placeholder="Enter password" />
        
                  </div>

                  

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button onClick={log} type="button" className="btn btn-primary btn-lg"
                      style={{"paddingLeft": "2.5rem", "paddingRight":" 2.5rem"}}>Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                        className="link-danger">Register</Link></p>
                  </div>

                </form>
              </div>
            </div>
          </div>
          <ToastContainer
           position='top-center'
           theme='dark'
          />
        </section>
    
    </>
  )
}

export default Login
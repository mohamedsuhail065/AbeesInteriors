import React from 'react'
import './Section1.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/logo.jpeg'
// import Register from '../../Pages/Register'
// import Login from '../../Pages/Login'
// import Home from '../../Pages/Home'
// import Profile from '../../Pages/Profile'
import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react'
import Emppage from '../user/userp';
import KitchenGallery from '../Gallery-expand-section/KitchenGallery';
import PaymentPage from '../Checkout-section/PaymentPage';
import CartItems from '../Cart-Items-section/CartItems';
import AdminPage from '../Admin-section/adminpage';
import Logout from '../logout';
import Userregister from '../user/userregister';
import Supplieregister from '../supplier/supplieregister';
import Userpage from '../user/userpage';
import Supplierpage from '../supplier/supplierpage';

function Section1() {
  const Home = lazy(() => import('../../Pages/Home'));
  const Register = lazy(() => import('../user/userregister'));
  const Login = lazy(() => import('../../Pages/Login'));
  const Profile = lazy(() => import('../user/profile'));
  const Admin = lazy(() => import('../admin/adminpage'))
  return (
    <>
   

      <Suspense fallback={<div> loading</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/userpage/uprofile' element={<Profile />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/adminpage/*' element={<AdminPage/>} />
          <Route path='/kitchen-gallery' element={<KitchenGallery />} />
          <Route path='/checkout' element={<PaymentPage />} />
          <Route path='/cart-items' element={<CartItems />} />
          <Route path='/logout' element={<Logout/>} />
          <Route path="userregister" element={<Userregister />} />
          <Route path="supplieregister" element={<Supplieregister/>}/>
          <Route path="userpage" element={<Userpage />} />
          <Route path="supplierpage/*" element={<Supplierpage/>}/>
          <Route path="userp/*" element={<Emppage/>}/>
          <Route path="store" element={<KitchenGallery/>}/>
          <Route path="/paymentpage" element={<PaymentPage/>}></Route>
        </Routes>
      </Suspense>

    </>
  )
}

export default Section1
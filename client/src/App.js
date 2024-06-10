import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Userregister from "./components/user/userregister";
import Userlogin from "./components/user/userlogin";
import Webheader from "./components/webheader";
import Userpage from "./components/user/userpage";
import AddProduct from "./components/admin/addproduct";
import Profile from "./components/user/profile";
import Userview from "./components/admin/userview";
import Emppage from "./components/user/userp";
import Orderview from "./components/supplier/orderview";
import Productview from "./components/user/products";
import Supplieregister from "./components/supplier/supplieregister";
import Adminregister from "./components/admin/adminregister";
import Adminpage from "./components/admin/adminpage";
import Supplierpage from "./components/supplier/supplierpage";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Webheader />} />
        <Route path="userregister" element={<Userregister />} />
        <Route path="userlogin" element={<Userlogin />} />
        <Route path="userpage" element={<Userpage />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="profile" element={<Profile />} />
        <Route path="userview" element={<Userview/>}/>
        <Route path="userp/*" element={<Emppage/>}/>
        <Route path="products" element={<Productview/>}/>
        <Route path="orders" element={<Orderview/>}/>
        <Route path="supplieregister" element={<Supplieregister/>}/>
        <Route path="adminregister"  element={<Adminregister/>}/>
        <Route path="adminpage/*"  element={<Adminpage/>}/>
        <Route path="supplierpage/*" element={<Supplierpage/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;

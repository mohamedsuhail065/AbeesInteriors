import { logout } from "../Authservice";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function Logout(){
    const nav=useNavigate();
 useEffect(()=>{
    sessionStorage.setItem("userid","");
    sessionStorage.setItem("token","");
    logout();
    nav("/")
 })

    return(
        <>
        Logout
        
        </>
    )
}
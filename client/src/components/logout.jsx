


import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function Logout(){
    const nav=useNavigate();
 useEffect(()=>{
    sessionStorage.setItem("userid","");
    sessionStorage.setItem("token","");
    nav("/")

 })

    return(
        <>
        Logout
        
        </>
    )
}
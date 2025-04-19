import React from 'react'
import { useEffect,useState } from 'react'
import{Table} from "react-bootstrap"
import AXIOS from 'axios'
import {  MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export default function Editpoduct() {
  
        const[record,setRecord]=useState([]);
        useEffect(()=>{
            console.log("useeffect working")
            const url="https://abeesinteriors-server.onrender.com/fetchAllprd";
            AXIOS.get(url).then((res)=>{
                setRecord(res.data)
                console.log("data reached")
    
            })
        })//useeffect end

        //deleteproduct
const deleteproduct=(productid)=>{
    let ans=window.confirm("Do u want to delete?")
    if(ans){
        const url=`https://abeesinteriors-server.onrender.com/deleteproducts/${productid}`;
        AXIOS.get(url).then((res)=>{
            alert(res.data)
        } )
    }else{
        alert("gjjh")
    }
       
        
    

}

return (
    <>
      
         <Table border={1}>
            <thead>
                <tr>
                    <th>#</th><th>PRODUCT NAME</th><th>IMAGE</th><th>TYPE</th><th>PRICE</th><th>MRP</th><th>QUANTITY</th><th>MANUFACTURE DATE</th><th>EXPIRY DATE</th><th>ACTION</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    record.map((ls,index)=>{
                    return( <tr key={ls._id}>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            {ls.pname}
                        </td>
                        <td>
                           <img src={ls.img} className='rounded' style={{width:"200px",height:"150px"}}/>
                        </td>
                        <td>
                            {ls.type}
                        </td>
                        <td>
                            {ls.pprice}
                        </td>
                        <td>
                            {ls.pmrp}
                        </td>
                        <td>
                            {ls.pqty}
                        </td>
                        <td>
                            {ls.mfdate}
                        </td>
                        <td>
                            {ls.exdate}
                        </td>
                        <td>
                        <MdDeleteForever onClick={()=>{
                            deleteproduct(ls._id)
                        }} style={{color:'red',fontSize:'35px'  } }/>
                        {/* <FaRegEdit onClick={()=>{
                            editproduct(ls._id)
                        }} style={{color:'blue',fontSize:'35px'  } }/>
                         */}
                        </td>
                        
                    </tr>
                    )
                    })
                }
            </tbody>
         </Table>

        </>
    )
}
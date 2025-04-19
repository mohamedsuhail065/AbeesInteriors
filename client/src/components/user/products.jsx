import React from 'react'
import { useEffect,useState } from 'react'
import{Button, Table} from "react-bootstrap"
import AXIOS from 'axios'
import { FaRegEdit } from "react-icons/fa";

export default function Productview() {
  
        const[record,setRecord]=useState([]);
        useEffect(()=>{
            console.log("useeffect working")
            const url="https://abeesinteriors-server.onrender.com/fetchAllprd";
            AXIOS.get(url).then((res)=>{
                setRecord(res.data)
                console.log("data reached")
    
            })
        })//useeffect end
        const orderproduct = (orderid, pname, img, type, pmrp) => {
            let ans = window.confirm('Do you want to Order this product?');
            if (ans) {
              const orderData = { orderid, pname, img, type, pmrp }; // Data to be sent in the POST request
              const url = 'https://abeesinteriors-server.onrender.com/orders'; // Assuming this is the endpoint to store orders
              AXIOS.post(url, orderData).then((res) => {
                alert(res.data);
              });
            }
          };
        
return (
    <>
      
         <Table border={1}>
            <thead>
                <tr>
                    <th>#</th><th>PRODUCT NAME</th><th>IMAGE</th><th>TYPE</th><th>MRP</th>
                    
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
                            {ls.pmrp}
                        </td>
                        <td><Button onClick={() => {
                      orderproduct(ls._id);
                    }}
                  >Order</Button></td>
                    </tr>
                    )
                    })
                }
            </tbody>
         </Table>

        </>
    )
}
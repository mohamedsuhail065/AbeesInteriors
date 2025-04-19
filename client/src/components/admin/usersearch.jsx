import{useState,useEffect} from 'react';
import {Container,Row,Col,Form, Table} from 'react-bootstrap'
import AXIOS from 'axios'
export default function Usersearch(){
    const [fname,setUname]=useState("");
    const [record,setRecord]=useState([]);

    useEffect(()=>{
        const url="https://abeesinteriors-server.onrender.com/fetchAllemp"
     AXIOS.get(url).then((res)=>{
            setRecord(res.data)
        })
    })
    return(
        <>
        <Container>
            <Row>
                <Col>
                 <Form.Control type="text"
                 onChange={(e)=>setUname(e.target.value)}
                 
                 placeholder='search by name' required/> 

                 
                </Col>
            </Row>
            <Row>
                <Col>
            <Table>
                <thead>
                    <tr>
         <th>slno</th> <th>Name</th> <th>Email</th> <th>Phone</th>
                    </tr>
                </thead>
              <tbody>
                { 
                 fname!=""?
                    record
                    .filter((ls)=>{return ls.name.match(fname)})
                    .map((ls,index)=>{
                        return(
                            <tr key={ls._id}>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    {ls.lname}
                                </td>
                                <td>
                                    {ls.email}
                                </td>
                                <td>
                                    {ls.mob}
                                </td>
                            </tr>
                        )

                    })
                    :
                    record
                    .map((ls,index)=>{
                        return(
                            <tr key={ls._id}>
                                <td>
                                    {index+1}
                                </td>
                                <td>
                                    {ls.name}
                                </td>
                                <td>
                                    {ls.email}
                                </td>
                                <td>
                                    {ls.phone_number}
                                </td>
                            </tr>
                        )

                    })
                }
              </tbody>


            </Table>

            </Col>
            </Row>
        </Container>
        
        </>
    )
}
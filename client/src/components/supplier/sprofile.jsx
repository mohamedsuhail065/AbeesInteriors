import { useEffect, useState } from "react";
import AXIOS from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
export default function Sprofile() {
  const id = sessionStorage.getItem('userid');
  const [record, setRecord] = useState([]);
  useEffect(() => {
    const url = `http://localhost:9000/fetchsupplierbyid/${id}`;
    AXIOS.get(url).then((res) => {
      setRecord(res.data);
    });

  });

  return (
    <>

      <Container>
        {record.map((ls,index) => {
          return (
            <Row key={index} className="rounded shadow p-4 border mt-3">
              <Col lg={6}>
                <Card className="profile-card">
                  <Card.Body>
                  <div className="profile-header">
                                    {/* <div className="profile-photo-frame">
                                        <img src={ls.profilePic} alt="Profile" className="profile-photo border" />
                                    </div> */}
                                    <Card.Title className="text-center">{ls.fname}{ls.lname}</Card.Title>
                                </div>
                                <div className="profile-details">
                                    <p><strong>Email:</strong> {ls.email}</p>
                                    <p><strong>Mobile No:</strong> {ls.mob}</p>
                                </div>
                            </Card.Body>
                           
        
        <Button style={{fontSize:"10px"}} >EDIT PROFILE </Button>
       
                        </Card>
                    </Col>
</Row>
          )})}    
      </Container>
        
        
    </>
  );
}

import { useEffect, useState } from "react";
import AXIOS from "axios";
import { Container, Row, Col } from "react-bootstrap";
export default function Aprofile() {
  const idn = sessionStorage.getItem('userid');
  const [record, setRecord] = useState([]);
  useEffect(() => {
    const url = `http://localhost:9000/fetchByida/${idn}`;
    AXIOS.get(url).then((res) => {
      setRecord(res.data);
    });
  });

  return (
    <>
    <h1>Helo</h1>
      <Container>
        {record.map((ls) => {
          return (
            <Row className="rounded shadow p-4 border mt-3">
              <Col lg={2}>
                <img
                  src={""}
                  className="rounded-circle bg-info"
                  style={{ width: "100%", height: "200px" }}
                />
              </Col>
              <Col lg={10} className="mt-2 ">
                <h3>Name: {ls.fname} {ls.lname}</h3>
                <h4>Email: <a href="">{ls.email}</a></h4>
                <h4><p>Mobile Number: {ls.mob}</p></h4>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}

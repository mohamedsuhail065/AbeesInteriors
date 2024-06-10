import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export default function Sprofile() {
  const id = sessionStorage.getItem("userid");
  const [record, setRecord] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mob: "",
  });

  useEffect(() => {
    const url = `http://localhost:9000/fetchuserbyid/${id}`;
    axios.get(url).then((res) => {
      setRecord(Array.isArray(res.data) ? res.data : []);
      setFormData(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditProfile = () => {
    if (window.confirm("Are you sure you want to edit your profile?")) {
      setEditMode(true);
    }
  };

  const handleSaveProfile = () => {
    if (window.confirm("Are you sure you want to save the changes?")) {
      const url = `http://localhost:9000/updateprofile/${id}`;
      axios.put(url, formData).then((res) => {
        setRecord(Array.isArray(res.data) ? res.data : []);
        setEditMode(false);
        window.location.reload(); // Refresh the page to see the changes
      });
    }
  };

  return (
    <>
      <Container>
        {record.map((ls, index) => {
          return (
            <Row key={index} className="rounded shadow p-4 border mt-3">
              <Col lg={6}>
                <Card className="profile-card">
                  <Card.Body>
                    <div className="profile-header">
                      <Card.Title className="text-center">
                        {ls.fname} {ls.lname}
                      </Card.Title>
                    </div>
                    <div className="profile-details">
                      {editMode ? (
                        <Form>
                          <Form.Group controlId="formFname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter first name"
                              name="fname"
                              value={formData.fname}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                          <Form.Group controlId="formLname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter last name"
                              name="lname"
                              value={formData.lname}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                          <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                          <Form.Group controlId="formMob">
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter mobile number"
                              name="mob"
                              value={formData.mob}
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                          <Button variant="primary" onClick={handleSaveProfile}>
                            Save
                          </Button>{" "}
                          <Button
                            variant="secondary"
                            onClick={() => setEditMode(false)}
                          >
                            Cancel
                          </Button>
                        </Form>
                      ) : (
                        <>
                          <p>
                            <strong>Email:</strong> {ls.email}
                          </p>
                          <p>
                            <strong>Mobile No:</strong> {ls.mob}
                          </p>
                          <Button onClick={handleEditProfile}>
                            Edit Profile
                          </Button>
                        </>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}

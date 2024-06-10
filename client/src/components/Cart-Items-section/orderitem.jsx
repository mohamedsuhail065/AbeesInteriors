import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Orderitem(){
    const nav=useNavigate()
    const userid=sessionStorage.setItem('userid')
    const payment=(e)=>{
    e.preventDefault();
       nav(`/payment/${userid}`)

    }
    return(
        <>
        <Container>
            <Row>
                <Col>
                 <Form onSubmit={payment}>
                    <Form.Group>
                        <Form.Label>
                            Delivery Adress
                        </Form.Label>
                        <textarea className="">

                        </textarea>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>TotalPrice:</Form.Label>
                        <Button type="submit">Payment</Button>
                    </Form.Group>
                 </Form>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}
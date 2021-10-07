import { React, useState, render } from "react";
import { Form, Button, Toast, Container, ToastContainer, Modal, Image } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import  logo  from "../Images/Green Tick.jpg";

function Buy() {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false); history.push("/"); };
  const handleShow = () => setShow(true);
  return (
    <ToastContainer position="middle-center">
      <Toast bg="light">
        <Container className="my-3">
          <Form>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control type="number" placeholder="Mobile No." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cost">
              <Form.Label>Cost (&#x20B9;)</Form.Label>
              <Form.Control type="number" placeholder="Cost" value="1000" disabled />
            </Form.Group>

            <Button variant="primary" onClick={handleShow}>
              Buy
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Thank You for Purchasing.</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Your order is booked Successfully.
                <Image src={logo} Style="width: 60px; height:40px;"></Image>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </Container>
      </Toast>
    </ToastContainer>
  )
}

export default Buy;
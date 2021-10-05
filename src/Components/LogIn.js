import { React, Component } from "react";
import { Form, Button, Toast, Container, ToastContainer } from "react-bootstrap";

class LogIn extends Component {

    render() {
        return (
            <ToastContainer position="middle-center">
                <Toast bg="light">
                    <Container className="my-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="loginAs">
                                <Form.Label>LogIn As</Form.Label>
                                    <select className="form-control" name="loginAs">
                                        <option selected> - select -</option>
                                        <option value="1">Photographer</option>
                                        <option value="2">Customer</option>
                                    </select>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Toast>
            </ToastContainer>
        )
    }
}

export default LogIn;
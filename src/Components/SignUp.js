import { React, Component } from "react";
import { Form, Button, Toast, Container, ToastContainer } from "react-bootstrap";

class SignUp extends Component {

    render() {
        return (
            <ToastContainer position="middle-center">
                <Toast bg="light">
                    <Container className="my-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control required type="text" placeholder="Enter Username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="signupAs">
                                <Form.Label>SignUp As</Form.Label>
                                    <Form.Select className="form-control" name="signupAs">
                                        <option selected> - select -</option>
                                        <option value="1">Photographer</option>
                                        <option value="2">Customer</option>
                                    </Form.Select>
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

export default SignUp;
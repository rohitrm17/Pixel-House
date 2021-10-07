import { React, Component } from "react";
import { Form, Button, Toast, Container, ToastContainer } from "react-bootstrap";
import { withRouter } from "react-router";
import Axios from 'axios';

class SignUp extends Component {

    routingFunction = (param) => {
        this.props.history.push({
            pathname: `/LogIn`,
        });
    }

    state = {
        name: "", email: "", password: "",
    }

    reg = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/SignUp',
            { name: this.state.name, email: this.state.email, password: this.state.password }).then((response) => {
                console.log(response);
                if (response['data']['data']['success'] === 200) {
                    alert("Registered Succesfully.\nPlease Login to continue.");
                    this.props.history.push({
                        pathname: `/LogIn`,
                    });
                }
                else{
                    if (response['data']['data']['success'] === 400) {
                        alert("User already registered");
                    }
                }
            })
        this.setState({ name: "", email: "", password: "" });
    }

    render() {
        return (
            <ToastContainer position="middle-center">
                <Toast bg="light">
                    <Container className="my-3">
                        <Form id='register' onSubmit={this.reg}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control required type="text" placeholder="Enter Username" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
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

export default withRouter(SignUp);
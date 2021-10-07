import { React, Component } from "react";
import { Form, Button, Toast, Container, ToastContainer } from "react-bootstrap";
import Axios from 'axios';
import { withRouter } from "react-router";


class LogIn extends Component {

    state = {
        name: "", email: "", password: ""
    }

    log = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/LogIn',
            { name: this.state.name, email: this.state.email, password: this.state.password }).then((response) => {
                console.log(response);
                if (response['data']['data']['success'] === 200) {
                    alert("Login successful");
                    this.props.loggedInClose();
                    this.props.setLogInUser(response['data']['data']['results']);
                    this.props.history.push({
                        pathname: `/`,
                    });
                }
                else{
                    alert("Wrong Email or Password !");
                }
            })
    }

    render() {
        return (
            <ToastContainer position="middle-center">
                <Toast bg="light">
                    <Container className="my-3">
                        <Form onSubmit={this.log}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="loginAs">
                                <Form.Label>LogIn As</Form.Label>
                                <select className="form-control" name="loginAs">
                                    <option selected> - select -</option>
                                    <option value="1">Photographer</option>
                                    <option value="2">Customer</option>
                                </select>
                            </Form.Group> */}

                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Toast>
            </ToastContainer>
        )
    }
}

export default withRouter(LogIn);
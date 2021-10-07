import { React, Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {

    render() {
        return (
            <Navbar bg="light" expand="xl">
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>Pixel House</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/OnAuction">
                                <Nav.Link>On Auction</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav className="justify-content-end">
                            {this.props.loggedIn == false?
                            <>
                            <LinkContainer to="/SignUp">
                                <Nav.Link>Sign Up</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/LogIn">
                                <Nav.Link>Log In</Nav.Link>
                            </LinkContainer>
                            </>:
                            <>
                            <LinkContainer to="/Profile">
                                <Nav.Link>Profile</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/">
                                <Nav.Link onClick={this.props.loggedInShow}>Log Out</Nav.Link>
                            </LinkContainer>
                            </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header;
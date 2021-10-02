import { React, Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

class Header extends Component {

    render() {
        return (
            <Navbar bg="light" expand="xl">
                <Container>
                    <Navbar.Brand href="/">Pixel House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#link">On Auction</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link href="/SignUp">Sign Up</Nav.Link>
                            <Nav.Link href="/LogIn">Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header;
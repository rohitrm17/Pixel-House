import { Component } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo1 from "../Images/logo1.png";

class Home extends Component {

    render() {
        return (
            // <div className="my-3">Welcome to Home</div>
            <>
                <Container className="my-4">
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Link to="/PhotoClicked" Style="text-decoration: none; color: black">
                                        <Card.Img variant="top" src={logo1} />
                                        <Card.Body>
                                            <Card.Title>Photographer Name</Card.Title>
                                            <Card.Text>
                                                {idx} Description about the Photographer.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Rating 4</small>
                                        </Card.Footer>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Home;
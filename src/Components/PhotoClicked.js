import { Component } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRating from 'react-star-ratings';
import logo1 from "../Images/logo1.png";

class PhotoClicked extends Component {

    render() {
        return (
            // <div className="my-3">Welcome to Home</div>
            <>
                <Container className="my-4">
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 10 }).map((_, idx) => (
                            <Col>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src={logo1} />
                                    <Card.Body>
                                        <Card.Title>Photo Name</Card.Title>
                                        <Card.Text>
                                            {idx} Description about the Photo.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Rating 4</small>&nbsp;
                                        <Button className="btn-sm">Buy</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        )
    }
}

export default PhotoClicked;
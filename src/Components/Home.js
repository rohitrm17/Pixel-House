import { Component } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo1 from "../Images/logo1.png";

const ImageData = [{Img:"https://gdurl.com/vpI1", Name:"Joe McNally"},
{Img:"https://gdurl.com/j3FP", Name:"Rehahn"},
{Img:"https://gdurl.com/lOmK", Name:"Rathika Ramasamy"},
{Img:"https://gdurl.com/btOM", Name:"Aishwarya Sridhar"},
{Img:"https://gdurl.com/72XF", Name:"Jimmy Nelson"}];

class Home extends Component {

    render() {
        return (
            <>
                <Container className="my-4">
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Link to="/PhotoClicked" Style="text-decoration: none; color: black">
                                        <Card.Img variant="top" src={ImageData[idx].Img} />
                                        <Card.Body>
                                            <Card.Title>{ImageData[idx].Name}</Card.Title>
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
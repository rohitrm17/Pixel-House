import { Component } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo1 from "../Images/logo1.png";

const ImageData = [{Id: 1, Img:"https://gdurl.com/vpI1", Name:"Joe McNally", Desc: "Joe McNally is an American photographer who has contributed to National Geographic. He produces logistically and technically intricate projects with proficient use of light and color. He has done studio work to big productions and has shot conceptual images to aerial photos."},
{Id: 2, Img:"https://gdurl.com/j3FP", Name:"Rehahn", Desc: "Rehahn born in France, is a photographer based in, Vietnam. Known as the photographer that “captures souls”, he is recognized for his portraits of Vietnam, Cuba, Malaysia and India, and for his cultural preservation work."},
{Id: 3, Img:"https://gdurl.com/lOmK", Name:"Rathika Ramasamy", Desc: "Rathika Ramasamy is an Indian wildlife photographer. She is based in Chennai and operates as a freelance photographer. She has received many accolades for her photographs and has been called the 'first Indian woman to strike an international reputation as a wildlife photographer'."},
{Id: 4, Img:"https://gdurl.com/btOM", Name:"Aishwarya Sridhar", Desc: "Aishwarya Sridhar is an Indian wildlife photographer, wildlife presenter, and documentary filmmaker residing in Navi Mumbai. She is the youngest girl to have won the Sanctuary Asia- Young Naturalist Award and the International Camera Fair. Award"},
{Id: 5, Img:"https://gdurl.com/n_lz", Name:"Trey Ratcliff", Desc: "Trey Ratcliff is an American writer, public speaker, artist and photographer. He blogs about travelling on Stuck In Customs and posts photographs there regularly."}];

class Home extends Component {

    render() {
        return (
            <>
                <Container className="my-4">
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <Col>
                                <Card>
                                    <Link to={{pathname: "/PhotoClicked", state: ImageData[idx].Id}} Style="text-decoration: none; color: black">
                                        <Card.Img variant="top" src={ImageData[idx].Img} alt={ImageData[idx].Name} />
                                        <Card.Body>
                                            <Card.Title>{ImageData[idx].Name}</Card.Title>
                                            <Card.Text>
                                                {ImageData[idx].Desc}
                                            </Card.Text>
                                        </Card.Body>
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
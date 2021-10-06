import { Card, Row, Col, Container, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import StarRating from 'react-star-ratings';
import { useLocation } from 'react-router-dom';

function PhotoClicked() {
    const AllImages = [
        {ImgId: "101" , Img: "https://gdurl.com/PwPD"},
        {ImgId: "102" , Img: "https://gdurl.com/uHBh"},
        {ImgId: "103" , Img: "https://gdurl.com/SgI2"},
        {ImgId: "104" , Img: "https://gdurl.com/QrBW"},
        {ImgId: "105" , Img: "https://gdurl.com/Cqcx"},
        {ImgId: "106" , Img: "https://gdurl.com/tUvQ"},
        {ImgId: "107" , Img: "https://gdurl.com/vs2k"},
        {ImgId: "108" , Img: "https://gdurl.com/D2wh"},
        {ImgId: "109" , Img: "https://gdurl.com/tn16"},
        {ImgId: "110" , Img: "https://gdurl.com/GBE1"},
        {ImgId: "201" , Img: "https://gdurl.com/heH1"},
        {ImgId: "202" , Img: "https://gdurl.com/Huoq"},
        {ImgId: "203" , Img: "https://gdurl.com/ak_Y"},
        {ImgId: "204" , Img: "https://gdurl.com/PwEL"},
        {ImgId: "205" , Img: "https://gdurl.com/S4x0"},
        {ImgId: "206" , Img: "https://gdurl.com/O3_o"},
        {ImgId: "207" , Img: "https://gdurl.com/UuDo"},
        {ImgId: "208" , Img: "https://gdurl.com/HGBT"},
        {ImgId: "209" , Img: "https://gdurl.com/errT"},
        {ImgId: "210" , Img: "https://gdurl.com/YlPt"}
    ];
    let location = useLocation();
    const st = location.state;
    return (
        <>
            <Container className="my-4">
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: AllImages.length }).map((_, idx) => (
                        <Col>
                            {AllImages[idx].ImgId[0] == st ?
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={AllImages[idx].Img} />
                                <Card.Footer>
                                    <small className="text-muted">Rating 4</small>
                                    <Button className="btn-info btn-sm" Style="margin-left:190px">Buy</Button>
                                </Card.Footer>
                            </Card>: ""}
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default PhotoClicked;
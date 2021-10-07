import { Card, Row, Col, Container, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import StarRating from 'react-star-ratings';
import { useLocation, useHistory } from 'react-router-dom';
import { useState } from "react";
import Axios from 'axios';

function PhotoClicked() {

    // let ids = [];
    // let urls = [];

    const [urls , setURLs] = useState([]);
    const funsetURLs = (e , urlList) => {console.log(urlList); 
        setURLs([...urls , urlList])};

    const fetch = (e) => {
        //e.preventDefault();
        // let result = [
        //     {id : 2,url : "xyz"},
        //     {id : "",url : ""},
        // ];
        // let result;

        Axios.post('http://localhost:3001/PhotoClicked',{st : st}).then((response)=>{
            console.log("Length is: ",response.data.data.length);
            // console.log(response)
            funsetURLs(response['data']['data']);
            // console.log(result[0]['id'])
            // for(let i=0;i<response.data.data.length;i++){
            //     // result[i]['id'] = response.data.data[i]['id'];
            //     // result[i]['url'] = response.data.data[i]['url'];
            //     // ids[i] = response.data.data[i]['id'];
            //     urls.push(response['data']['data'][i]['url']);
            // }
            // result = JSON.stringify(response)
            // console.log("Result id is: "+ids);
            // console.log("Result is: "+urls);
            // return urls;
            //return response['data']['data'];
        })
        // return response['data']['data'];
    //    console.log("Result is"+result);
    //    return result;
    // console.log("Result 2 is: "+urls);
    //    [Object.keys(result)[1]].url
    //console.log("Result is"+result);
        
    }

    let history = useHistory();
    let location = useLocation();
    const st = location.state;
    const response = fetch();

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
    
    return (
        <>
        {console.log("url.len:" + urls)}
            <Container className="my-4">
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: urls.length }).map((_, idx) => (
                        <Col>
                            {/* {AllImages[idx].ImgId[0] == st ? */}
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={urls[idx]} />
                                <Card.Footer>
                                    <small className="text-muted">Rating 4</small>
                                    <Button className="btn-info btn-sm" Style="margin-left:190px" onClick={()=>history.push("/Buy")}>Buy</Button>
                                </Card.Footer>
                            </Card>
                            {/* : ""} */}
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default PhotoClicked;
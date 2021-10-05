import { Component } from "react";

class Footer extends Component{

    render(){
        var footerStyle = {
            position: "relative",
            top: "100vh",
            width: "100%"
        };
        return(
            <footer className="bg-dark text-light py-3" style={footerStyle}>
                <p className="text-center">
                    Made By : 
                    <ul className="list-unstyled">
                        <li>Rohit R Mahatungade</li>
                        <li>Anjali P Mahalingapur</li>
                        <li>Anirudh Joshi</li>
                        <li>Puneet Pandit</li>
                    </ul>
                </p>
            </footer>
        )
    }
}

export default Footer;
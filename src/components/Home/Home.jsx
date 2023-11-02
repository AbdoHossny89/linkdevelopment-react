import React, { Component } from "react";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Banner from "../Slider/Slider";
import Footer from "../Footer/Footer";

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Banner />
                <Services />
                <Footer />
            </div>
        )
    }
}
    
export default Home;
    
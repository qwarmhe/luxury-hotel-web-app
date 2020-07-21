import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";


const Home=(props)=>{
    return(
        
        <React.Fragment>
            <Hero>
                <Banner title="Nana_Kyei Luxury" subtitle="Nana_Kyei rooms starting at Ghc.399.00"></Banner>
                <Link to="/rooms"  className="btn-primary" >
                    Our Rooms
                </Link>
            </Hero>
            <Services />
            <FeaturedRooms />
        </React.Fragment>
    )
}


export default Home;
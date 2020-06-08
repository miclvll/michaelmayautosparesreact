import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from "react-router-dom";
import Services from '../PartsContainer.js/Services';
import FeaturedParts from "../PartsContainer.js/FeaturedParts";


export default function Home() {
    return (
        <>
        <Hero>
        <Banner title = "Used parts"
        subtitle = "Daihatsu,Suzuki,Ford">
        <Link to = "/Parts" className = 'btn-primary'>
        Parts in stock</Link>
        </Banner>
        </Hero>
        <FeaturedParts/>
        
        </>
            
        
    );
}




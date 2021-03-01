import React from "react";
import HeaderAbout from "./Header/index";
import Customer from "./Customer/index";
import BestTeam from "./BestTeam/index";
import Ratings from "./Ratings/index";
import Subscribe from "./Subscribe/index";

function About() {
    return (
        <>
            <HeaderAbout />
            <Customer />
            <BestTeam />
            <Ratings />
            <Subscribe />
        </>
    )
}

export default About;
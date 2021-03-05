import React from "react";
import HeaderServices from "../ServicesSec/HeaderServices/index";
import PortfolioContent from "./Portfolio/index";
import Subscribe from "../About/Subscribe/index";

function Portfolio() {

    React.useEffect(()=> {
        const portoClass = document.getElementsByClassName('header-content');
        portoClass[0].children[0].children[0].innerHTML = 'Portfolio';
        portoClass[0].children[0].children[1].innerHTML = 'Home - Portfolio page';
    }, []);

    return (
        <>
            <HeaderServices />
            <PortfolioContent />
            <Subscribe />
        </>
    )
}

export default Portfolio;
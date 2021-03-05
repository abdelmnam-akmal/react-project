import React from "react";
import HeaderServices from "../ServicesSec/HeaderServices/index";
import ShopContent from "./ShopContent/index";

function Shop() {

    React.useEffect(()=> {
        const portoClass = document.getElementsByClassName('header-content');
        portoClass[0].children[0].children[0].innerHTML = 'Shop';
        portoClass[0].children[0].children[1].innerHTML = 'Home - Shop page';
    }, []);

    return (
        <>
            <HeaderServices />
            <ShopContent />
        </>
    )
}

export default Shop;
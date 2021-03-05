import React from "react";
import HeaderServices from "../ServicesSec/HeaderServices/index";
import MapContact from "./MapContact/index";
import FormContact from "./FormContact/index";
import FormInputs from "./FormInputs/index";
import Subscribe from "../About/Subscribe/index";

function Contact() {

    React.useEffect(()=> {
        const portoClass = document.getElementsByClassName('header-content');
        portoClass[0].children[0].children[0].innerHTML = 'Contact';
        portoClass[0].children[0].children[1].innerHTML = 'Home - Contact page';
    }, []);

    return (
        <>
            <HeaderServices />
            <MapContact />
            <FormContact />
            <FormInputs />
            <Subscribe />
        </>
    )
}

export default Contact;
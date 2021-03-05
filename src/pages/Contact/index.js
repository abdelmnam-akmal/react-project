import React from "react";
import HeaderServices from "../ServicesSec/HeaderServices/index";

function Contact() {

    React.useEffect(()=> {
        const portoClass = document.getElementsByClassName('header-content');
        portoClass[0].children[0].children[0].innerHTML = 'Contact';
        portoClass[0].children[0].children[1].innerHTML = 'Home - Contact page';
    }, []);

    return (
        <>
            <HeaderServices />
        </>
    )
}

export default Contact;
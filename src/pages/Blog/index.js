import React from "react";
import HeaderServices from "../ServicesSec/HeaderServices/index";
import BlogContent from "./BlogContent/index";

function Blog() {

    React.useEffect(()=> {
        const portoClass = document.getElementsByClassName('header-content');
        portoClass[0].children[0].children[0].innerHTML = 'Blog';
        portoClass[0].children[0].children[1].innerHTML = 'Home - Blog page';
    }, []);

    return (
        <>
            <HeaderServices />
            <BlogContent />
        </>
    )
}

export default Blog;
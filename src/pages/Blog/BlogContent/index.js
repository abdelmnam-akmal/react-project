import React from "react";
import { getApi } from "../../../Api/api";

function BlogContent() {

    const [blog, setBlog] = React.useState([]);

    React.useEffect(()=> {
        getApi().then(e => setBlog(e.data.blog));
    }, []);

    const blogLists = blog.map((item, index) => {
        return (
            <div className="col-lg-6 blog-card" key={index + 1}>
                <div>
                    <div className="card">
                        <div className="card-reltive">
                            <img src={item.image} className="card-img-top" alt="blog" />
                            <div>09 May 2020 - 3 Comments</div>
                        </div>
                        <div className="card-body">
                            <span className="card-title h1 d-block">{item.title}</span>
                            <p className="card-text">{item.desc}</p>
                            <button className="btn button-blog">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="blog-content">
            <div className="container">
                <div className="row">
                    {blogLists}
                </div>
            </div>
        </div>
    )
}

export default BlogContent;
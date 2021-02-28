import React from "react";
import { getApi } from "../../../Api/api";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Studies() {

    const [studies, setStudies] = React.useState([]);

    React.useEffect(()=> {
        getApi().then(e => setStudies(e.data.studies));
    }, []);

    const studiesContent = studies.map((item, index) => {
        return (
            <div className="col-md-6 col-lg-4 studies-sections" key={index + 1}>
                <div>
                    <LazyLoadImage src={item.image} alt="studies image" />
                    <div className="overlay">
                        <div className="overlay-content">
                            <div className="plus-div text-center">+</div>
                            <p className="studies-desc">{item.title}</p>
                            <span>{item.desc}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="studies">
            <div className="container">
                <div className="row">

                    <div className="header-studies text-center col-12">
                        <span>Planning on Developing a Product</span>
                        <span className="d-block h1">Our Case Studies</span>
                    </div>

                    {studiesContent}
                </div>
            </div>
        </div>
    )
}

export default Studies;
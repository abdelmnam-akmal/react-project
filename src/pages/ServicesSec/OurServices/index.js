import React from "react";
import { getApi } from "../../../Api/api";

function OurServices() {

    const [services, setServices] = React.useState([]);

    React.useEffect(()=> {
        getApi().then(e => setServices(e.data.services));
    }, []);

    const servicesList = services.map((item, index) => {
        return (
            <div className="col-md-4 services-content text-center" key={index + 1}>
                <div>
                    <div className="icon-services"><i className={item.icon}></i></div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
            </div>
        )
    });

    return (
        <div className="our-services">
            <div className="ser-shape-1">
                <img src="images/points.png" alt="services" />
            </div>
            <div className="ser-shape-2">
                <img src="images/points.png" alt="services" />
            </div>
            <div></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center services-header">
                        <span className="text-uppercase">our products make the gears</span>
                        <span className="h1 d-block">Delivering Our Services</span>
                    </div>
                    {servicesList}
                    <div className="col-12 text-center sec-get-started">
                        <div className="services-button">
                            <button className="text-uppercase">
                                get started
                                <span className="s-overlay"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices;
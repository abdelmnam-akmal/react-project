import React from "react";
import { getApi } from "../../../Api/api";

function Plan() {

    const [plan1, setPlan1] = React.useState([]);
    const [plan2, setPlan2] = React.useState([]);

    React.useEffect(()=> {
        getApi().then((e) => {setPlan1(e.data.plan1); setPlan2(e.data.plan2)});
    }, []);

    const plan1Content = plan1.map((item, index) => {
        return (
            <div key={index + 1}>
                <div className="plan-content">
                    <i className={item.icon}></i>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
            </div>
        )
    });

    const plan2Content = plan2.map((item, index) => {
        return (
            <div key={index + 1}>
                <div className="plan-content">
                    <i className={item.icon}></i>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="plan">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 plan-sections">
                        <div>
                            <div className="row">
                                <div className="col-md-6 extra-plan">
                                    {plan1Content}
                                </div>
                                <div className="col-md-6 extra-plan">
                                    {plan2Content}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 export-plan">
                        <div>
                            <span className="plan-info">Planning on Developing a Product</span>
                            <span className="d-block h1 plan-title">Popular Features that your Business Needs</span>
                            <p className="plan-desc">We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the We develop</p>
                            <div className="plan-button">
                                <button className="text-uppercase">
                                    start now
                                    <span className="s-overlay"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan;
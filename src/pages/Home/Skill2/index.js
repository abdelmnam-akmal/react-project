import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Skill2() {
    return (
        <div className="skill-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 skill-2-content">
                    <div>
                        <span className="skill-2-info">Planning on Developing a Product</span>
                        <span className="h1 d-block skill-2-title">The Next Generation Of Our Marketing</span>
                        <p className="skill-2-desc">We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the We develop the relationships that underpin the next phas</p>
                        <div className="skill-2-button">
                            <button className="text-uppercase">
                                start now
                                <span className="s-overlay"></span>
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-12 col-lg-6 skill-2-image">
                        <div>
                            <LazyLoadImage className="img-fluid" src="images/skill-2.png" alt="Skill image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill2;
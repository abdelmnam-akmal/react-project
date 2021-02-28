import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Skill() {

    return (
        <div className="skill">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 skill-image">
                        <div>
                            <LazyLoadImage className="img-fluid" src="images/skill.png" alt="Skill image" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 skill-content">
                        <div>
                            <span className="skill-info">Planning on Developing a Product</span>
                            <span className="h1 d-block skill-title">Get tips & tricks on how to skyrocket</span>
                            <p className="skill-desc">We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the We develop the relationships that underpin the next phas</p>
                            <div className="skill-wrapper">
                                <div className="wrap">
                                    <div className="progress-radial progress-75">
                                        <div className="overlay">
                                            75% <br />
                                            Design
                                        </div>
                                    </div>
                                    
                                    <div className="progress-radial progress-60">
                                        <div className="overlay">
                                            60% <br />
                                            Illustration
                                        </div>
                                    </div>
                                    
                                    <div className="progress-radial progress-90">
                                        <div className="overlay">
                                            90% <br />
                                            Development
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-button">
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

export default Skill;
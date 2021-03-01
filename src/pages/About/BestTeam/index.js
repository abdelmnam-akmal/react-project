import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BestTeam() {
    return (
        <div className="best-team">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 best-team-content">
                        <div>
                            <span>Our Best</span>
                            <span className="h1 d-block">Dedicated Team</span>
                            <p>We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the We develop the relationships that underpin the next phas</p>
                            <ul className="list-unstyled list-team">
                                <li>We offer finance and consulting services for companies & businesses <i className="fa fa-check"></i></li>
                                <li>Get the best consult from your expert advisors Appropriately empower dynamic leadership. <i className="fa fa-check"></i></li>
                                <li>We offer finance and consulting services for companies & businesses <i className="fa fa-check"></i></li>
                            </ul>
                            <div className="best-team-button">
                                <button className="text-uppercase">
                                    meet our team
                                    <span className="s-overlay"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 best-team-images">
                        <div className="row">
                            <div className="col-md-6 team-image-container">
                                <div>
                                    <LazyLoadImage src="images/team-image1.jpg" alt="Team Images" />
                                    <div className="team-overlay">
                                        <div>
                                            <div>Arnika Sorkar</div>
                                            <div>Web designer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 team-image-container">
                                <div>
                                    <LazyLoadImage src="images/team-image2.jpg" alt="Team Images" />
                                    <div className="team-overlay">
                                        <div>
                                            <div>Arnika Sorkar</div>
                                            <div>Web designer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 team-image-container">
                                <div>
                                    <LazyLoadImage src="images/team-image3.jpg" alt="Team Images" />
                                    <div className="team-overlay">
                                        <div>
                                            <div>Arnika Sorkar</div>
                                            <div>Web designer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 team-image-container">
                                <div>
                                    <LazyLoadImage src="images/team-image4.jpg" alt="Team Images" />
                                    <div className="team-overlay">
                                        <div>
                                            <div>Arnika Sorkar</div>
                                            <div>Web designer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestTeam;
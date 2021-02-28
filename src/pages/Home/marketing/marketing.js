import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Marketing() {
    return (
        <div className="marketing">
            <div className="container">
                <div className="row">
                    <div className="d-none d-md-block col-md-12 col-lg-6 mark-images">
                        <div className="top-right-image">
                            <LazyLoadImage src="images/marketing-1.jpg" alt="Marketing" />
                        </div>
                        <div className="bottom-left-image">
                            <div className="overlay">
                                <button>
                                    <i className="fas fa-play"></i>
                                </button>
                            </div>
                            <LazyLoadImage src="images/marketing-2.jpg" alt="Marketing" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 mark-info">
                        <div>
                            <span className="agency">About Our Agency</span>
                            <span className="h1 d-block mark-title">Guess What<br /> Marketing Can <br /> Achieve</span>
                            <p className="mark-desc">We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the people and that platforms where interests converge.</p>
                            <div className="mark-popular">
                                <div>
                                    <span className="mark-sub k12">12K+</span>
                                    <span className="mark-sub-text">0% Transaction Fee</span>
                                </div>
                                <div>
                                    <span className="mark-sub m1">1M+</span>
                                    <span className="mark-sub-text">Events (Webinars)</span>
                                </div>
                            </div>
                            <div className="mark-team">
                                <span className="mark-sub">10K+</span>
                                <span className="mark-sub-text">Setup Campaigns, Alert, Bots</span>
                            </div>
                            <div className="mark-button">
                                <div>
                                    <button className="text-uppercase">
                                        Contact Us
                                        <span className="s-overlay"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketing;
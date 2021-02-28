import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Ads() {
    return (
        <div className="ads">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ads-content">
                        <div>
                            <span className="ads-save">Save 20% with Annual Billing</span>
                            <span className="d-block h1 ads-title">Promtion ads with into<br /> Montion Grahpic</span>
                            <p className="ads-desc">We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the We develop</p>
                            <div className="ads-button">
                                <button className="text-uppercase">
                                    start now
                                    <span className="s-overlay"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ads-image">
                        <div>
                            <LazyLoadImage src="images/2.jpg" alt="Ads" />
                        </div>
                        <ul className="list-unstyled list-ads">
                            <li>Chat messenger</li>
                            <li>5 Products</li>
                            <li>25,000 Marketing Emails /mo</li>
                            <li>1 Admin User</li>
                            <li>25 Pipelines</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ads;
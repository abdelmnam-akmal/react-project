import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ShopContent() {
    return (
        <div className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-12 shop-header text-center">
                        <div>
                            <span className="text-uppercase">products services</span>
                            <span className="d-block h1">We Make Beautiful Things</span>
                        </div>
                    </div>
                    <div className="col-12 text-center shop-list">
                        <div>
                            <ul className="list-unstyled shop-list-content">
                                <li className="active" data-filter="all">All Work</li>
                                <li data-filter=".category-a">Projects</li>
                                <li data-filter=".category-b">Pranding Strategy</li>
                                <li data-filter=".category-c">Digital Experince</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 shop-content">
                        <div className="row">
                            <div className="col-md-8 shop-image">
                                <div>
                                    <LazyLoadImage src="images/shop-1.jpg" alt="Blog" />
                                </div>
                            </div>
                            <div className="col-md-4 shop-image">
                                <div>
                                    <LazyLoadImage src="images/shop-2.jpg" alt="Blog" />
                                </div>
                            </div>
                            <div className="col-md-4 shop-image">
                                <div>
                                    <LazyLoadImage src="images/shop-3.jpg" alt="Blog" />
                                </div>
                            </div>
                            <div className="col-md-8 shop-image">
                                <div>
                                    <LazyLoadImage src="images/shop-4.jpg" alt="Blog" />
                                </div>
                            </div>
                            <div className="col-md-8 shop-image">
                                <div>
                                    <LazyLoadImage src="images/shop-5.jpg" alt="Blog" />
                                </div>
                            </div>
                            <div className="col-md-4 shop-image">
                                <div>
                                    <LazyLoadImage src="images/shop-6.jpg" alt="Blog" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopContent;
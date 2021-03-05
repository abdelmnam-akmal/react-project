import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function PortfolioContent() {
    return (
        <div className="porto">
            <div className="porto-links">
                <div className="container">
                    <div className="row">
                        <div className="col-12 porto-links-content">
                            <div>
                                <ul className="list-unstyled">
                                    <li className="active" data-filter="all">All</li>
                                    <li data-filter=".category-a">Branding</li>
                                    <li data-filter=".category-b">Business</li>
                                    <li data-filter=".category-c">Consultans</li>
                                    <li data-filter=".category-d">Graphic</li>
                                    <li data-filter=".category-e">Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="porto-images">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-xl-3 porto-images-container mix category-d">
                            <div>
                                <LazyLoadImage src="images/one.jpg" alt="Portfolio Image" />
                                <div className="overlay">
                                    <div>
                                        <div className="text-center mb-2">
                                            <i className="fas fa-link"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h5>Creative Logo Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 porto-images-container mix category-a">
                            <div>
                                <LazyLoadImage src="images/two.jpg" alt="Portfolio Image" />
                                <div className="overlay">
                                    <div>
                                        <div className="text-center mb-2">
                                            <i className="fas fa-link"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h5>Creative Logo Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 porto-images-container mix category-a">
                            <div>
                                <LazyLoadImage src="images/three.jpg" alt="Portfolio Image" />
                                <div className="overlay">
                                    <div>
                                        <div className="text-center mb-2">
                                            <i className="fas fa-link"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h5>Creative Logo Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 porto-images-container mix category-c">
                            <div>
                                <LazyLoadImage src="images/four.jpg" alt="Portfolio Image" />
                                <div className="overlay">
                                    <div>
                                        <div className="text-center mb-2">
                                            <i className="fas fa-link"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h5>Creative Logo Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-8 porto-images-container mix category-b">
                            <div>
                                <LazyLoadImage src="images/five.jpg" alt="Portfolio Image" />
                                <div className="overlay">
                                    <div>
                                        <div className="text-center mb-2">
                                            <i className="fas fa-link"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h5>Creative Logo Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 porto-images-container mix category-e">
                            <div>
                                <LazyLoadImage src="images/six.jpg" alt="Portfolio Image" />
                                <div className="overlay">
                                    <div>
                                        <div className="text-center mb-2">
                                            <i className="fas fa-link"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h5>Creative Logo Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-6 porto-images-container mix category-b">
                            <div>
                                <LazyLoadImage src="images/seven.jpg" alt="Portfolio Image" />
                                <div className="overlay">
                                    <div>
                                        <div className="text-center mb-2">
                                            <i className="fas fa-link"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h5>Creative Logo Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 porto-images-container mix category-c">
                            <div>
                                <LazyLoadImage src="images/eight.jpg" alt="Portfolio Image" />
                                <div className="overlay">
                                    <div>
                                        <div className="text-center mb-2">
                                            <i className="fas fa-link"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h5>Creative Logo Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 porto-images-container mix category-d">
                            <div>
                                <LazyLoadImage src="images/nine.jpg" alt="Portfolio Image" />
                                <div className="overlay">
                                    <div>
                                        <div className="text-center mb-2">
                                            <i className="fas fa-link"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h5>Creative Logo Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-5 porto-images-container mix category-c">
                            <div>
                                <LazyLoadImage src="images/ten.jpg" alt="Portfolio Image" />
                                <div className="overlay">
                                    <div>
                                        <div className="text-center mb-2">
                                            <i className="fas fa-link"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h5>Creative Logo Design</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-7 porto-images-container mix category-e">
                            <div>
                                <LazyLoadImage src="images/eleven.jpg" alt="Portfolio Image" />
                                <div className="overlay">
                                    <div>
                                        <div className="text-center mb-2">
                                            <i className="fas fa-link"></i>
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h5>Creative Logo Design</h5>
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

export default PortfolioContent;
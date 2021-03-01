function Customer() {
    return (
        <div className="customer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 customer-content">
                        <div>
                            <span className="h1">A Satisfied Customer</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ectetur adipis.</p>
                            <div className="customer-button">
                                <button className="text-uppercase">
                                    get started
                                    <span className="s-overlay"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div>
                            <div className="skill-wrapper">
                                <div className="wrap">
                                    <div className="progress-radial progress-75">
                                        <div className="overlay">
                                            75% <br />
                                            HTMl
                                        </div>
                                    </div>
                                    
                                    <div className="progress-radial progress-60">
                                        <div className="overlay">
                                            60% <br />
                                            Web Design
                                        </div>
                                    </div>
                                    
                                    <div className="progress-radial progress-90">
                                        <div className="overlay">
                                            90% <br />
                                            Wordpress
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

export default Customer;
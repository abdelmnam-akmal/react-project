function Ratings() {
    return (
        <div className="ratings">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 ratings-content">
                        <div>
                            <i className="fas fa-briefcase"></i>
                            <div>
                                <span>45K</span>
                                <h4>work completed</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ratings-content">
                        <div>
                            <i className="far fa-star"></i>
                            <div>
                                <span>38K</span>
                                <h4>happy customers</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ratings-content">
                        <div>
                            <i className="far fa-heart"></i>
                            <div>
                                <span>5161</span>
                                <h4>positive feedbacks</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ratings;
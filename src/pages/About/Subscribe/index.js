import React from "react";

function Subscribe() {

    return (
        <div className="sub">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 sub-login">
                        <div>
                            <span className="d-block h2">Subscribe to get notified!</span>
                            <div>
                                <input type="email" name="email" placeholder="Type Your Email" />
                                <button className="text-uppercase">
                                    Subscribe
                                </button>
                            </div>
                            <p>We are not spammers!</p>
                            <ul className="list-unstyled list-sub">
                                <li className="d-inline-block"><i className="fab fa-facebook-f"></i></li>
                                <li className="d-inline-block"><i className="fab fa-twitter"></i></li>
                                <li className="d-inline-block"><i className="far fa-envelope"></i></li>
                                <li className="d-inline-block"><i className="fab fa-pinterest"></i></li>
                                <li className="d-inline-block">- stay in touch</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 sub-text">
                        <div>
                            <span className="d-block h2">Be the first to get the app!</span>
                            <p>Etiam sem nibh, aliquet sit amet nunc nec. Nullam tincidunt consectetur odio vitae auctor. Phasellus nec nunc eu orci scelerisque fringilla. <span>Integer convallis pellentesque</span>. Mauris sit amet malesuada purus.</p>
                            <div>
                                <div>
                                    <img src="images/ps1.png" alt="play store" />
                                </div>
                                <div>
                                    <img src="images/ps3.png" alt="play store" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;
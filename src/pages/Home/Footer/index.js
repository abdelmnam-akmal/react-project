import React from "react";
import { getApi } from "../../../Api/api";
import { LazyLoadImage } from "react-lazy-load-image-component";

function FooterHome() {

    const [shaproSocial, setShaproSocial] = React.useState([]);

    React.useEffect(()=> {
        getApi().then(e => setShaproSocial(e.data.shaproSocial));
    }, []);

    const shaproSocialList = shaproSocial.map((item, index) => {
        return (
            <li key={index + 1} className="d-inline-block"><i className={item}></i></li>
        )
    })

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 footer-content">
                        <div>
                            <div className="footer-image">
                                <LazyLoadImage src="images/logo.png" alt="Footer Image" />
                            </div>
                            <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Eodem modo typi, qui nunc videntur.</p>
                            <ul className="list-unstyled shapro-list">{shaproSocialList}</ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 footer-content">
                        <div>
                            <div className="twitter-stream">
                                Twitter Stream<span>.</span>
                            </div>
                            <p className="p-twitter">Would you like to know about our next theme? <br /> https://t.co/69YglbWtUw <i className="fa fa-twitter"></i></p>
                            <p className="p-twitter">Recover WP updated to the version 1.3.4 <br /> https://t.co/PjMoihwZ <i className="fa fa-twitter"></i></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 footer-content">
                        <div>
                            <div className="instagram">
                                Instagram<span>.</span>
                            </div>
                            <ul className="list-unstyled list-instagram">
                                <li><LazyLoadImage src="images/instagram-1.jpg" alt="instagram image" /></li>
                                <li><LazyLoadImage src="images/instagram-2.jpg" alt="instagram image" /></li>
                                <li><LazyLoadImage src="images/instagram-3.jpg" alt="instagram image" /></li>
                                <li><LazyLoadImage src="images/instagram-4.jpg" alt="instagram image" /></li>
                                <li><LazyLoadImage src="images/instagram-5.jpg" alt="instagram image" /></li>
                                <li><LazyLoadImage src="images/instagram-6.jpg" alt="instagram image" /></li>
                            </ul>
                            <span className="follow"><i className="fa fa-instagram"></i> Follow</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 footer-content">
                        <div>
                            <div className="contact">
                                Contact Us<span>.</span>
                            </div>
                            <ul className="list-unstyled list-contact">
                                <li><span>Address:</span> 795 South Park Avenue, Melbourne, Australia</li>
                                <li><span>Phone:</span> +20 101 0108 467</li>
                                <li><span>Email:</span> abdoakmal71@gmail.com</li>
                            </ul>
                            <p className="office">Office Hours</p>
                            <span>
                                Mon - Thur: 8:30a - 5:00p <br />
                                Fri: 8:30a - 12:00p
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterHome;
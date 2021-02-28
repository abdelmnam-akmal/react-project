import React from "react";
import { getApi } from "../../../Api/api";

function TopNavbar() {

    const [social, setSocial] = React.useState({});
    const email = 'abdo@gmail.com'
    const number = '+20 101 010 8467'

    React.useEffect(()=> {
        getApi().then(e => setSocial(e.data.socialMedia));
    }, []);

    return (
        <div className="top-navbar d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 top-mail">
                        <div>
                            <i className={social.email}></i>
                            <span>Mail: {email}</span>
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-3 top-call">
                        <div>
                                <i className={social.call}></i>
                                <span>Phone: {number}</span>
                            </div>
                        </div>
                    <div className="col-md-6 top-social text-end">
                        <div>
                            <span className="d-inline-block">
                                <i className={social.facebook}></i>
                                <span className="s-overlay"></span>
                            </span>
                            <span className="d-inline-block">
                                <i className={social.pintrest}></i>
                                <span className="s-overlay"></span>
                            </span>
                            <span className="d-inline-block">
                                <i className={social.twitter}></i>
                                <span className="s-overlay"></span>
                            </span>
                            <button className="text-uppercase d-inline-block">
                                Get Started
                                <span className="s-overlay"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar;
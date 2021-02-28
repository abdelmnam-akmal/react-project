import React from "react";
import { getApi } from "../../../Api/api";

function SpecialTeam() {

    const [special, setSpecial] = React.useState([]);

    React.useEffect(()=> {
        getApi().then((e) => {setSpecial(e.data.specialTeam)});
    }, []);

    const specialContent = special.map((item, index) => {
        return (
            <div className="col-md-6 col-lg-4 text-center special-content" key={index + 1}>
                <div>
                    <h4 className="header-info">{item.title}</h4>
                    <i className={item.icon + ' icon-info'}></i>
                    <p className="desc-info">{item.desc}</p>
                    <span className="s-overlay"></span>
                </div>
            </div>
        )
    })

    return (
        <div className="special-team">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center special-header">
                        <span className="h1 special-title">Our Specialized Teams Lead the <br />
                                Product Design and Development.
                        </span>
                        <p className="special-desc">We craft unique digital experiences. With more than 7 years of expertise we<br />
                            design and code clean websites, we build brands and help them succeed!
                        </p>
                    </div>

                    {specialContent}

                    <div className="col-12 text-center special-footer">
                        <p>Let’s Come Up With a Start Free <span>Trial 30-Day Money</span> Back Guarantee For New Purchases​.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialTeam;
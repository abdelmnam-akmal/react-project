import React from "react";
import { getApi } from "../../../Api/api";

function Testi() {

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
        <div className="testi">
            <div className="container">
                <div className="row">
                    <div className="col-12 testi-values">
                        <div>
                            <ul id="testi-toggler" className="testi-toggler list-unstyled">
                                <li className="active" data-testi="#values">Our Values</li>
                                <li data-testi="#philosophy">Our Philosophy</li>
                                <li data-testi="#mission">Our Mission</li>
                            </ul>
                            <div className="testi-values-content">
                                <div id="values" className="selected">
                                    <h4>our values</h4>
                                    <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius est notare quam littera gothica, quam nunc putamus parum claram. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum odio</p>
                                    <ul className="list-unstyled shapro-list">{shaproSocialList}</ul>
                                    <div className="button-testi">
                                        <button className="text-uppercase">
                                            read more
                                            <span className="s-overlay"></span>
                                        </button>
                                    </div>
                                </div>
                                <div id="philosophy">
                                    <h4>Our Philosophy</h4>
                                    <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius est notare quam littera gothica, quam nunc putamus parum claram. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum odio</p>
                                    <div className="button-testi">
                                        <button className="text-uppercase">
                                            read more
                                            <span className="s-overlay"></span>
                                        </button>
                                    </div>
                                </div>
                                <div id="mission">
                                    <h4>Our Mission</h4>
                                    <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius est notare quam littera gothica, quam nunc putamus parum claram. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum odio</p>
                                    <div className="button-testi">
                                        <button className="text-uppercase">
                                            read more
                                            <span className="s-overlay"></span>
                                        </button>
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


export default Testi;
import React from "react";
import { getApi } from "../../../Api/api";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Price() {

    const [price, setPrice] = React.useState([]);

    React.useEffect(()=> {
        getApi().then((e) => setPrice(e.data.price));
    }, []);

    const priceTemplate = price.map((item, index) => {
        return (
            <div className="col-md-6 col-lg-4 price-content" key={index + 1}>
                <div className={'direct' + index}>
                    <div className="price-image">
                        <LazyLoadImage src={item.image} alt="Price Image" />
                    </div>
                    <div className="price-about">
                        <div className="price-title">
                            <span className="price-info text-uppercase">{item.priceInfo}</span>
                            <div className="h2 price-title2">{item.title}</div>
                            <p className="price-desc">{item.desc}</p>
                        </div>
                        <ul className="list-unstyled price-list">
                            {item.list.map((item, index) => <li key={index + 1}>
                                {item}
                                <i className="fa fa-check"></i>
                            </li>)}
                        </ul>
                        <div className="price-number">
                            <span>{item.priceNumber} <span>{item.priceDate}</span></span>
                            <div className="price-button">
                                <button className="text-uppercase">Place your Order
                                    <span className="s-overlay"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    function moveButton () {
        const buttonHover = document.getElementsByClassName('price-btn-toggler')[0].firstChild;
        buttonHover.classList.toggle('move');
    }

    return (
        <div className="price">
            <div className="container">
                <div className="row">
                    <div className="col-12 price-header text-center">
                        <span>Planning on Developing a Product</span>
                        <div className="h1">Pricing & Plans</div>
                        <div className="price-button-toggler">
                            <span className="d-none d-md-block">Monthly Billing</span>
                            <button className="price-btn-toggler" onClick={moveButton}>
                                <span></span>
                            </button>
                            <span className="d-none d-md-block">Annually Billing</span>
                        </div>
                    </div>

                    {priceTemplate}
                
                </div>
            </div>
        </div>
    )
}

export default Price;
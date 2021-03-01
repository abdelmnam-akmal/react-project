import React from "react";

class Header extends React.Component {

    showPopup = () => {
        const popupId = document.getElementById('popup');
        const videoId = document.getElementById('video');

        if (true) {
            popupId.classList.add('active');
            videoId.setAttribute('src', 'media/video.mp4');
            setInterval(()=> {
                videoId.classList.add('selected');
            }, 1000)
        }
    }

    render() {
        return (
            <div id="header" className="header">
                <div className="header-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 shapro-text">
                                <div>
                                    <span className="text-uppercase header-info wow slideInLeft" data-wow-delay=".4s">
                                        we are shapro, a creative agency
                                    </span>
                                    <h1 className="header-title wow slideInLeft" data-wow-delay=".6s">
                                        Setup Your business <br /> Website with Shapro
                                    </h1>
                                    <p className="header-desc wow slideInLeft" data-wow-delay=".8s">
                                        Aliquam malesuada bibendum arcu vitae elementum curabitur vitae ven.<br />
                                        Pellentesque pulvinar elementum habitant morbi tristique.
                                    </p>
                                    <div className="button-header">
                                        <button className="btn-shapro text-uppercase wow slideInLeft" data-wow-delay="1s">
                                            Contact Us
                                            <span className="s-overlay"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 shapro-image">
                                <div className="wow slideInRight" data-wow-delay=".5s">
                                    <img src="images/shapro.png" alt="shapro" />
                                    <button onClick={this.showPopup}>
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;
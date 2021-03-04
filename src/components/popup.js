import React from "react";

function Popup() {

    function closePopup() {
        const popupId = document.getElementById('popup');
        const videoId = document.getElementById('video');
        if (popupId.classList.contains('active') && videoId.classList.contains('selected')) {
            console.log(videoId.setAttribute('src', ''));
            popupId.classList.remove('active');
            videoId.classList.remove('selected');
        }
    }

    function stopHide(e) {
        e.stopPropagation();
    }

    return (
        <div id="popup" className="popup" onClick={closePopup}>
            <div className="container">
                <div className="row">
                    <div className="col-12 popup-video">
                        <div>
                            <video src="" id="video" className="video" controls onClick={stopHide}>
                                Your Browser Dosen't Support this video
                            </video>
                            <button className="video-button" onClick={closePopup}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default Popup;
import React from "react";

class Loader extends React.Component {

    componentDidMount() {
        window.addEventListener("load", function(e) {
            const preloader = document.getElementById('loader').classList;
            preloader.add('pre-hidden');
            setInterval(()=> {
                preloader.add('d-none');
            }, 1000);
        });
    }

    render() {
        return (
            <div id="loader" className="preloader">
                <div className='circle'>
                    <div className="circle-cutter"></div>
                    <div className="circle-inner"></div>
                </div>
            </div>
            )
    }
}

export default Loader;
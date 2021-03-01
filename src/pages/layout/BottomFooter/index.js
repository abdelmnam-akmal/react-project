import React from "react";
import { Link } from "react-router-dom";

function BottomFooter() {
    return (
        <footer className="text-center">
            <div><span>&copy; 2021__</span><Link to="/" target="_blank">Abdelmnam</Link></div>
        </footer>
    )
}

export default BottomFooter;
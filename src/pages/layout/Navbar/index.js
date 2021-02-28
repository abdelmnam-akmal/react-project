import React from "react";
import { Link, NavLink } from "react-router-dom";
// 

function Navbar() {

    function buttonTogggle() {
        const buttonId = document.getElementById('navbar-toggler');
        const buttonCLass = buttonId.firstChild.firstChild.classList;
        if (buttonCLass.contains('fa-bars')) {
            buttonCLass.remove('fa-bars');
            buttonCLass.add('fa-times');
        } else {
            buttonCLass.remove('fa-times');
            buttonCLass.add('fa-bars');
        }
    }

    return (
        <nav id="navbar" className="navbar navbar-expand-lg">
            <div className="container">

                <Link id="navbar-brand" to="/" className="navbar-brand">
                    <img src="images/logo.png" alt="Logo" />
                </Link>

                <button onClick={buttonTogggle} id="navbar-toggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shop">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <span className="icon-desc d-none d-lg-flex">
                    <i className="icon fab fa-shopify fa-fw"></i>
                </span>    
                <span className="icon-desc d-none d-lg-flex"><i className="icon fas fa-search fa-fw"></i></span>

            </div>
        </nav>
    )
}

export default Navbar;
import React, { Component } from "react";

class Header extends Component {
    render() {
        return(
            <header id="header">
            <div className="container-xl">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo-wrapper">
                        <img src="./../images/logo.svg" alt="logo"/>
                    </div>
    
                    <nav className="menu">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">News</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
    
                        </ul>
    
                    </nav>
                    <nav className="actions">
                        <ul>
                            <li>
                                <a href="#" tabIndex="-1" aria-disabled="true">Login</a>
                            </li>
                            <li>
                                <a href="#" tabIndex="-1" className="signup" aria-disabled="true">Signup</a>
                            </li>
                            <li>
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    EN
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">ع</a></li>
                                </ul>
                            </li>
                            <li className="toogle-btn">
                                <div id="toggle">
                                    <div className="one"></div>
                                    <div className="two"></div>
                                    <div className="three"></div>
                                  </div>
                            </li>
                        </ul>
                    </nav>
    
    
    
                </div>
            </div>
    
    
        </header> 
        )
    }
}
    
export default Header;
    
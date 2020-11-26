import React from 'react';
import { NavLink } from 'react-router-dom'
import SiteLogo from "../../../assets/img/logos/logo.png"
import {Link} from 'react-scroll'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function refreshPage() {
    window.location.reload(false);
}


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__wrapper">
            <div className="toolbar__header">
                <div onClick={refreshPage}>
                    <Link to="/"><img src={SiteLogo} alt="Logo" className="toolbar__logo" /></Link>
                </div>
                
                <div onClick={() => props.setMenu(false)}>
                    <FontAwesomeIcon icon={faTimes} className="toolbar__closeIcon"/>
                </div>
            </div>
            
            <ul className="toolbar__menu">
                <li><Link activeClass="active" className="howItWorks" to = "section1-content3" smooth={true} duration={1000}　onClick={() => props.setMenu(false)}>How It Works</Link></li>
                <li><Link activeClass="active" className="features" to = "home-section2" smooth={true} duration={1000}　onClick={() => props.setMenu(false)}>Features</Link></li>
                <li><Link activeClass="active" className="team" to = "home-section3" smooth={true} duration={1000}　onClick={() => props.setMenu(false)}>Team</Link></li>
                <li><NavLink activeClassName="active" to="/signIn" className="forRestaurants"　onClick={() => props.setMenu(false)}><button>For Restaurants</button></NavLink></li>
            </ul> 

            <div className="toolbar__footer">
                <p>Made with love remotely from Vancouver, BC.</p>
                <p> &copy; 2020 Taste It. All rights reserved.</p>
            </div>
        </nav>
    </header>
)

export default toolbar
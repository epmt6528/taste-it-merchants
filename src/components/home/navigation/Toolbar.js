import React from 'react';
import HamburgerButton from './Hamburger'
import { NavLink } from 'react-router-dom'

import SiteLogo from "../../../img/logo.png"
import {Link} from 'react-scroll'

// const ScrollLink = Scroll.ScrollLink


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
                    {/* <HamburgerButton click={props.drawerClickHandler} /> */}
                    x
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
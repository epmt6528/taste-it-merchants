import React, {useState} from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import SiteLogo from "../../../img/logo.svg"


const DesktopMenu = () => {
    return (
        <div className="desktopMenu__wrapper">
            <div className="desktopMenu">
                <img src={SiteLogo} alt="tasteIt Logo" className="desktopMenu__logo"/>

                <ul>
                    <li><Link activeClass="active" className="howItWorks" to = "section1-content3" smooth={true} duration={1000}>How It Works</Link></li>
                    <li><Link activeClass="active" className="features" to = "home-section2" smooth={true} duration={1000}>Features</Link></li>
                    <li><Link activeClass="active" className="team" to = "home-section3" smooth={true} duration={1000}>Team</Link></li>
                </ul>

                <NavLink activeClassName="active" to="/signIn" className="forRestaurants"><button>For Restaurants</button></NavLink>
            </div>
        </div>
        
    )

}

export default DesktopMenu
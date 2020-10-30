import React from 'react'
// import Logo from '../Logo'
import { Link } from 'react-router-dom'
import {Link as Scroll} from 'react-scroll'
import { NavLink } from 'react-router-dom'
// import { render } from '@testing-library/react'
// import SiteLogo from "../../img/Logo.svg"

const MobileMenu = props => {

   

    let mobileMenuClasses = 'mobile-menu'
    if (props.show) {
        mobileMenuClasses = 'mobile-menu open'
    }

   

    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <div className={mobileMenuClasses}>
            <div className="mobile-menu-head">
                 {/* <SiteLogo />  */}
                Logo
            </div>
            
            <nav className="mobile-menu-nav">
                <ul>
                    <li onClick={refreshPage}><Link to="/">Home</Link></li>
                    <li><Scroll activeClass="active" className="howItWorks" to = "section1-content3" smooth={true} duration={1000} onSetActive={props.close}>How It Works</Scroll></li>
                    <li><Scroll activeClass="active" className="features" to = "home-section2" smooth={true} duration={1000} onSetActive={props.close}>Features</Scroll></li>
                    <li><Scroll activeClass="active" className="team" to = "home-section3" smooth={true} duration={1000} onSetActive={props.close}>Team</Scroll></li>
                    <li><NavLink activeClassName="active" to="/signIn" className="forRestaurants" onClick={props.close}>For Restaurants</NavLink></li>
                </ul>
            </nav>
        </div>
    )

}

export default MobileMenu
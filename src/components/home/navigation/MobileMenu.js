import React, {useState} from 'react'
// import Logo from '../Logo'
import { Link } from 'react-router-dom'
import {Link as Scroll} from 'react-scroll'
import { NavLink } from 'react-router-dom'
// import { render } from '@testing-library/react'
import SiteLogo from "../../../img/logo.png"
import MenuButton from "../../../img/navigation.svg"
import Toolbar from "./Toolbar"

const MobileMenu = props => {
    const [menu, setMenu] = useState(false)

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
                 <img src={SiteLogo} alt="tasteIt Logo" className="mobile-menu__logo"/>
            </div>
            
            <span onClick={() => setMenu(menu ? false : true)}>
                <img src={MenuButton} alt="Menu Button" className="mobile-menu-nav__button" />
            </span>

            {
                menu ? <Toolbar /> : ''
            }
            {/* <nav className="mobile-menu-nav">
                <ul>
                    <li onClick={refreshPage}><Link to="/">Home</Link></li>
                    <li><Scroll activeClass="active" className="howItWorks" to = "section1-content3" smooth={true} duration={1000} onSetActive={props.close}>How It Works</Scroll></li>
                    <li><Scroll activeClass="active" className="features" to = "home-section2" smooth={true} duration={1000} onSetActive={props.close}>Features</Scroll></li>
                    <li><Scroll activeClass="active" className="team" to = "home-section3" smooth={true} duration={1000} onSetActive={props.close}>Team</Scroll></li>
                    <li><NavLink activeClassName="active" to="/signIn" className="forRestaurants" onClick={props.close}>For Restaurants</NavLink></li>
                </ul>
            </nav> */}
        </div>
    )

}

export default MobileMenu
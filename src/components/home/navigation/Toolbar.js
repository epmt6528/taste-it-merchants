import React from 'react';
import HamburgerButton from './Hamburger'
import { NavLink } from 'react-router-dom'

// import LogoImage from '../../../img/lair-logo.png'
import {Link} from 'react-scroll'

// const ScrollLink = Scroll.ScrollLink

function refreshPage() {
    window.location.reload(false);
}

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div onClick={refreshPage} className="site-logo">
                {/*<Link><img alt="Logo-Image" /></Link>*/}
                <img alt="Logo" />
            </div>
            
            <div>
                <HamburgerButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-nav-items">
                <ul>
                    <li><Link activeClass="active" className="howItWorks" to = "section1-content3" smooth={true} duration={1000}>How It Works</Link></li>
                    <li><Link activeClass="active" className="features" to = "home-section2" smooth={true} duration={1000}>Features</Link></li>
                    <li><Link activeClass="active" className="team" to = "home-section3" smooth={true} duration={1000}>Team</Link></li>
                    <li><NavLink activeClassName="active" to="/signIn" className="forRestaurants">For Restaurants</NavLink></li>
                </ul> 
            </div>
        </nav>
    </header>
)

export default toolbar
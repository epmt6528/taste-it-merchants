import React, {useState} from 'react'
// import Logo from '../Logo'
import { Link } from 'react-router-dom'
import {Link as Scroll} from 'react-scroll'
import { NavLink } from 'react-router-dom'
// import { render } from '@testing-library/react'
import SiteLogo from "../../../img/logo.svg"
import MenuButton from "../../../img/navigation.svg"
import Toolbar from "./Toolbar"

const MobileMenu = props => {
    const [menu, setMenu] = useState(false)

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className='mobile-menu'>
            <div className="mobile-menu-head">
                <Link to="/"><img src={SiteLogo} alt="tasteIt Logo" className="mobile-menu__logo"/></Link>
            </div>
            
            <span onClick={() => setMenu(menu ? false : true)}>
                <img src={MenuButton} alt="Menu Button" className="mobile-menu-nav__button" />
            </span>

            {
                menu ? <Toolbar setMenu={setMenu} handleChange={props.handleChange} value={props.value}/> : ''
            }
        </div>
    )

}

export default MobileMenu
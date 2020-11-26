import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import SiteLogo from "../../../assets/img/logos/logo.svg"
import MenuButton from "../../../assets/img/icons/navigation.svg"
import Toolbar from "./Toolbar"

const MobileMenu = props => {
    const [menu, setMenu] = useState(false)

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
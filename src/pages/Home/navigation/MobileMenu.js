import React, {useState} from 'react'
import SiteLogo from "../../../assets/img/logos/logo.png"
import MenuButton from "../../../assets/img/icons/navigation.svg"
import Toolbar from "./Toolbar"

const MobileMenu = props => {
    const [menu, setMenu] = useState(false)

    return (
        <div className='mobile-menu'>
            <div className="mobile-menu-head">
                 {/* <SiteLogo />  */}
                 <img src={SiteLogo} alt="tasteIt Logo" className="mobile-menu__logo"/>
            </div>
            
            <span onClick={() => setMenu(menu ? false : true)}>
                <img src={MenuButton} alt="Menu Button" className="mobile-menu-nav__button" />
            </span>

            {
                menu ? <Toolbar setMenu={setMenu} /> : ''
            }
        </div>
    )

}

export default MobileMenu
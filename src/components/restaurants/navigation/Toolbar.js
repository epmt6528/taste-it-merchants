import React from 'react';

import SiteLogo from "../../../img/logo.svg"
import {Link, BrowserRouter} from 'react-scroll'

import Icon from "../../Icon"

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



// const ScrollLink = Scroll.ScrollLink


function refreshPage() {
    window.location.reload(false);
}

const Toolbar = props =>{
    console.log(props.value)
    return(
        <header className="toolbar">
            <nav className="toolbar__wrapper">
                <div className="toolbar__header">
                    <div onClick={refreshPage}>
                        <Link to="/"><img src={SiteLogo} alt="Logo" className="mobile-menu__logo" /></Link>
                    </div>
                    
                    <div onClick={() => props.setMenu(false)}>
                        x
                    </div>
                </div>
                
                <ul className="toolbar__menu">
                    <Tabs
                        orientation="vertical"
                        value={props.value}
                        onChange={props.handleChange}
                    >
                        <Tab label="Active Orders" icon={<Icon name="activeOrders" />} to="/restaurant/activeOrders" component={Link} onClick={() => props.setMenu(false)} />
                        <Tab label="Menu" icon={ <Icon name="menu" />} to="/restaurant/menus" component={Link} onClick={() => props.setMenu(false)} />
                        <Tab label="Order History" icon={<Icon name="orderHistory" />} to="/restaurant/orderHistory" component={Link} onClick={() => props.setMenu(false)} /> 
                        <Tab label="Account" icon={<Icon name="account" />} to="/restaurant/account" component={Link} onClick={() => props.setMenu(false)} />
                        <Tab label="Support" icon={<Icon name="support" />} to="/restaurant/contact" component={Link} onClick={() => props.setMenu(false)} />
                    </Tabs>
                </ul> 
            </nav>
        </header>
    )
}

export default Toolbar
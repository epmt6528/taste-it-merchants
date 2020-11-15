import React from "react";
import MediaQuery from 'react-responsive';
import MobileMenu from "./navigation/MobileMenu";
import DesktopMenu from "./navigation/DesktopMenu";
import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <MediaQuery maxDeviceWidth={1000}>
        <MobileMenu />
      </MediaQuery>

      <MediaQuery minDeviceWidth={1001}>
        <DesktopMenu />
      </MediaQuery>
    </header>
  );
}

export default Header;

import React, { Component } from "react";
import SignInForm from "./SignInForm";
import { Link } from "react-router-dom";
import SignInPic from "../../../img/dishes/signIn.jpg";
import SignInPicWebP from "../../../img/dishes/signIn.jpg.webp";
import Logo from "../../../img/logo.png";
import LogoLarge from "../../../img/logo.svg"
import MediaQuery from 'react-responsive';

class SignIn extends Component {
  render() {
    return (
      <div className="signIn">

        <MediaQuery maxDeviceWidth={1200}>
          <Link to="/" >
            <img src={Logo} alt="logo" className="signIn__logo"/>
          </Link>
        </MediaQuery>

        <MediaQuery minDeviceWidth={1201}>
          <Link to="/" >
            <img src={LogoLarge} alt="logo" className="signIn__logoLarge"/>
          </Link>
        </MediaQuery>
        
        <div className="signIn__main">
          <picture>
            <source srcset={SignInPicWebP} type="image/webp" />
            <img src={SignInPic} alt="" />
          </picture>
          
          <div className="signIn__container">
            <h1>Take your restaurant to the next level.</h1>
            <p>
              Discover a new way for your restaurant to manage your online
              orders.
            </p>

            <SignInForm />

            <span className="signIn__cta">Not in partner with Taste It? <Link to="/signUp" ><span>Sign up now</span></Link></span>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;

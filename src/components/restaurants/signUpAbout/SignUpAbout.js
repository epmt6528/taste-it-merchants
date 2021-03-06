import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignUpAboutForm from "./SignUpAboutForm";
import Container from "@material-ui/core/Container";
import Logo from "../../../img/logo.svg";
import StrawberryCrepe from "../../../img/dishes/signUp1.png";

class SignUp extends Component {
  render() {
    return (
      <div className="signUp-about__wrapper">
        <div className="signUp-about">
          <Link to="/" >
            <img src={Logo} alt="logo" className="signUp-about__logo"/>
          </Link>
          
          <Container fixed className="signUp-about__main">
            <h1>Tell us about your resturant.</h1>
            <p>Team up with us and start growing your business</p>
            <SignUpAboutForm />
          </Container>
        </div>
        <img src={StrawberryCrepe} alt="Strawberry Crepe"  className="crepe" />
      </div>
      
    );
  }
}
export default SignUp;

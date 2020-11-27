import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignUpAboutForm from "./SignUpAboutForm";
import Container from "@material-ui/core/Container";
import Logo from "../../../assets/img/logos/logo.svg";
import StrawberryCrepe from "../../../assets/img/dishes/signUp1.png";
import StrawberryCrepeWebP from "../../../assets/img/dishes/signUp1.png.webp";

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

        <picture>
            <source srcSet={StrawberryCrepeWebP} type="image/webp" />
            <img src={StrawberryCrepe} alt="Strawberry Crepe"  className="crepe" />
        </picture>
      </div>
      
    );
  }
}
export default SignUp;

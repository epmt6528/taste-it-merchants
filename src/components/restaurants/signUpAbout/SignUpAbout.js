import React, { Component } from "react";
import SignUpAboutForm from "./SignUpAboutForm";
import Container from "@material-ui/core/Container";
import "./signUpAbout.css"

class SignUp extends Component {
  render() {
    return (
      <div className="signUp-about-wrapper">
        <Container fixed className="signUp-about-main">
          <img alt="logo"  />
          <h1>Tell us about your resturant.</h1>
          <p>Team up with us and start growing your business</p>
          <SignUpAboutForm />
          <img alt="sign up about restaurnat"  />
        </Container>
      </div>
    );
  }
}
export default SignUp;

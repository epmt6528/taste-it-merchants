import React, { Component } from "react";
import SignUpAddressForm from "./SignUpAddressForm";
import Container from "@material-ui/core/Container";

class SignUpAddress extends Component {
  render() {
    return (
      <div className="signUp-address-wrapper">
        <Container fixed className="signUp-address-main">
          <img alt="logo" />
          <h1>You are just a few steps away.</h1>
          <p>
            Your restaurant location will help us reach out to your target
            customers better
          </p>
          <SignUpAddressForm />
          <img alt="sign up address restaurnat" />
        </Container>
      </div>
    );
  }
}
export default SignUpAddress;

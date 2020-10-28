import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SignUpForm from "./SignUpForm";
import "./signUp.css"

class SignUp extends Component {
  render() {
    return (
      <div className="signUp-wrapper">
        <Grid container spacing={0} className="signUp-main">
          <Grid item xs={12} className="image-container">
            <img alt="logo" />
          </Grid>
          <Grid item xs={12} className="form-container">
            <h1>Become a partner</h1>
            <p>
              Expand your reach, grow your network and give a delightful
              experience to your customers.
            </p>
            <SignUpForm />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default SignUp;

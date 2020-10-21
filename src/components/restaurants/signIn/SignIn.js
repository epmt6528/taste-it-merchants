import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SignInForm from "./SignInForm";
import { Link } from "react-router-dom";

class SignIn extends Component {
  render() {
    return (
      <div className="signIn-main">
        <Grid container spacing={0}>
          <Grid item xs={12} className="image-container">
            <img alt="logo"  />
          </Grid>
          <Grid item xs={12} className="form-container">
            <h1>Take your restaurant to the next level.</h1>
            <p>
              Discover a new way for your restaurant to manage your online
              orders.
            </p>
            <SignInForm />
            <div className="signUp-text">
              <h2>Not in partner with Taste It? <Link to="/signUp">Sign up now</Link></h2>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default SignIn;

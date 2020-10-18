import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SignInForm from './SignInForm';

class SignIn extends Component {
  render() {
    return (
      <div className="signIn-wrapper">
        <div className="signIn-main">
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <img alt="logo" />
            </Grid>
            <Grid item xs={6} className="signIn-container">
              <h2>Not in partner with Taste It? Sign up now</h2>
              <h1>Take your restaurant to the next level.</h1>
              <p>
                Discover a new way for your restaurant to manage your online
                orders.
              </p>
              <SignInForm />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default SignIn;

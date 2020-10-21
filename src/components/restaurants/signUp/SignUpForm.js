import React from "react";
import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  textField: {
    display: "flex",
    margin: theme.spacing.unit,
    width: "50%",
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const SignUpForm = (props) => (
  <form className="signUp-form">
    <TextField
      //   className={props.classes.textField}
      label="Email"
      margin="normal"
      name="email"
      type="email"
      variant="outlined"
      InputLabelProps={{
        required: true,
        color: "primary",
        shrink: true,
      }}
    />
    <TextField
      //   className={props.classes.textField}
      label="Password"
      margin="normal"
      name="password"
      type="password"
      variant="outlined"
      InputLabelProps={{
        required: true,
        shrink: true,
      }}
    />
    <TextField
      //   className={props.classes.textField}
      label="Confirm Password"
      margin="normal"
      name="confirm-password"
      type="password"
      variant="outlined"
      InputLabelProps={{
        required: true,
        shrink: true,
      }}
    />
    <Button
      //   className={props.classes.button}
      component={Link}
      to="/signUpAbout"
      color="primary"
      type="submit"
      variant="contained"
    >
      Sign Up
    </Button>
  </form>
);

export default withStyles(styles)(SignUpForm);

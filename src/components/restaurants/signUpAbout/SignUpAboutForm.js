import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

const SignUpAboutForm = (props) => (
  <form className="signUp-about-form">
    <TextField
      //   className={props.classes.textField}
      label="Restaurant Name"
      margin="normal"
      name="restaurant-name"
      type="text"
      variant="outlined"
      InputLabelProps={{
        required: true,
        color: "primary",
        shrink: true,
      }}
    />
    <TextField
      //   className={props.classes.textField}
      label="Phone Number"
      margin="normal"
      name="phone-number"
      type="text"
      variant="outlined"
      InputLabelProps={{
        required: true,
        shrink: true,
      }}
    />
    <TextField
      //   className={props.classes.textField}
      label="Restaurant Description"
      margin="normal"
      name="restaurant-description"
      type="text"
      multiline
      rows={4}
      variant="outlined"
      InputLabelProps={{
        required: true,
        shrink: true,
      }}
    />
    <Button
      //   className={props.classes.button}
      component={Link}
      to="/signUpAddress"
      color="primary"
      type="submit"
      variant="contained"
    >
      Next
    </Button>
  </form>
);

export default withStyles(styles)(SignUpAboutForm);

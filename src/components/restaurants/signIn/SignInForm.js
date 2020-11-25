import React from "react";
import { Grid } from "@material-ui/core";
import { useForm, Form } from "../useForm";
import Controls from "../../controls/Controls";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {BASE_URL} from "../../../config/config"

const initialValues = {
  
  email: '',
  password: '',
};


export default function SignInForm() {

  const history = useHistory();

  // const validate = (fieldValues = values) => {
  //   let temp = { ...errors };
  //   if ("password" in fieldValues)
  //     temp.address = fieldValues.password ? "" : "This Field is Required";
  //   if ("email" in fieldValues)
  //     temp.email = /$^|.+@.+..+/.test(fieldValues.email)
  //       ? ""
  //       : "Email is not valid.";

  //   setErrors({
  //     ...temp,
  //   });

  //   if (fieldValues === values)
  //     return Object.values(temp).every((x) => x === "");
  // };

  const {
    values,
    setValues,
    // errors,
    // setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialValues
    // , true, validate
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validate()) {
      // provinceService.insertEmployee(values)

      axios.post(`${BASE_URL}/restaurants/login`, {
        email: values.email,
        password: values.password
      }).then(res => {
        // console.log(res.data.token);
        localStorage.setItem('jwt-token', res.data.token);
        // console.log(props);

        history.push('/restaurant');
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });
      
      resetForm();
    // }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <Controls.TextFieldControl
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            InputLabelProps={{
              required: true,
            }}
            className="input"
            // error={errors.email}
          />
          <Controls.TextFieldControl
            label="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            // error={errors.password}
            type="password"
            InputLabelProps={{
              required: true,
            }}
            className="input"
          />
          <div>
            <button type="submit">Sign In</button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

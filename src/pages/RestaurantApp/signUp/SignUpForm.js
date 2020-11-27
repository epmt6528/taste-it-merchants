import React from "react";
import { useForm, Form } from "../useForm";
import Controls from "../../../components/controls/Controls";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {BASE_URL} from "../../../config/config"

const initialFValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const history = useHistory();

  // const validate = (fieldValues = values) => {
  //   let temp = { ...errors };
  //   if ("password" in fieldValues)
  //     temp.address =
  //       fieldValues.password.length > 7 ? "" : "Minimum 8 characters required";
  //   if ("email" in fieldValues)
  //     temp.email = /$^|.+@.+..+/.test(fieldValues.email)
  //       ? ""
  //       : "Email is not valid.";

  //   setErrors({
  //     ...temp,
  //   });

  //   if (fieldValues === values) return Object.values(temp).every((x) => x === "");
  // };

  const {
    values,
    // errors,
    // setErrors,
    handleInputChange,
    resetForm,
  } = useForm(
    initialFValues
    // , true, validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validate()) {
    // provinceService.insertEmployee(values)

    axios
      .post(`${BASE_URL}/restaurants/`, {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        // console.log(res.data.token);
        localStorage.setItem("jwt-token", res.data.token);
        // console.log(props);

        history.push("/signUpAbout");
      });
      
    resetForm();
    // }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="signUp">
          <Controls.TextFieldControl
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            // error={errors.email}
            InputLabelProps={{
              required: true,
            }}
          />
          <Controls.TextFieldControl
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleInputChange}
            // error={errors.password}
            InputLabelProps={{
              required: true,
            }}
          />
          <Controls.TextFieldControl
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleInputChange}
            // error={errors.password}
            InputLabelProps={{
              required: true,
            }}
          />

          <div>
            <button type="submit">Sign Up</button>
          </div>
       </div>
    </Form>
  );
}

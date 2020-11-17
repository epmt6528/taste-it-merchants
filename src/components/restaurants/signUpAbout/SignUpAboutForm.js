import React from "react";
import { Grid } from "@material-ui/core";
import { useForm, Form } from "../useForm";
import Controls from "../../controls/Controls";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { getJwtToken } from "../../getJwt";

const initialFValues = {
  restaurantName: "",
  restaurantDescription: "",
  phoneNumber: "",
};

export default function SignUpAboutForm() {
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
    setValues,
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
    const jwt = getJwtToken();
    if (!jwt) {
      history.push("/signIn");
    }
    console.log(jwt);
    // if (validate()) {
    // provinceService.insertEmployee(values)

    axios
      .put(
        "http://localhost:5000/api/restaurants/",
        {
          restaurantName: values.restaurantName,
          restaurantDescription: values.restaurantDescription,
          phoneNumber: values.phoneNumber,
        },
        { headers: { 'Authorization': `${jwt}` } },
      )
      .then((res) => {
        console.log("done in about");
        // console.log(props);
        history.push("/signUpAddress");
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("jwt-token");
        history.push("/signIn");
      });
      
    resetForm();
    // }
  };

  return (
    <Form onSubmit={handleSubmit}>
        <div className="signUp-about__form">
          <Controls.TextFieldControl
            name="restaurantName"
            label="Restaurant Name"
            value={values.restaurantName}
            onChange={handleInputChange}
            // error={errors.email}
            InputLabelProps={{
              required: true,
            }}
          />
          <Controls.TextFieldControl
            name="phoneNumber"
            label="Phone Number"
            value={values.phoneNumber}
            onChange={handleInputChange}
            // error={errors.email}
            InputLabelProps={{
              required: true,
            }}
          />
          <Controls.TextFieldControl
            className="signUp-about__descriptionInput"
            name="restaurantDescription"
            label="Restaurant Description"
            value={values.restaurantDescription}
            onChange={handleInputChange}
            multiline
            rows={4}
            // error={errors.email}
            InputLabelProps={{
              required: true,
            }}
          />

          <button type="submit">Next</button>
        </div>
      <div/>
    </Form>
  );
}

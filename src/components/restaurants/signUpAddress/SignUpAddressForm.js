import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useForm, Form } from "../useForm";
import Controls from "../../controls/Controls";
import * as provinceService from "../provinceService";
import * as cityService from "../cityService";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getJwtToken } from "../../getJwt";
import axios from "axios"
import {BASE_URL} from "../../../config/config"

////////////Using hooks

const initialFValues = {
  address: "",
  postcode: "",
  provinceNameId: "",
  cityNameId: "",
};

export default function SignUpAddressForm() {
  const history = useHistory();
let province = {
    
      1: 'British Columbia',
      2: 'Alberta',
      3: 'Ontario',
      4: 'Schatchwan'
  
}
let city = {
    
  1: 'Vancouver',
  2: 'Richmond',
  3: 'Surrey',
  4: 'Burnaby'

}
  // const validate = (fieldValues = values) => {
  //   let temp = { ...errors };
  //   if ("address" in fieldValues)
  //     temp.address = fieldValues.address ? "" : "This field is required.";
  //   if ("postcode" in fieldValues)
  //     temp.postcode = fieldValues.postcode ? "" : "This field is required.";
  //   if ("provinceNameId" in fieldValues)
  //     temp.provinceNameId =
  //       fieldValues.provinceNameId.length !== 0 ? "" : "This field is required.";
  //   if ("cityNameId" in fieldValues)
  //     temp.cityNameId =
  //       fieldValues.cityNameId.length !== 0 ? "" : "This field is required.";

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
    // if (validate()){

    const jwt = getJwtToken();
    if (!jwt) {
      history.push("/signIn");
    }
    const elements = {
      address: values.address,
      postcode: values.postcode,
      provinceName: values.provinceNameId,
      cityName: values.cityNameId
    };
    axios
      .post(`${BASE_URL}/restaurants/address`, elements, {
        headers: { 'Authorization': `${jwt}` },
      })
      .then((res) => {
        console.log("done in address");
        // console.log(props);
        history.push("/welcome");
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
      <div className="signUp-address__form">

        <div className="smallInput">
          <Controls.SelectControl
            name="provinceNameId"
            label="Province"
            value={province[values.provinceNameId]}
            onChange={handleInputChange}
            options={provinceService.getProvinceCollection()}
            inputlabelprops={{
              required: true,
            }}
            // error={errors.provinceNameId}
          />
          <Controls.SelectControl
            name="cityNameId"
            label="City"
            value={city[values.cityNameId]}
            onChange={handleInputChange}
            options={cityService.getCityCollection()}
            inputlabelprops={{
              required: true,
            }}
            // error={errors.cityNameId}
          />
        </div>

        <Controls.TextFieldControl
          name="address"
          label="Address"
          value={values.address}
          onChange={handleInputChange}
          inputlabelprops={{
            required: true,
          }}
          // error={errors.address}
        />
        <Controls.TextFieldControl
          label="Postal Code"
          name="postcode"
          value={values.postcode}
          onChange={handleInputChange}
          inputlabelprops={{
            required: true,
          }}
          // error={errors.postcode}
        />

        <button type="submit">Done</button>
       </div>
    </Form>
  );
}

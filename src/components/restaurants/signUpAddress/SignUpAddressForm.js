import React from "react";

import { Grid } from "@material-ui/core";
import { useForm, Form } from "../useForm";
import Controls from "../../controls/Controls";
import * as provinceService from "../provinceService";
import * as cityService from "../cityService";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }),
// );

// const styles = theme => ({
//   textField: {
//     display: 'flex',
//     margin: theme.spacing.unit,
//     width: '50%'
//   },
//   button: {
//     margin: theme.spacing.unit
//   }
// })
// const handleChange = (event) => {
//   const {name, value, type, checked} = event.target
//   this.setState({ [name]: value })
// }
// const [province] = React.useState('');

// const SignUpAddressForm = (props) => (

//   <form className="signUp-address-form">
//     <FormControl variant="outlined"
//     // className={classes.formControl}
//     >
//         <InputLabel id="outlined-label-province">Province</InputLabel>
//         <Select
//           labelId="outlined-label-province"
//           id="select-outlined-province"
//           // value={province}
//           onChange={handleChange}
//           label="Province"
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={"British Columbia"}>British Columbia</MenuItem>
//           <MenuItem value={"Alberta"}>Alberta</MenuItem>
//           <MenuItem value={"Ontario"}>Ontario</MenuItem>
//         </Select>
//       </FormControl>

//     <TextField
//     //   className={props.classes.textField}
//       label='Phone Number'
//       margin='normal'
//       name='phone-number'
//       type='number'
//       variant='outlined'
//       InputLabelProps={{
//         required: true,
//         shrink: true
//       }}
//     />
//     <TextField
//     //   className={props.classes.textField}
//       label='Restaurant Description'
//       margin='normal'
//       name='restaurant-description'
//       type='text'
//       multiline
//       rows={4}
//       variant='outlined'
//       InputLabelProps={{
//         required: true,
//         shrink: true
//       }}
//     />
//     <Button
//     //   className={props.classes.button}
//       color='primary'
//       type='submit'
//       variant='contained'
//     >
//       Next
//     </Button>
//   </form>
// )

// export default withStyles(styles)(SignUpAddressForm)

////////////Using hooks

const initialFValues = {
  id: 0,
  address: "",
  postcode: "",
  provinceNameId: "",
  cityNameId: "",
};

export default function SignUpAddressForm() {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("address" in fieldValues)
      temp.address = fieldValues.address ? "" : "This field is required.";
    if ("postcode" in fieldValues)
      temp.postcode = fieldValues.postcode ? "" : "This field is required.";
    if ("provinceNameId" in fieldValues)
      temp.provinceNameId =
        fieldValues.provinceNameId.length != 0 ? "" : "This field is required.";
    if ("cityNameId" in fieldValues)
      temp.cityNameId =
        fieldValues.cityNameId.length != 0 ? "" : "This field is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
 
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            // provinceService.insertEmployee(values)
            window.alert("done")
            resetForm()
        }
    }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <Grid container>
        <Grid item xs={12}>
          <Controls.SelectControl
            name="provinceNameId"
            label="Province"
            value={values.provinceNameId}
            onChange={handleInputChange}
            options={provinceService.getProvinceCollection()}
            error={errors.provinceNameId}
          />
          <Controls.SelectControl
            name="cityNameId"
            label="City"
            value={values.cityNameId}
            onChange={handleInputChange}
            options={cityService.getCityCollection()}
            error={errors.cityNameId}
          />
          <Controls.TextFieldControl
            name="address"
            label="Address"
            value={values.address}
            onChange={handleInputChange}
            error={errors.address}
          />
          <Controls.TextFieldControl
            label="Postal Code"
            name="postcode"
            value={values.postcode}
            onChange={handleInputChange}
            error={errors.postcode}
          />

          <div>
            <Controls.ButtonControl type="submit" text="Submit" />
            {/* <Controls.ButtonControl
                          text="Reset"
                          color="default"
                          onClick={resetForm} /> */}
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

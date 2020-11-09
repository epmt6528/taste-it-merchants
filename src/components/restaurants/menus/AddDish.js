import React from "react";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'

import MenuCreator from "./components/MenuCreator";

// const getStyles = makeStyles(theme => ({
//   root: {},
// }))


const AddDish = props =>{
  // const classes = getStyles()
  const {rName} = props.location.state

  return(
    <>
      <Typography>Hi {rName}, let's customize your menu now</Typography>
      <h1>Add New Dish</h1>

      <MenuCreator />
    </>
  )
};


export default AddDish;

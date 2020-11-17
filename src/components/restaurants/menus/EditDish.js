// Libraries
import React from "react"

// MaterialUI
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

// Components
import MenuEditor from "./components/MenuEditor"


const getStyles = makeStyles(theme => ({
  root: {},
}))


const EditDish = props =>{
  const classes = getStyles()
  const {id, dishName, dishDescription, dishPrice, rName} = props.location.state

  return(
    <>
      <Typography>Hi {rName}, let's customize your menu now</Typography>
      <Typography>Edit Dish</Typography>

      <MenuEditor id={id} dishName={dishName} dishDescription={dishDescription} dishPrice={dishPrice}/>
    </>
  )
}


export default EditDish

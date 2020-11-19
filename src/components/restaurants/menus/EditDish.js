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
    <div className="editDish">
      <div className="editDish__titleWrap">
        <p>Hi {rName}, let's customize your menu now</p>
        <h1>Edit Dish</h1>
      </div>

      <MenuEditor id={id} dishName={dishName} dishDescription={dishDescription} dishPrice={dishPrice}/>
    </div>
  )
}


export default EditDish

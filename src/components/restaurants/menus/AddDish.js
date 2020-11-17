// Libraries
import React from "react"

// MaterialUI
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

// Components
import MenuCreator from "./components/MenuCreator"


const getStyles = makeStyles(theme => ({
  root: {},
}))


const AddDish = props =>{

  const classes = getStyles()

  const {rName} = props.location.state

  return(
    <div className="addDish">
      <div className="addDish__titleWrap">
        <p>Hi {rName}, let's customize your menu now</p>
        <h1>Add New Dish</h1>
      </div>
      
      <MenuCreator />
    </div>
  )
}


export default AddDish;

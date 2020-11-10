// Libraries
import React from "react"

// MaterialUI
import {makeStyles} from '@material-ui/core/styles'

// Components
import OrderTable from './Table'


const getStyles = makeStyles(theme => ({
  
}))

const DateWrapper = props =>{

  const classes = getStyles()

  return(
    <div>
      <h2>Today</h2>
      <OrderTable orders={props.orders}/>
    </div>
  )
}

export default DateWrapper

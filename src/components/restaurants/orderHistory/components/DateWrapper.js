import React from "react";

import {makeStyles} from '@material-ui/core/styles'

import OrderTable from './Table'


const getStyles = makeStyles(theme => ({
  
}))

const DateWrapper = props =>{
  const classes = getStyles()
  console.log(props.orders)
  return(
    <div>
      <h2>Today</h2>
      <OrderTable orders={props.orders}/>
    </div>
  )
};


export default DateWrapper;

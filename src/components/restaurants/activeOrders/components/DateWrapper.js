import React from "react";

import {makeStyles} from '@material-ui/core/styles'

import OrderTable from './Table'


// const getStyles = makeStyles(theme => ({
  
// }))

const DateWrapper = props =>{
  // const classes = getStyles()
  return(
    <div>
      <OrderTable orders={props.orders} onStatusChange={props.onStatusChange}/>
    </div>
  )
};


export default DateWrapper;

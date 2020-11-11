// Libraries
import React from "react";

// MaterialUI
import {makeStyles} from '@material-ui/core/styles'

// Components
import OrderTable from './Table'


const getStyles = makeStyles(theme => ({
  
}))


const DateWrapper = props =>{

  const classes = getStyles()
  const {orders, onStatusChange} = props

  return(
    <div>
      {
        orders.length ?
                        <OrderTable orders={orders} onStatusChange={onStatusChange}/>
                      :
                        <p>You don't have any active orders currently.</p>
      }
      
    </div>
  )
};


export default DateWrapper;

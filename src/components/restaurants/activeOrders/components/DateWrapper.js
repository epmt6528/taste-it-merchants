// Libraries
import React from "react";

// MaterialUI
import {makeStyles} from '@material-ui/core/styles'

// Components
import OrderTable from './Table'

// Others
import Empty from '../../../../img/dishes/empty.png'
import EmptyWebP from '../../../../img/dishes/empty.png.webp'


const getStyles = makeStyles(theme => ({
  
}))


const DateWrapper = props =>{

  const classes = getStyles()
  const {orders, onStatusChange} = props

  return(
    <div className="activeOrders__ordersListWrap">
      <h3>Your Active Orders</h3>
      {
        orders.length ?
                          <OrderTable orders={orders} onStatusChange={onStatusChange}/>
                      :
                        <div>
                        <picture>
                          <source srcset={EmptyWebP} type="image/webp" />
                          <img src={Empty} alt="Empty Dish" />
                        </picture>
                          
                          <p>You don't have any active orders currently.</p>
                        </div>
      }
      
    </div>
  )
};


export default DateWrapper;

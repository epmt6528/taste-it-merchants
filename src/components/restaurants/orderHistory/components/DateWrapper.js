// Libraries
import React from "react"
import moment from 'moment'

// MaterialUI
import {makeStyles} from '@material-ui/core/styles'

// Components
import OrderTable from './Table'
import { LeakAddTwoTone } from "@material-ui/icons"


const getStyles = makeStyles(theme => ({
  
}))


// Grouping Orders By The Date
// ordersGroupedByDate = [ {date: date, orders: []}]
const ordersGroupedByDate = []
const today = moment().format('MMM Do, YYYY')
const yesterday = moment().subtract(1, 'days').format('MMM Do, YYYY')

const ordersGrouper = (props) =>{
  ordersGroupedByDate.length = 0
  props.orders.map((element) => {
    let formattedDate = moment(element.createdAt).format('MMM Do, YYYY')
    console.log(element)

    if(formattedDate == today){
      formattedDate = "Today"
    } else if (formattedDate == yesterday){
      formattedDate = "Yesterday"
    }

    const groupNum = ordersGroupedByDate.map((e) => { return e.date}).indexOf(formattedDate)

    if(groupNum >= 0){
      ordersGroupedByDate[groupNum].orders.push(element)
    }else{
      ordersGroupedByDate.unshift({date: formattedDate, orders: [element]})
    }
  })
}


const DateWrapper = props =>{

  const classes = getStyles()

  ordersGrouper(props)

  return(
    <div>
      {ordersGroupedByDate.map((ordersGroup) => (
          <div>
            <h2>{ordersGroup.date}</h2>
            <OrderTable orders={ordersGroup.orders} />
          </div>
      ))}
    </div>
  )
}

export default DateWrapper

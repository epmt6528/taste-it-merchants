// Libraries
import React, { Component } from "react"
import axios from 'axios'

// MaterialUI
import { Button } from '@material-ui/core'
import { TextField } from "@material-ui/core"

// Components
import DateWrapper from "./components/DateWrapper"
import Loading from "../../Loading"

// Other
import { getJwtToken } from "../../getJwt"
import {BASE_URL} from "../../../config/config"


class ActiveOrders extends Component {

  state = {
    rName: '',
    orders: [],
    isLoading: false
  }

  async componentDidMount() {

    const jwt = getJwtToken()
    if (!jwt) {
      this.props.history.push("/signIn")
    }

    this.setState({
      isLoading: true
    })

    // GET restaurant info(name)
    await axios
      .get(`${BASE_URL}/restaurants`, {
        headers: { Authorization: `${jwt}` },
      })
      .then((res) => {
        this.setState({
          rName: res.data[0].restaurantName,
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token")
        // this.props.history.push("/signIn")
        console.log(err)
      })


    // GET orders and select only completed orders
    await axios
      .get(`${BASE_URL}/orders/restaurant`, {headers: { Authorization: jwt }
    })
      .then((res) => {
        const completedOrders = res.data.filter((item) => {
          return item.orderStatusID == 4 || item.orderStatusID == 5
        })

        this.setState({
          orders: completedOrders,
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token")
        // this.props.history.push("/signIn")
        console.log(err.response)
    })
  }



  render() {
    const {rName, orders, isLoading} = this.state
    
    // const dt = new Date()
    // const thisMonth = dt.getMonth()+1
    // console.log(completedOrders)
    // const LastMonthOrders = orders.filter((item) => {
    //   return item.updatedAt.getMonth()
    // })
    // console.log(LastMonthOrders)

    return (
        <div>
          <p>Hi {rName}, let's customize your menu now</p>
          <h1>Order History</h1>

          <div>
            <h3>Analyze Your Data Now</h3>
            <p>Did you know that you can track your data with our Pro pack?</p>
            <Button>See Our Pro Plan</Button>
          </div>

          <div>
            <h3>Your orders in October</h3>
            <h2>12</h2>
            <p>Increase 12% compared to September</p>
          </div>

          {
            isLoading ? <Loading /> :
            <DateWrapper orders={orders}/>
          }
          
          <Button>Load More</Button>
        </div>
    )
  }
}
export default ActiveOrders

// Libraries
import React, { Component } from "react"
import axios from 'axios';
import { getJwtToken } from "../../getJwt"

// MaterialUI
import { Button } from '@material-ui/core'

// Components
import DateWrapper from "./components/DateWrapper"
import Loading from "../../Loading"

// Other
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
      this.props.history.push("/signIn");
    }

    this.setState({
      isLoading: true
    })

    // GET restaurant info
    axios
      .get(`${BASE_URL}/restaurants`, 
        {headers: { Authorization: `${jwt}` }}
      )
      .then((res) => {
        this.setState({
          rName: res.data[0].restaurantName,
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token")
        // this.props.history.push("/signIn")
      })

    // GET orders
    axios
      .get(`${BASE_URL}/orders/restaurant`, 
        {headers: { authorization: `${jwt}` }}
      )
      .then((res) => {
        // Filter out only active orders from response
        const activeOrders = res.data.filter((item) => {
          return item.orderStatusID == 1 || item.orderStatusID == 2 || item.orderStatusID == 3
        })

        this.setState({
          orders: activeOrders,
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token")
        // this.props.history.push("/signIn")
      })
  }


  // Update orders' status
  onStatusChange = (orderID, orderStatusID) =>{
    const jwt = getJwtToken()
    if (!jwt) {
      this.props.history.push("/signIn")
    }

    axios
      .put(`${BASE_URL}/orders`, {
        orderID: orderID,
        orderStatusID: orderStatusID
      }, {headers: { Authorization: `${jwt}` }}
      )
      .catch((err) => {
        // localStorage.removeItem("jwt-token")
        // this.props.history.push("/signIn")
      })
  }


  render() {
    const {rName, orders, isLoading} = this.state

    return (
      <div>
        <p>Hi {rName}, welcome back!</p>
        <h1>Active Orders</h1>

        <div>
          <h3>Take A Break</h3>
          <p>You can deactivate your restaurant to stop receieving orders.</p>
          <Button>Go Offline</Button>
        </div>

        {
          isLoading ? <Loading /> :
          <DateWrapper orders={orders} onStatusChange={this.onStatusChange} />
        }
        
        <Button>Load More</Button>
      </div>
    );
  }
}
export default ActiveOrders;

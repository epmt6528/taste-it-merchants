import React, { Component } from "react";

import { Button } from '@material-ui/core';
import { TextField } from "@material-ui/core";

import axios from 'axios';

import { getJwtToken } from "../../getJwt";

import DateWrapper from "./components/DateWrapper"

class ActiveOrders extends Component {
  state = {
    rName: '',
    orders: [],
    isLoading: false
  }

  async componentDidMount() {
    const jwt = getJwtToken();
    if (!jwt) {
      this.props.history.push("/signIn");
    }

    axios
      .get("http://localhost:5000/api/restaurants", {
        headers: { Authorization: `${jwt}` },
      })
      .then((res) => {
        this.setState({
          rName: res.data[0].restaurantName
        })
        console.log(res)
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });

    axios
      .get("http://localhost:5000/api/orders/restaurant", {headers: { authorization: `${jwt}` }}
      )
      .then((res) => {
        const activeOrders = res.data.filter((item) => {
          return item.orderStatusID == 1 || item.orderStatusID == 2 || item.orderStatusID == 3;
        })

        this.setState({
          orders: activeOrders,
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });
  }

  onStatusChange = (orderID, orderStatusID) =>{
    const jwt = getJwtToken();
    if (!jwt) {
      this.props.history.push("/signIn");
    }

    axios
      .put("http://localhost:5000/api/orders", {
        orderID: orderID,
        orderStatusID: orderStatusID
      }, {headers: { Authorization: `${jwt}` }}
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });
  }


  render() {
    const {rName, orders} = this.state
    return (
      <div>
        <p>Hi {rName}, welcome back!</p>
        <h1>Active Orders</h1>

        <div>
          <h3>Take A Break</h3>
          <p>You can deactivate your restaurant to stop receieving orders.</p>
          <Button>Go Offline</Button>
        </div>

        {/* map date wrapper */}
        <DateWrapper orders={orders} onStatusChange={this.onStatusChange} />

        <Button>Load More</Button>
      </div>
    );
  }
}
export default ActiveOrders;

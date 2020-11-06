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

    this.setState({
      isLoading: true
    })

    await axios
      .get("http://localhost:5000/api/restaurants", {
        headers: { Authorization: `${jwt}` },
      })
      .then((res) => {
        this.setState({
          rName: res.data[0].restaurantName,
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });

    await axios
      .get("http://localhost:5000/api/orders/restaurant", {headers: { Authorization: jwt }
    })
      .then((res) => {
        const completedOrders = res.data.filter((item) => {
          return item.orderStatusID == 4 || item.orderStatusID == 5;
        })

        this.setState({
          orders: completedOrders,
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err.response)
    });
  }



  render() {
    const {rName, orders} = this.state
    

    // const dt = new Date();
    // const thisMonth = dt.getMonth()+1;
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


          {/* map date wrapper */}
          <DateWrapper orders={orders}/>

          <Button>Load More</Button>
        </div>
    );
  }
}
export default ActiveOrders;

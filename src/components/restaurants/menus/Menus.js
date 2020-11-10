// Libraries
import React, { Component } from "react"
import axios from 'axios'
import { getJwtToken } from "../../getJwt"
import { Link } from 'react-router-dom'

// MaterialUI
import Grid from "@material-ui/core/Grid"
import { Button } from '@material-ui/core'
import { TextField } from "@material-ui/core"

// Components
import MenuCard from "./components/MenuCard"

// Other
import {BASE_URL} from "../../../config/config"


class Menus extends Component {
  state = {
    restaurant: [],
    menus: [],
    isLoading: false
  }

  componentDidMount() {
    const jwt = getJwtToken()
    if (!jwt) {
      this.props.history.push("/signIn")
    }

    this.setState({
      isLoading: true
    })

    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: { Authorization: `${jwt}` }
      })
      .then((res) => {
        this.setState({
          restaurant: res.data[0],
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token")
        // this.props.history.push("/signIn")
      })

    axios
      .get(`${BASE_URL}/menus/all`, {
        headers: { Authorization: `${jwt}` }
      })
      .then((res) => {
        this.setState({
          menus: res.data,
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token")
        // this.props.history.push("/signIn")
      })
  }


  render() {
    const sortByOptions = [
      {
        id: 1,
        label: 'Sort By: Latest'
      },
      {
        id: 2,
        label: 'Sort By: Oldest'
      },
      {
        id: 3,
        label: 'Sort By: ABC'
      },
    ]

    const rName = this.state.restaurant.restaurantName

    return (
      <div className="menus-wrapper">
        <p>Hi {rName}, let's customize your menu now</p>
        <h1>Menu</h1>

        {/* "Add New Dish "Button */}
        <Link to={{
            pathname:`/restaurant/menus/add`,
            state: {
              rName: rName
            }}}>
          <Button>Add New Dishes</Button>
        </Link>

        {/* "Sort By" Drop downs */}
        <TextField 
          select
          value={sortByOptions}
        >
          {sortByOptions.map((option) => (
            <sortByOptions key={option.id} value={option.value}>
              {option.label}
            </sortByOptions>
          ))}
        </TextField>

        {/* Search Field */}
        <TextField />

        {/* Menu Cards */}
        <Grid>
          {this.state.menus.map(
              menu => {
                const {menuID, menuName, menuDescription, price} = menu
                return (
                  <MenuCard 
                    key={menuID}
                    id={menuID}
                    name={menuName}
                    menuDescription={menuDescription}
                    price={price}
                    rName={rName}
                  />
                )
              }
            )}
        </Grid>

        <Button>Load More</Button>

      </div>
    )
  }
}
export default Menus

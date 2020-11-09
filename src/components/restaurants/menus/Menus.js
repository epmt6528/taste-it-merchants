import React, { Component } from "react";

import MenuCard from "./components/MenuCard";

import Grid from "@material-ui/core/Grid";
import { Button } from '@material-ui/core';
import { TextField } from "@material-ui/core";

import axios from 'axios';

import { getJwtToken } from "../../getJwt";
import { Link } from 'react-router-dom';

class Menus extends Component {
  state = {
    restaurant: [],
    menus: [],
    isLoading: false
  }

  componentDidMount() {
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
          restaurant: res.data[0],
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });

    axios
      .get("http://localhost:5000/api/menus/all", {
        headers: { Authorization: `${jwt}` },
      })
      .then((res) => {
        this.setState({
          menus: res.data,
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });
  }


  render() {
    const sortByOptions = [
      {
        label: 'Sort By: Latest'
      },
      {
        label: 'Sort By: Oldest'
      },
      {
        label: 'Sort By: ABC'
      },
    ]

    const rName = this.state.restaurant.restaurantName

    return (
      <div className="menus-wrapper">
        <p>Hi {rName}, let's customize your menu now</p>
        <h1>Menu</h1>


        <Link to={{
            pathname:`/restaurant/menus/add`,
            state: {
              rName: rName
            }}}>
          <Button>Add New Dishes</Button>
        </Link>
        <TextField 
          select
          value={sortByOptions}
        >
          {/* {sortByOptions.map((option) => (
            <sortByOptions key={option.value} value={option.value}>
              {option.label}
            </sortByOptions>
          ))} */}
        </TextField>
        <TextField />

        <Grid>
        {
          this.state.menus.map(
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
          )
        }
        </Grid>

        <Button>Load More</Button>
      </div>
    );
  }
}
export default Menus;

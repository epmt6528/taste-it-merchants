// Libraries
import React, { Component } from "react"
import axios from 'axios'
import { getJwtToken } from "../../getJwt"
// import { Link } from 'react-router-dom'
import {Switch, Route, Link, BrowserRouter } from 'react-router-dom';

// MaterialUI
import Grid from "@material-ui/core/Grid"
import { Button } from '@material-ui/core'
import { TextField } from "@material-ui/core"
import MenuItem from '@material-ui/core/MenuItem'

// Components
import MenuCard from "./components/MenuCard"
import MenuDetail from './MenuDetail';
import EditDish from './EditDish'
import AddDish from './AddDish'

// Other
import {BASE_URL} from "../../../config/config"


class Menus extends Component {
  state = {
    restaurant: [],
    menus: [],
    originalArray: [], // This array is used for keyword search
    sortBy: 1,
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
          originalArray: res.data,
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token")
        // this.props.history.push("/signIn")
      })
  }


  // Sorting Menus
  onSortingChange = (input) => {
    this.setState({
      sortBy: input
    })

    if (input==1){
      // Sort By: Latest
      const newArray = this.state.menus.sort(function(a, b) {
        var dateA = new Date(a.createdAt)
        var dateB = new Date(b.createdAt)
        console.log(dateA)
        return dateA - dateB
      })

      this.setState({
          menus: newArray
      })

    }else if(input==2){
      // Sort By: Oldest
      const newArray = this.state.menus.sort(function(a, b) {
        var dateA = new Date(a.createdAt)
        var dateB = new Date(b.createdAt)
        console.log(dateA)
        return dateB - dateA
      })

      this.setState({
          menus: newArray
      })

    }else if(input==3){
      // Sort By: ABC
      const newArray = this.state.menus.sort(function(a, b) {
        if (a.menuName < b.menuName) {
            return -1
        } else {
            return 1
        }
      })

      this.setState({
          menus: newArray
      })
    }
  }


  //  Key word Search
  keyWordSearch = (keyword) =>{
    var newArray = this.state.originalArray.filter(function(item){
      if ((item.menuName).indexOf(keyword) >= 0) return true
    })

    this.setState({
      menus: newArray
    })
  }


  render() {
    const rName = this.state.restaurant.restaurantName
    const sortBy = this.state.sortBy

    return (
      <div className="menus-wrapper">
      <Route exact path="/restaurant/menus">
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
          value={sortBy}
          onChange={e => this.onSortingChange(e.target.value)}
        >
          <MenuItem key='1' value='1'>Sort By: Latest</MenuItem>
          <MenuItem key='2' value='2'>Sort By: Oldest</MenuItem>
          <MenuItem key='3' value='3'>Sort By: ABC</MenuItem>
        </TextField>

        {/* Search Field */}
        <TextField onChange={e => this.keyWordSearch(e.target.value)}/>

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

        </Route>
        <Route path="/restaurant/menus/detail/:id" component={MenuDetail} />
        <Route path="/restaurant/menus/edit/:id"  component={EditDish} />
        <Route path="/restaurant/menus/add"  component={AddDish} />
      </div>
    )
  }
}
export default Menus

import React, { Component } from "react";

import axios from 'axios';
import { getJwtToken } from "../../getJwt";

import RestaurantInfo from './components/RestaurantInfo'
import RestaurantInfoEditor from './components/RestaurantInfoEditor'

import {Switch, Router, Route, BrowserRouter, Link} from 'react-router-dom'

class Contact extends Component {
  state = {
    rName: '',
    phoneNumber: '',
    password: '',
    description: '',
    addressSet: {},
    province: '',
    city: '',
    address: '',
    postcode: ''
  }

  componentDidMount() {
    const jwt = getJwtToken();
    if (!jwt) {
      this.props.history.push("/signIn");
    }

    axios
      .get("http://localhost:5000/api/restaurants", {headers: { Authorization: `${jwt}` }}
      )
      .then((res) => {
        this.setState({
          rName: res.data[0].restaurantName,
          phoneNumber: res.data[0].phoneNumber,
          password: res.data[0].password,
          description: res.data[0].restaurantDescription,
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });

    axios
      .get("http://localhost:5000/api/restaurants/address", {headers: { Authorization: `${jwt}` }}
      )
      .then((res) => {
        this.setState({
          addressSet: res.data[0],
          province: res.data[0].provinceDescription,
          city: res.data[0].cityDescription,
          address: res.data[0].address,
          postcode: res.data[0].postcode
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });
  }

  saveInfo = (e) => {
    const {rName, phoneNumber, password, description, province, city, address, postcode } = this.state;
    const jwt = getJwtToken();
    if (!jwt) {
      this.props.history.push("/signIn");
    }

    console.log(description)
    e.preventDefault()

    axios
      .put("http://localhost:5000/api/restaurants", {
        restaurantName: rName,
        restaurantDescription: description,
        phoneNumber: phoneNumber,
        password: password
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

    axios
      .put("http://localhost:5000/api/restaurants/address", {
        provinceName: province,
        cityName: city,
        address: address,
        postcode: postcode
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


  handleNameInputChange = input => {
    this.setState({
      rName: input
    })
  }

  handlePhoneNumberInputChange = input => {
    this.setState({
      phoneNumber: input
    })
  }

  handlePasswordInputChange = input => {
    this.setState({
      password: input
    })
  }

  handleDescriptionInputChange = input => {
    this.setState({
      description: input
    })
  }

  handleProvinceInputChange = input => {
    this.setState({
      province: input
    })
  }

  handleCityInputChange = input => {
    this.setState({
      city: input
    })
  }

  handleAddressInputChange = input => {
    this.setState({
      address: input
    })
  }

  handlePostalCodeInputChange = input => {
    this.setState({
      postcode: input
    })
  }


  render() {
    const {rName, phoneNumber, password, description, addressSet} = this.state
    return (
        <div>
          <p>Hi {rName}, keep your restaurant info updated.</p>
          <h1>Your Account</h1>
            <Route path="/restaurant/account">
              <RestaurantInfo rName={rName} phoneNumber={phoneNumber} password={password} description={description} address={addressSet}/>
            </Route>
            <Route path="/restaurant/accountEdit">
              <RestaurantInfoEditor 
                rName={rName} 
                phoneNumber={phoneNumber} 
                password={password} 
                description={description} 
                address={addressSet}
                handleNameInputChange={this.handleNameInputChange}
                handlePhoneNumberInputChange={this.handlePhoneNumberInputChange}
                handlePasswordInputChange={this.handlePasswordInputChange}
                handleDescriptionInputChange={this.handleDescriptionInputChange}
                handleProvinceInputChange={this.handleProvinceInputChange}
                handleCityInputChange={this.handleCityInputChange}
                handleAddressInputChange={this.handleAddressInputChange}
                handlePostalCodeInputChange={this.handlePostalCodeInputChange}
                saveInfo={this.saveInfo}
                />
            </Route>
        </div>
    );
  }
}
export default Contact;

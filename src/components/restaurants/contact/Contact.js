import React, { Component } from "react";

import { Button } from '@material-ui/core';
import TextField  from "@material-ui/core/TextField";

import axios from 'axios';
import { getJwtToken } from "../../getJwt";

class Contact extends Component {
  state = {
    name: '',
    phoneNumber: '',
    email: '',
    body: ''
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
          rName: res.data[0].restaurantName
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });
  }

  sendMessage = e => {
    const {name, phoneNumber, email, body} = this.state

    e.preventDefault()

    console.log(this.state)

    const jwt = getJwtToken();
    if (!jwt) {
      this.props.history.push("/signIn");
    }

    axios
      .post(`http://localhost:5000/api/inquiries`, {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        subject: "Inquiry",
        body: body
      }, {headers: { Authorization: `${jwt}` }})
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
      name: input
    })
  }

  handlePhoneNumberInputChange = input => {
    this.setState({
      phoneNumber: input
    })
  }

  handleEmailInputChange = input => {
    this.setState({
      email: input
    })
  }

  handleBodyInputChange = input => {
    this.setState({
      body: input
    })
  }

  render() {
    const rName = this.state.rName

    return (
      <div>
        <p>Hi {rName}, let's kepp in touch</p>
        <h1>Contact</h1>

        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.732168014052!2d-123.1108751841337!3d49.22460628280447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486746f412563f7%3A0x36606d221509fdfe!2sLangara%20College!5e0!3m2!1sen!2sca!4v1604615828263!5m2!1sen!2sca" width="600" height="450" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"/>
          <p>100 West 49th Avenue, Vancouver, BC, V5Y 2Z6</p>
          <p>(604)323-5511</p>
        </div>

        
        <div>
          <h2>Get in touch with us</h2>
          <form>
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={e=>this.handleNameInputChange(e.target.value)}/>
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" onChange={e=>this.handlePhoneNumberInputChange(e.target.value)}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={e=>this.handleEmailInputChange(e.target.value)}/>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              onChange={e=>this.handleBodyInputChange(e.target.value)}
            />

            <Button type='submit'>Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}
export default Contact;

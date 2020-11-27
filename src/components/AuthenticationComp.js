import React, { Component } from "react";
import { getJwtToken } from "./getJwt";
import { withRouter } from "react-router-dom";
import axios from "axios";

import Loading from "./Loading";
import {BASE_URL} from "../config/config"

class AuthenticationComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
    };
  }

  componentDidMount() {
    const jwt = getJwtToken();
    if (!jwt) {
      this.props.history.push("/signIn");
    }

    axios
      .get(`${BASE_URL}/restaurants/`, {
        headers: { Authorization: `${jwt}` },
      })
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });
  }

  render() {
    if (this.state.user === undefined) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    return (
      <>
        <div>{this.props.children}</div>
      </>
    )
  }
}

export default withRouter(AuthenticationComp);

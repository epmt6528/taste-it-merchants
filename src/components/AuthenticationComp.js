import React, { Component } from "react";
import { getJwtToken } from "./getJwt";
import { withRouter } from "react-router-dom";
import axios from "axios";

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
      .get("http://localhost:5000/api/restaurants/", {
        headers: { Authorization: `${jwt}` },
      })
      .then((res) => {
        this.setState({
          user: res.data,
        });
        console.log("here in auth comp");
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
      });
  }

  render() {
    if (this.state.user === undefined) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    return <div>{this.props.children}</div>;
  }
}

export default withRouter(AuthenticationComp);

import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Controls from "../../controls/Controls";
import "./welcome.css"
import axios from "axios";
import { getJwtToken } from "../../getJwt";


class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
      items:[]
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
          items: res.data[0]
        });
        console.log("here in auth comp");
      })
      .catch((err) => {
        localStorage.removeItem("jwt-token");
        this.props.history.push("/signIn");
      });
  }


  render() {
    const items = this.state.items;
    if (this.state.user === undefined) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    console.log(items);
    return (
      <div className="welcome-wrapper">
        <Container fixed className="welcome-main">
          <img alt="logo" />
          <h2>{items.restaurantName}</h2>
          <h1>Welcome Abroad!</h1>
          <p>Ready to do e-commerce your way?</p>
          <p>
            Tackle the complexity of growing your business and selling
            online—with a platform designed to make it simple at any stage.
          </p>
          <Controls.ButtonControl
            text="Get Started"
            //  component={Link}
            //  to="/Welcome"
          />
        </Container>
      </div>
    );
  }
}
export default Welcome;

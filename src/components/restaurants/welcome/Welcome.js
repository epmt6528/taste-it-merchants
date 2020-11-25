import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Controls from "../../controls/Controls";
import axios from "axios";
import { getJwtToken } from "../../getJwt";
import Logo from "../../../img/logo.svg";
import HeroPicMobile from "../../../img/dishes/welcomeMobileView.png"
import HeroPicMobileWebP from "../../../img/dishes/welcomeMobileView.png.webp"
import HeroPicDesktop from "../../../img/dishes/welcome.png"
import HeroPicDesktopWebP from "../../../img/dishes/welcome.png.webp"
import MediaQuery from 'react-responsive';


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
      <div className="welcome_wrapper">
        <MediaQuery minDeviceWidth={1001}>
          <picture>
            <source srcset={HeroPicDesktopWebP} type="image/webp" />
            <img src={HeroPicDesktop} alt="A glasss of champagne" className="welcome__hero" className="welcome__heroPicDesktop"/>
          </picture>
        </MediaQuery>

        <div className="welcome">
          <Link to="/" >
            <img src={Logo} alt="logo" className="welcome__logo"/>
          </Link>

          <Container fixed className="welcome__main">
            <MediaQuery maxDeviceWidth={1000}>
              <picture>
                <source srcset={HeroPicMobileWebP} type="image/webp" />
                <img src={HeroPicMobile} alt="A glasss of champagne" className="welcome__heroPicMobile"/>
              </picture>
            </MediaQuery>

            
            
            <h2>Hi {items.restaurantName} !</h2>
            <h1>Welcome Aboard!</h1>
            <p>Ready to do e-commerce your way?</p>
            <p>
              Tackle the complexity of growing your business and selling
              online—with a platform designed to make it simple at any stage.
            </p>
            <Link to="/restaurant" ><button>Get Started</button></Link>
          </Container>
          </div>
      </div>
    );
  }
}
export default Welcome;

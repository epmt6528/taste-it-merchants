import React, {Component} from "react";

import ChoiceTabs from './ChoiceTabs';

import axios from 'axios';

import { getJwtToken } from "../../getJwt";

class ChoiceContainer extends Component {
  state = {
    cuisineType: [],
    allergy: [],
    dietType: [],
    spicyLevel: [],
    isLoading: false
  }
  // state = {
  //   choices: [],
  //   isLoading: false
  // }


  componentDidMount() {
    const jwt = getJwtToken();
    if (!jwt) {
      this.props.history.push("/signIn");
    }

    axios
      .get(`http://localhost:5000/api/menus/choices/${this.props.menuId}`, {
        headers: { Authorization: `${jwt}` },
      })
      .then((res) => {
        const cuisineType = res.data.filter( function( choice ) {
          return choice.category == "Cuisines";
        })
        const allergy = res.data.filter( function( choice ) {
          return choice.category == "Allergens";
        })
        const dietType = res.data.filter( function( choice ) {
          return choice.category == "Diet Types";
        })
        const spicyLevel = res.data.filter( function( choice ) {
          return choice.category == "Spiciness";
        })

        this.setState({
          cuisineType: cuisineType,
          allergy: allergy,
          dietType: dietType,
          spicyLevel: spicyLevel,
          isLoading: true
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      });
  }

  render() {
    return (
      <div>
        <ChoiceTabs 
          cuisineType={this.state.cuisineType} 
          allergy={this.state.allergy} 
          dietType={this.state.dietType} 
          spicyLevel={this.state.spicyLevel}
        />
      </div>
    );
  }
}

export default ChoiceContainer;
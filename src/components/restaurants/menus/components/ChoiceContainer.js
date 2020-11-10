// Libraries
import React, {Component} from "react"
import axios from 'axios'

// Components
import ChoiceTabs from './ChoiceTabs'

// Other
import {BASE_URL} from "../../../../config/config"
import { getJwtToken } from "../../../getJwt"


class ChoiceContainer extends Component {

  state = {
    cuisineType: [],
    allergy: [],
    dietType: [],
    spicyLevel: [],
    isLoading: false
  }

  componentDidMount() {
    const jwt = getJwtToken()
    if (!jwt) {
      this.props.history.push("/signIn")
    }

    const cuisineOptions = [
      { choiceDescription: 'Indian', checked: false},
      { choiceDescription: 'Vietnamese', checked: false},
      { choiceDescription: 'Japanese', checked: false},
      { choiceDescription: 'French', checked: false},
    ]

    const allergyOptions = [
      { choiceDescription: 'No Allergens', checked: false},
      { choiceDescription: 'Milk', checked: false},
      { choiceDescription: 'Crustacean shellfish', checked: false},
      { choiceDescription: 'Tree nuts', checked: false},
      { choiceDescription: 'Fish', checked: false},
    ]
      
    const dietTypeOptions = [
      { choiceDescription: 'Anything', checked: false},
      { choiceDescription: 'Vegetarian', checked: false},
      { choiceDescription: 'Gluten-Free', checked: false}
    ]
      
    const spicyLevelOptions = [
      { choiceDescription: 'Very High', checked: false},
      { choiceDescription: 'High', checked: false},
      { choiceDescription: 'Moderate', checked: false},
      { choiceDescription: 'Not Spicy', checked: false},
    ]
      
    
    axios
      .get(`${BASE_URL}/menus/choices/${this.props.menuId}`, {
        headers: { Authorization: `${jwt}` },
      })
      .then((res) => {
        // Cuisine
        const selectedCuisineType = res.data.filter( function( choice ) {
          return choice.category == "Cuisines"
        })

        for (let i = 0; i < selectedCuisineType.length; i++) {
          const index = cuisineOptions.findIndex(option => option.choiceDescription == selectedCuisineType[i].choiceDescription)

          if(index != -1){
            cuisineOptions[index].checked = true
          }
        }

        // Allergy
        const selectedAllergy = res.data.filter( function( choice ) {
          return choice.category == "Allergens"
        })

        for (let i = 0; i < selectedAllergy.length; i++) {
          const index = allergyOptions.findIndex(option => option.choiceDescription == selectedAllergy[i].choiceDescription)

          if(index != -1){
            allergyOptions[index].checked = true
          }
        }

        // Diet Type
        const selectedDietType = res.data.filter( function( choice ) {
          return choice.category == "Diet Types"
        })

        for (let i = 0; i < selectedDietType.length; i++) {
          const index = dietTypeOptions.findIndex(option => option.choiceDescription == selectedDietType[i].choiceDescription)

          if(index != -1){
            dietTypeOptions[index].checked = true
          }
        }

        // Spicy Level
        const selectedSpicyLevel = res.data.filter( function( choice ) {
          return choice.category == "Spiciness"
        })

        for (let i = 0; i < selectedSpicyLevel.length; i++) {
          const index = spicyLevelOptions.findIndex(option => option.choiceDescription == selectedSpicyLevel[i].choiceDescription)

          if(index != -1){
            spicyLevelOptions[index].checked = true
          }
        }

        this.setState({
          cuisineType: cuisineOptions,
          allergy: allergyOptions,
          dietType: dietTypeOptions,
          spicyLevel: spicyLevelOptions,
          isLoading: true
        })

        console.log(this.state)
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      })
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
    )
  }
}

export default ChoiceContainer
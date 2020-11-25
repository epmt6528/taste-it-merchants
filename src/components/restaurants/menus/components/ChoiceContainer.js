// Libraries
import React, {Component} from "react"
import axios from 'axios'

// Components
import ChoiceTabs from './ChoiceTabs'

// Other
import {BASE_URL} from "../../../../config/config"
import { getJwtToken } from "../../../getJwt"


const ChoiceContainer =(props)=>{
    return (
      <div className="choiceTable_wrap">
        <ChoiceTabs 
          cuisineType={props.cuisineType} 
          allergy={props.allergy} 
          dietType={props.dietType} 
          spicyLevel={props.spicyLevel}
          handleCusineTypeChange={props.handleCusineTypeChange}
          handleAllergyChange={props.handleAllergyChange}
          handleSpicyLevelChange={props.handleSpicyLevelChange}
          handleDietTypeChange={props.handleDietTypeChange}
        />
      </div>
    )
}

export default ChoiceContainer
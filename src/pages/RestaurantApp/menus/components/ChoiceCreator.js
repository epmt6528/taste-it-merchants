// Libraries
import React from "react"

// Components
import ChoiceTabs from './ChoiceTabs'


const ChoiceContainer = props =>{
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
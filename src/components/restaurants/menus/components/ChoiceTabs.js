// Libraries
import React, { useState, useEffect } from "react"

// MaterialUI
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

// Components
import TabPanel from './ChoiceTabPanels'


const ChoiceTabs = props =>{
  const [value, setValue] = React.useState(0)
  const [checkedItems, setCheckedItems] = useState({})
  const { cuisineType, allergy, dietType, spicyLevel, handleCusineTypeChange, handleAllergyChange, handleSpicyLevelChange, handleDietTypeChange } = props


  const handleChange = (event, newValue) => {
    setValue(newValue)
  }


  return(
    <div>
      <AppBar position="static" >
        <Tabs aria-label="simple tabs example" value={value} onChange={handleChange}>
          <Tab label="Cuisine Type" />
          <Tab label="Allergy" />
          <Tab label="Diet Type" />
          <Tab label="Spicy Level" />
        </Tabs>
      </AppBar>
      
      <TabPanel index={0} value={value} choices ={cuisineType} handleChange={handleCusineTypeChange}/>
      <TabPanel index={1} value={value} choices ={allergy} handleChange={handleAllergyChange}/>
      <TabPanel index={2} value={value} choices ={dietType} handleChange={handleDietTypeChange}/>
      <TabPanel index={3} value={value} choices ={spicyLevel} handleChange={handleSpicyLevelChange}/>
    </div>
  )
}

export default ChoiceTabs
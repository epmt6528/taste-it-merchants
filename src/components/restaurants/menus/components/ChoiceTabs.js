import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './ChoiceTabPanels';



const ChoiceTabs = props =>{
  const [value, setValue] = React.useState(0);

  const { cuisineType, allergy, dietType, spicyLevel } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


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
      <TabPanel index={0} value={value} choices ={cuisineType} />
      <TabPanel index={1} value={value} choices ={allergy} />
      <TabPanel index={2} value={value} choices ={dietType} />
      <TabPanel index={3} value={value} choices ={spicyLevel} />
    </div>
  )
};

export default ChoiceTabs;
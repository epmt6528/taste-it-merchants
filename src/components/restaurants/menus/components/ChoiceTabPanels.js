import React from "react";
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const TabPanel = (props) => {
  const { value, index, choices, ...other } = props;

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <List>
          {
            props.choices.map(
              choice => {
                const {choiceDescription, checked} = choice
                return (
                  <ListItem>
                    <FormControlLabel
                      checked={checked}
                      value={choiceDescription}
                      control={<Checkbox color="primary" />}
                      label={choiceDescription}
                      labelPlacement="start"
                    />
                  </ListItem>
                )
              }
            )
          }
        </List>
      )}
    </div>
  );
}


export default TabPanel;
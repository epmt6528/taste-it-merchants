import React from "react";
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


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
                const {choiceDescription} = choice
                return (
                  <ListItem>{choiceDescription}</ListItem>
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
// Libraries
import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'

// MaterialUI
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

// Images
import Japan from '../../../../img/icons/japanese.svg'


const TabPanel = (props) => {
  const { value, index, choices, handleChange,...other } = props
  console.log(choices)

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  }

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
            choices.map(
              (choice) => {
                const {choiceDescription, checked, pictureURL,index} = choice
                const choiceIcon = <img src={pictureURL} className="choiceIcon"/>
                
                return (
                  <ListItem>
                    {choiceIcon}
                    <FormControlLabel
                      index={index}
                      label={choiceDescription}
                      value={choiceDescription}
                      control={<Checkbox color="primary" />}
                      labelPlacement="start"
                      onChange={e => handleChange(e.target.value)}
                      checked={checked}
                    />
                  </ListItem>
                )
              }
            )
          }
        </List>
      )}
    </div>
  )
}


export default TabPanel
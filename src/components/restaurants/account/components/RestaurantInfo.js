// Libraries
import React from "react"
import {Link} from 'react-router-dom'

// MaterialUI
import { Button } from '@material-ui/core'
import TextField  from "@material-ui/core/TextField"


const RestaurantInfo = props =>{

  const {rName, phoneNumber, password, description, address} = props

  const addressString = `${address.address}, ${address.cityDescription}, ${address.provinceDescription}  ${address.postcode}`

  return(
    <div>
      <TextField InputProps={{readOnly: true}} fullWidth label="Restaurant Name" value={rName} />
      <TextField InputProps={{readOnly: true}} fullWidth label="Phone Number" value={phoneNumber} />
      {/* <TextField InputProps={{readOnly: true}} label="Email" value={} /> */}
      <TextField InputProps={{readOnly: true}} fullWidth label="Password" type="password" value={password} />
      <TextField InputProps={{readOnly: true}} fullWidth label="Location"  value={addressString}/>
      <TextField
        InputProps={{readOnly: true}}
        fullWidth
        label="Description"
        value={description}
        multiline
        rows={4}
      />

      <Link to='/restaurant/accountEdit'>
        <Button>Edit Account</Button>
      </Link>

      <Button>Log Out</Button>
    </div>
  )
}

export default RestaurantInfo
// Libraries
import React from "react"
import {Link} from 'react-router-dom'

// MaterialUI
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'

// Other
import {BASE_URL} from "../../../../config/config"


const MenuCard = props =>{
  const {id, name, menuDescription, price, rName, status} = props

  return(
    <Link 
      to={{
        pathname:`/restaurant/menus/detail/${id}`,
        state: {
          id: id,
          name: name,
          description: menuDescription,
          price: price,
          rName: rName,
          status: status
        }
      }}>
      <Card key={id} className="menuCard">
        <CardMedia image={`${BASE_URL}/menus/image/${id}`} className="menuCard__img" />
        <CardHeader title={name} className="menuCard__dishName" />
        {status ? <p>Available</p> : <p>Sold Out</p>}
      </Card>
    </Link>
  )
}


export default MenuCard

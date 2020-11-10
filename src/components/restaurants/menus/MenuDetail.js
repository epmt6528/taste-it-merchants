// Libraries
import React from "react"
import {Link} from 'react-router-dom'

// MaterialUI
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

// Components
import ChoiceContainer from "./components/ChoiceContainer"

// Other
import {BASE_URL} from "../../../config/config"


const getStyles = makeStyles(theme => ({
  media: {
    'height': '0',
    'paddingTop': '56.25%' // 16:9
  },
}))


const MenuDetail = props =>{
  const classes = getStyles()
  const {id, name, description, price, rName} = props.location.state
  
  // Number => dollar currency format
  const formatter = new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'USD'
  })

  return(
    <div>
      <Typography>Hi {rName}, let's customize your menu now</Typography>
      <Typography>Dish Detail</Typography>

      <Card>
        <CardMedia image={`${BASE_URL}/menus/image/${id}`}  className={classes.media} />
        <CardContent>
            <Typography>Dish Name</Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>Description</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography>Price</Typography>
            <Typography>{formatter.format(price)}</Typography>
          </CardContent>
          
        <ChoiceContainer menuId={id} />

        <Link 
          to={{
            pathname:`/restaurant/menus/edit/${id}`,
            state: {
              id: id,
              dishName: name,
              dishDescription: description,
              dishPrice: price,
              rName: rName
            }}}
        >
          <Button>Edit Dish</Button>
        </Link>
        
        <Button>Remove Dish</Button>
      </Card>
    </div>
  )
}


export default MenuDetail

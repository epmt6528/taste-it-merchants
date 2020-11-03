import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';


import {makeStyles} from '@material-ui/core/styles'
import ChoiceContainer from "./ChoiceContainer";

const getStyles = makeStyles(theme => ({
  media: {
    'height': '0',
    'paddingTop': '56.25%' // 16:9
  },
}))


const MenuDetail = props =>{
  const classes = getStyles()

  const {id, name, description, price} = props.location.state

  return(
    <>
      <p>Hi Anh and Chi, let's customize your menu now</p>
      <Typography>Dish Detail</Typography>

      <Card>
        <CardMedia image={`http://localhost:5000/api/menus/image/${id}`}  className={classes.media} />
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
            <Typography>{price}</Typography>
          </CardContent>
        <ChoiceContainer menuId={id} />
        <Button>Edit Dish</Button>
        <Button>Remove Dish</Button>
      </Card>
    </>
  )
};


export default MenuDetail;

import React from "react";

import {makeStyles} from '@material-ui/core/styles'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import {Link} from 'react-router-dom';



const getStyles = makeStyles(theme => ({
  media: {
    'height': '0',
    'paddingTop': '56.25%' // 16:9
  },
}))

const MenuCard = props =>{
  const classes = getStyles()
  const {id, name, menuDescription, price, rName} = props

  return(
    <Link 
      to={{
        pathname:`/restaurant/menus/detail/${id}`,
        state: {
          id: id,
          name: name,
          description: menuDescription,
          price: price ,
          rName: rName
        }
      }}>
      <Card key={id}>
        <CardMedia image={`http://localhost:5000/api/menus/image/${id}`} className={classes.media} />
        <CardHeader title={name}/>
      </Card>
    </Link>
  )
};


export default MenuCard;

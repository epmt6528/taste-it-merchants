import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardMedia from '@material-ui/core/CardMedia';

import {makeStyles} from '@material-ui/core/styles'

import ChoiceContainer from "./ChoiceContainer";

import axios from "axios";
import {getJwtToken} from "../../../getJwt";


class MenuCreator extends Component{
  state={
    dishName: '',
    dishPrice: '',
    description: '',
    cusisineType: [],
    allergy: [],
    dietType: [],
    spicyLevel:  [],
  }

  handleNameInputChange = input => {
    console.log(input)
    this.setState({
      dishName: input
    })
  }

  handlePriceInputChange = input => {
    console.log(input)
    this.setState({
      dishPrice: input
    })
  }

  handleDescriptionInputChange = input => {
    console.log(input)
    this.setState({
      description: input
    })
  }

  saveInfo = e => {
    const {dishName, dishPrice, description, allergy, dietType, spicyLevel} = this.state;

    const bodyFormData = new FormData();
    bodyFormData.append('menuName', dishName);
    bodyFormData.append('price', dishPrice);
    bodyFormData.append('menuDescription', description);
    bodyFormData.append('image', '1234');

    console.log(this.state)

    e.preventDefault()

    const jwt = getJwtToken();
    if (!jwt) {
      this.props.history.push("/signIn");
    }

    axios({
      method: 'post',
      url: `http://localhost:5000/api/menus`,
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `${jwt}` 
       }})
      .then((res)=>{
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });

    //   axios
    //   .post(`http://localhost:5000/api/menus`,{
    //     menuName: dishName,
    //     menuDescription: description,
    //     price: dishPrice,
    //     pictureURI: '1234'
    // }, {headers: { Authorization: `${jwt}` }})
    // axios
    //   .get("http://localhost:5000/api/menus/all", {
    //     headers: { Authorization: `${jwt}` },
    //   })
    //   .then((res) => {
    //     this.setState({
    //       menus: res.data,
    //       isLoading: false
    //     })
    //     console.log(this.state)
    //   })
    //   .catch((err) => {
    //     // localStorage.removeItem("jwt-token");
    //     // this.props.history.push("/signIn");
    //     console.log(err)
    //   });
  }

  render(){
    return(
      <>
        <form noValidate autoComplete="off">
          <Typography>Dish Name</Typography>
          <TextField variant="outlined" onChange={e => this.handleNameInputChange(e.target.value)} />

          <Typography>Dish Price</Typography>
          <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              onChange={e => this.handlePriceInputChange(e.target.value)}
          />

          <Typography>Description</Typography>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            variant="outlined"
            onChange={e => this.handleDescriptionInputChange(e.target.value)}
          />

          {/* <img src={} /> */}

          <Button>Add</Button>
          <Button>Delete</Button>

          <ChoiceContainer menuId={this.state.id} />

          <Button onClick={this.saveInfo}>Save Dish</Button>
        </form>
      </>
    )}
};


export default MenuCreator;

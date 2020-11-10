// Libraries
import React, {Component} from "react"
import axios from "axios"

// MaterialUI
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import CardMedia from '@material-ui/core/CardMedia'
import {makeStyles} from '@material-ui/core/styles'

// Components
import ChoiceContainer from "./ChoiceContainer"

// Other
import {getJwtToken} from "../../../getJwt"
import {BASE_URL} from "../../../../config/config"


class MenuEditor extends Component{

  state={
    id: this.props.id,
    name: this.props.dishName,
    price: this.props.dishPrice,
    description: this.props.dishDescription,
    isLoading: false
  }

  handleNameInputChange = input => {
    console.log(input)
    this.setState({
      name: input
    })
  }

  handlePriceInputChange = input => {
    console.log(input)
    this.setState({
      price: input
    })
  }

  handleDescriptionInputChange = input => {
    console.log(input)
    this.setState({
      description: input
    })
  }

  saveInfo = e => {
    const {id, name, price, description} = this.state

    e.preventDefault()

    const jwt = getJwtToken()
    if (!jwt) {
      this.props.history.push("/signIn")
    }

    // this.setState({
    //   isLoading: true
    // })

    axios
      .put(`${BASE_URL}/menus/${id}`,{
        menuName: name,
        menuDescription: description,
        price: price
    }, {headers: { Authorization: `${jwt}` }})
      .then((res)=>{
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    // axios
    //   .get(`${BASE_URL}/menus/all`, {
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
    //     // localStorage.removeItem("jwt-token")
    //     // this.props.history.push("/signIn")
    //     console.log(err)
    //   })
  }

  render(){
    return(
      <>
        <form noValidate autoComplete="off">
          <Typography>Dish Name</Typography>
          <TextField variant="outlined" defaultValue={this.state.name} onChange={e => this.handleNameInputChange(e.target.value)} />

          <Typography>Dish Price</Typography>
          <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              defaultValue={this.state.price}
              onChange={e => this.handlePriceInputChange(e.target.value)}
          />

          <Typography>Description</Typography>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            variant="outlined"
            defaultValue={this.state.description}
            onChange={e => this.handleDescriptionInputChange(e.target.value)}
          />

          <img src={`http://localhost:5000/api/menus/image/${this.state.id}`} />

          <Button>Add</Button>
          <Button>Delete</Button>

          <ChoiceContainer menuId={this.state.id} />

          <Button onClick={this.saveInfo}>Save Dish</Button>
        </form>
      </>
    )}
}


export default MenuEditor

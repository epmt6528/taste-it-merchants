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

var createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

class MenuEditor extends Component{

  state={
    id: this.props.id,
    name: this.props.dishName,
    price: this.props.dishPrice,
    description: this.props.dishDescription,
    uploadImageSrc: `http://localhost:5000/api/menus/image/${this.props.id}`,
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

  handleChangeFile(e) {
    var files = e.target.files;
    var image_url = files.length===0 ? "" : createObjectURL(files[0]);
    this.setState({
      file: e.target.files[0],
      uploadImageSrc: image_url});
  }

  deleteFile(e) {
    this.setState({uploadImageSrc: ''});
    console.log(this.state.uploadImageSrc)
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

    const params = new FormData();

    // Upload image
    params.append('image', this.state.file);
    axios
      .put(
        `${BASE_URL}/menus/${id}`,
        params,
        {
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: `${jwt}`
          },
        }
      )
      .catch(() => {
        console.log('upload failed...');
        this.setState({
          isLoading: false
        });
      });
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

          <img src={this.state.uploadImageSrc} />

          <div>
              <input accept="image/*" multiple type="file" className="input" id="upload-img"  onChange={e => this.handleChangeFile(e)} style={{display:'none'}}/>
              <label htmlFor="upload-img">
                  <Button variant="contained" component="span">
                        Add
                  </Button>
              </label>

              <Button variant="contained" onClick={e => this.deleteFile(e.target)}>Delete</Button>
          </div>

          <ChoiceContainer menuId={this.state.id} />

          <Button onClick={this.saveInfo}>Save Dish</Button>
        </form>
      </>
    )}
}


export default MenuEditor

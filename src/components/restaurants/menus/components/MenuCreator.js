// Libraries
import React, {Component} from "react"
import axios from "axios"
import {getJwtToken} from "../../../getJwt"

// MaterialUI
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'

// Components
import ChoiceContainer from "./ChoiceContainer"

// Other
import {BASE_URL} from "../../../../config/config"

var createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

class MenuCreator extends Component{
  state={
    dishName: '',
    dishPrice: '',
    description: '',
    cusisineType: [],
    allergy: [],
    dietType: [],
    spicyLevel:  [],
    uploadImageSrc: ''
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
    const {dishName, dishPrice, description, allergy, dietType, spicyLevel} = this.state

    const bodyFormData = new FormData()
    bodyFormData.append('menuName', dishName)
    bodyFormData.append('price', dishPrice)
    bodyFormData.append('menuDescription', description)
    bodyFormData.append('image', '1234')

    e.preventDefault()

    const jwt = getJwtToken()
    if (!jwt) {
      this.props.history.push("/signIn")
    }

    axios({
      method: 'post',
      url: `${BASE_URL}/menus`,
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
      })

    const params = new FormData();

    // Upload image
    params.append('image', this.state.file);
    axios
      .post(
        `${BASE_URL}/menus/`,
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


export default MenuCreator

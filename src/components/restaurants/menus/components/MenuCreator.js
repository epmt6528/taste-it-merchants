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
import ChoiceCreator from "./ChoiceCreator"

// Other
import {BASE_URL} from "../../../../config/config"

var createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

class MenuCreator extends Component{
  state={
    dishName: '',
    dishPrice: '',
    description: '',
    cuisineType: [
      { choiceDescription: 'Indian', checked: false},
      { choiceDescription: 'Vietnamese', checked: false},
      { choiceDescription: 'Japanese', checked: false},
      { choiceDescription: 'French', checked: false},
    ],
    allergy: [
      { choiceDescription: 'No Allergens', checked: false},
      { choiceDescription: 'Milk', checked: false},
      { choiceDescription: 'Crustacean shellfish', checked: false},
      { choiceDescription: 'Tree nuts', checked: false},
      { choiceDescription: 'Fish', checked: false},
    ],
    dietType: [
      { choiceDescription: 'Anything', checked: false},
      { choiceDescription: 'Vegetarian', checked: false},
      { choiceDescription: 'Gluten-Free', checked: false}
    ],
    spicyLevel:  [
      { choiceDescription: 'Very High', checked: false},
      { choiceDescription: 'High', checked: false},
      { choiceDescription: 'Moderate', checked: false},
      { choiceDescription: 'Not Spicy', checked: false},
    ],
    uploadImageSrc: ''
  }

  handleCusineTypeChange= choiceDescription =>{
    const target = this.state.cuisineType.map(function(e) { return e.choiceDescription }).indexOf(choiceDescription)
    let newChoices = JSON.parse(JSON.stringify(this.state.cuisineType))
    newChoices[target].checked = !newChoices[target].checked

    this.setState({
      cuisineType: newChoices
    })
  }

  handleAllergyChange= choiceDescription =>{
    const target = this.state.allergy.map(function(e) { return e.choiceDescription }).indexOf(choiceDescription)
    let newChoices = JSON.parse(JSON.stringify(this.state.allergy))
    newChoices[target].checked = !newChoices[target].checked

    this.setState({
      allergy: newChoices
    })
  }

  handleSpicyLevelChange= choiceDescription =>{
    const target = this.state.spicyLevel.map(function(e) { return e.choiceDescription}).indexOf(choiceDescription)
    
    let newChoices = JSON.parse(JSON.stringify(this.state.spicyLevel))
    newChoices[target].checked = !newChoices[target].checked

    this.setState({
      spicyLevel: newChoices
    })
  }

  handleDietTypeChange= choiceDescription =>{
    const target = this.state.dietType.map(function(e) { return e.choiceDescription }).indexOf(choiceDescription)
    let newChoices = JSON.parse(JSON.stringify(this.state.dietType))
    newChoices[target].checked = !newChoices[target].checked

    this.setState({
      dietType: newChoices
    })
  }
  
  handleNameInputChange = input => {
    this.setState({
      dishName: input
    })
  }

  handlePriceInputChange = input => {
    this.setState({
      dishPrice: input
    })
  }

  handleDescriptionInputChange = input => {
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
    const {dishName, dishPrice, description, file, cuisineType, allergy, dietType, spicyLevel} = this.state

    const bodyFormData = new FormData()
    bodyFormData.append('menuName', dishName)
    bodyFormData.append('price', dishPrice)
    bodyFormData.append('menuDescription', description)
    bodyFormData.append('image', file)

    const newChoices = []

    for(let i = 0; i<cuisineType.length; i++){
      if(cuisineType[i].checked){
        newChoices.push(cuisineType[i].choiceDescription)
      }
    }

    for(let i = 0; i<allergy.length; i++){
      if(allergy[i].checked){
        newChoices.push(allergy[i].choiceDescription)
      }
    }

    for(let i = 0; i<dietType.length; i++){
      if(dietType[i].checked){
        newChoices.push(dietType[i].choiceDescription)
      }
    }

    for(let i = 0; i<spicyLevel.length; i++){
      if(spicyLevel[i].checked){
        newChoices.push(spicyLevel[i].choiceDescription)
      }
    }

    e.preventDefault()

    const jwt = getJwtToken()
    if (!jwt) {
      this.props.history.push("/signIn")
    }

    // Upload dishName, dishPrice, description
    axios({
      method: 'post',
      url: `${BASE_URL}/menus`,
      data: bodyFormData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `${jwt}` 
       }})
      .then((res)=>{
        // Deactivate all choices
        axios
        .put(
          `${BASE_URL}/menus/choices/deactivateChoices`,{
            menuID: res.data.menuID
          },{
            headers: {
              Authorization: `${jwt}`
            }
          }
        )
        .then(()=>{
          for(let i = 0; i<newChoices.length; i++){
            // Upload choices
            axios
            .post(
              `${BASE_URL}/menus/choices`,{
                menuID: res.data.menuID,
                choiceDescription: newChoices[i]
              },{
                headers: {
                  Authorization: `${jwt}`
                }
              }
            )
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })

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

          <ChoiceCreator 
            cuisineType={this.state.cuisineType} 
            allergy={this.state.allergy} 
            dietType={this.state.dietType} 
            spicyLevel={this.state.spicyLevel}
            handleCusineTypeChange={this.handleCusineTypeChange} 
            handleAllergyChange={this.handleAllergyChange} 
            handleSpicyLevelChange={this.handleSpicyLevelChange} 
            handleDietTypeChange={this.handleDietTypeChange} 
          />

          <Button onClick={this.saveInfo}>Save Dish</Button>
        </form>
      </>
    )}
}


export default MenuCreator

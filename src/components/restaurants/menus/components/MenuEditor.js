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
import Loading from "../../../Loading"

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
    choices: [],
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
    uploadImageSrc: `http://localhost:5000/api/menus/image/${this.props.id}`,
    isLoading: false
  }

  componentDidMount() {
    const jwt = getJwtToken()
    if (!jwt) {
      this.props.history.push("/signIn")
    }

    this.setState({
      isLoading: true
    })

    const cuisineOptions = [
      { choiceDescription: 'Indian', checked: false},
      { choiceDescription: 'Vietnamese', checked: false},
      { choiceDescription: 'Japanese', checked: false},
      { choiceDescription: 'French', checked: false},
    ]

    const allergyOptions = [
      { choiceDescription: 'No Allergens', checked: false},
      { choiceDescription: 'Milk', checked: false},
      { choiceDescription: 'Crustacean shellfish', checked: false},
      { choiceDescription: 'Tree nuts', checked: false},
      { choiceDescription: 'Fish', checked: false},
    ]
      
    const dietTypeOptions = [
      { choiceDescription: 'Anything', checked: false},
      { choiceDescription: 'Vegetarian', checked: false},
      { choiceDescription: 'Gluten-Free', checked: false}
    ]
      
    const spicyLevelOptions = [
      { choiceDescription: 'Very High', checked: false},
      { choiceDescription: 'High', checked: false},
      { choiceDescription: 'Moderate', checked: false},
      { choiceDescription: 'Not Spicy', checked: false},
    ]
    
    
    axios
      .get(`${BASE_URL}/menus/choices/${this.props.id}`, {
        headers: { Authorization: `${jwt}` },
      })
      .then((res) => {
        // Cuisine
        const selectedCuisineType = res.data.filter( function( choice ) {
          return choice.category == "Cuisines"
        })

        for (let i = 0; i < selectedCuisineType.length; i++) {
          const index = cuisineOptions.findIndex(option => option.choiceDescription == selectedCuisineType[i].choiceDescription)

          if(index != -1){
            cuisineOptions[index].checked = true
          }
        }

        // Allergy
        const selectedAllergy = res.data.filter( function( choice ) {
          return choice.category == "Allergens"
        })

        for (let i = 0; i < selectedAllergy.length; i++) {
          const index = allergyOptions.findIndex(option => option.choiceDescription == selectedAllergy[i].choiceDescription)

          if(index != -1){
            allergyOptions[index].checked = true
          }
        }

        // Diet Type
        const selectedDietType = res.data.filter( function( choice ) {
          return choice.category == "Diet Types"
        })

        for (let i = 0; i < selectedDietType.length; i++) {
          const index = dietTypeOptions.findIndex(option => option.choiceDescription == selectedDietType[i].choiceDescription)

          if(index != -1){
            dietTypeOptions[index].checked = true
          }
        }

        // Spicy Level
        const selectedSpicyLevel = res.data.filter( function( choice ) {
          return choice.category == "Spiciness"
        })

        for (let i = 0; i < selectedSpicyLevel.length; i++) {
          const index = spicyLevelOptions.findIndex(option => option.choiceDescription == selectedSpicyLevel[i].choiceDescription)

          if(index != -1){
            spicyLevelOptions[index].checked = true
          }
        }

        this.setState({
          cuisineType: cuisineOptions,
          allergy: allergyOptions,
          dietType: dietTypeOptions,
          spicyLevel: spicyLevelOptions,
          isLoading: false
        })
      })
      .catch((err) => {
        // localStorage.removeItem("jwt-token");
        // this.props.history.push("/signIn");
        console.log(err)
      })
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
    const {id, name, price, description, file, cuisineType, allergy, dietType, spicyLevel} = this.state

    e.preventDefault()

    const jwt = getJwtToken()
    if (!jwt) {
      this.props.history.push("/signIn")
    }

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

    const bodyFormData = new FormData()
    bodyFormData.append('menuName', name)
    bodyFormData.append('price', price)
    bodyFormData.append('menuDescription', description)
    bodyFormData.append('image', file)

    axios({
        method: 'put',
        url: `${BASE_URL}/menus/${id}`,
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

    axios
      .put(`${BASE_URL}/menus/choices/deactivateChoices`,{
          menuID: id
        },{
          headers: {
            Authorization: `${jwt}`
          }
        })
      .then((res)=>{
        console.log(res)
        for(let i = 0; i<newChoices.length; i++){
          // Upload choices
          axios
          .post(
            `${BASE_URL}/menus/choices`,{
              menuID: id,
              choiceDescription: newChoices[i]
            },{
              headers: {
                Authorization: `${jwt}`
              }
            }
          )
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render(){

    return(
        <form noValidate autoComplete="off" className="editDish__editor">
          
          <div className="editDish__metaWrap">
            <div className="editDish__imgWrap">
              <img src={this.state.uploadImageSrc}  className="editDish__img" />

              <div className="editDish__editor-buttonWrap">
                  <input accept="image/*" multiple type="file" className="input" id="upload-img"  onChange={e => this.handleChangeFile(e)} style={{display:'none'}}/>
                  <label htmlFor="upload-img">
                      <button  className="editDish__editor-addButton">
                            Add
                      </button>
                  </label>

                  <button onClick={e => this.deleteFile(e.target)} className="editDish__editor-deleteButton">Delete</button>
              </div>
            </div>
            

            <div className="editDish__inputWrap">
              <TextField label="Dish Name" variant="outlined" defaultValue={this.state.name} onChange={e => this.handleNameInputChange(e.target.value)}   className="editDish__editor-nameInput" />

              <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  defaultValue={this.state.price}
                  onChange={e => this.handlePriceInputChange(e.target.value)}
                  label="Dish Price"
                  className="editDish__editor-priceInput"
              />

              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                defaultValue={this.state.description}
                onChange={e => this.handleDescriptionInputChange(e.target.value)}
                label="Description"
                className="editDish__editor-descInput"
              />
            </div>
          </div>
          

          {
            this.state.isLoading ? <Loading />
                      : <ChoiceContainer cuisineType={this.state.cuisineType}  
                                         allergy={this.state.allergy}
                                         dietType={this.state.dietType}
                                         spicyLevel={this.state.spicyLevel}
                                         handleCusineTypeChange={this.handleCusineTypeChange} 
                                          handleAllergyChange={this.handleAllergyChange} 
                                          handleSpicyLevelChange={this.handleSpicyLevelChange} 
                                          handleDietTypeChange={this.handleDietTypeChange} 
                        />
          }
          
          <button onClick={e => this.saveInfo(e)} className="editDish__editor-saveButton">Save Dish</button>
        </form>
    )}
}


export default MenuEditor

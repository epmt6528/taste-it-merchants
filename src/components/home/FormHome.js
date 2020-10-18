import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles'

// class FormHome extends Component {
//     constructor() {
//         super()
//         this.state = {
//             newSub : {
//                 subscriberEmail: ""
//             },
//             newsError: ""
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.validate = this.validate.bind(this)
//     }

//     handleChange(event) {
//         let value = event.target.value;
//         let name = event.target.name;
//         this.setState( prevState => {
//                 return {
//                     newSub : {
//                         ...prevState.newSub, [name]: value
//                     }
//                 }
//             }
//         )
//     }

//     handleSubmit(e) {

//         e.preventDefault();
//         const isValid = this.validate();
//         if(isValid){
//             let userData = this.state.newSub;

//             fetch('https://lair.wmdd.ca/api/newsletter',{
//                 method: "POST",
//                 body: JSON.stringify(userData),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             }).then((res) => {

//                 res.json().then(() => {
//                     this.setState({
//                         newSub: {
//                             subscriberEmail: ""
//                         },
//                         newsError:""
//                     })
//                     document.getElementById("newsletter-submit").innerHTML = "Thank you for subscribing !";

//                 })
//             })
//         }
//     }
//     validate = () => {
//         let newsError = "";
//         if(!this.state.newSub.subscriberEmail.includes("@")){
//             newsError = "Invalid Email";
//         }
//         if(!this.state.newSub.subscriberEmail.includes(".")){
//             newsError = "Invalid Email";
//         }
//         if(!this.state.newSub.subscriberEmail){
//             newsError = "Email cannot be blank";
//         }
//         else if(this.state.newSub.subscriberEmail.length < 3){
//             newsError = "Email cannot be less than 3 character";
//         }

//         if(newsError){
//             this.setState({newsError});
//             return false;
//         }
//         return true;
//     }
//     render() {
//         return (

//                 <form className="form-home">

//                     <div className="form-home-email">

//                         <input
//                             type="email"
//                             value={this.state.newSub.subscriberEmail}
//                             name="subscriberEmail"
//                             id="subscriberEmail"
//                             placeholder="Please enter your email"
//                             onChange={this.handleChange}
//                         />
//                         <div className="validate-form">{this.state.newsError}</div>
//                     </div>
//                     <div className="form-home-submitBtn">
//                         <button type="button">Download Now</button>
//                     </div>
//                     <div id="form-home-submit"></div>
//                 </form>

//         )
//     }
// }

// export default FormHome


const styles = theme => ({
    textField: {
      display: 'flex',
      margin: theme.spacing.unit,
      width: '50%'
    },
    button: {
      margin: theme.spacing.unit
    }
  })
  

const FormHome = (props) => (
  <form className="form-home">
    <TextField
      className="form-home-email"
      label="Email"
      margin="normal"
      name="email"
      type="email"
      variant="outlined"
      placeholder="Your Email"
      id="email"
      // InputLabelProps={{
      //     required: true,
      //     color: 'white',
      //     shrink: true
      // }}
    />
    <Button
      className="form-home-submitBtn"
      color="primary"
      type="submit"
      variant="contained"
    >
      Download Now
    </Button>
  </form>
);

export default withStyles(styles)(FormHome)
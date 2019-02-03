import React, { Component, Fragment } from 'react';
import {Redirect} from 'react-router-dom';
import { MyContext } from "../MyContext";
import API from '../utils/API';

class ResetPassword extends Component {
  state = {
    password: "",
    confirmPassword: "",
    email: "",
    redirect: false,
    tokenStatus: ""
  }
  
  handleChange = (event)=>{
  const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  componentDidMount(){
    console.log(this.props);
    API.checkToken(this.props.match.params.token).then((token) => {
      console.log(token);
      this.setState(
        token.data
      )
    })
  }
  handleRedirect = (res) => {
  this.setState({
    redirect: true
  });
  }
  render() {
    if(this.state.redirect){
      return <Redirect to={`/`}></Redirect>
    }
    else if (this.state.tokenStatus === "expired") {
      return (
      <Fragment>
        <h1>Well this is wierd, your tokens like totally expired... Resending that email could fix it for you though</h1>
      </Fragment>
      )
    }
    else{
      return (
        <div>
        <MyContext.Consumer>
          {
           (context) => {
              return (
                <div>
                  <div className="form-group">
                    <label >New Password</label>
                    <input type="password" className="form-control"  placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <label >Confirm Password</label>
                    <input type="password" className="form-control"  placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
                  </div>
                <button 
                  className="btn btn-primary" 
                  onClick={(e)=>{
                    context.resetPassword({
                      password: this.state.password,
                      email: this.state.email
                    }, this.handleRedirect)
                  }}
                >Submit</button>
              </div>
             ) //end return
           }//render 
          }
        </MyContext.Consumer>
        </div>
      );
    }
  }
}

export default ResetPassword;
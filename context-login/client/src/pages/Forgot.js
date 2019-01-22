import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { MyContext } from "../MyContext";
class Login extends Component {
  state = {
    email: "",
    redirect: false
  }
  handleChange = (event)=>{
  const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  componentDidMount(){
    console.log(this.props);
  }
  handleRedirect = (res) => {
  this.setState({
    redirect: true
  });
  }
  render() {
    if(this.state.redirect){
      return <Redirect to={`/`}></Redirect>
    }else{
      return (
        <div>
        <MyContext.Consumer>
          {
           (context) => {
              return (
                <div>
                <h2>Ohh no looks like you forgot your email!</h2>
                  <div className="form-group">
                  <label>Your accounts email</label>
                  <input type="email" name="email" value={this.state.email} className="form-control" placeholder="Enter email" onChange={this.handleChange} />
                  <small className="form-text text-muted">We'll be sending you an email with the reset link</small>
                </div>
                <button 
                  className="btn btn-primary" 
                  onClick={(e)=>{
                    context.forgotPassword(this.state, this.handleRedirect)
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

export default Login;
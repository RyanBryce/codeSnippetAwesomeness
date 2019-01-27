import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import { MyContext } from "../MyContext";
import {emailValidation} from '../utils/validations';

class Login extends Component {
  state = {
    password: "",
    email: "",
    redirect: false,
    validPassword: true,
    validEmail: true
  }
  
  styles = {
    success: {
      borderColor: "#ced4da"
    },
    invalid: {
      borderColor: "#dc3545"
    }
  };

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
    username: res,
    redirect: true
  });
  }


  validateForm = (cb) => {
    //should update state if validations are wrong and call render
    
    let emailCheck = false;
    
    if (emailValidation(this.state.email)) {
      emailCheck = true;
    } else {
      this.setState({
        validEmail: emailCheck
      });
    }
    //email checks outcall cb
      emailCheck && cb({
      email: this.state.email,
      password: this.state.password
    }, this.handleRedirect)
  };

  render() {
    if(this.state.redirect){
      return <Redirect to={`/profile/${this.state.username}`}></Redirect>
    }else{
      return (
        <div>
        <MyContext.Consumer>
          {
           (context) => {
             return (
              <div>
                <div className="form-group">
                  <label>Email address</label>
                  <input 
                  type="email"
                  name="email"
                  value={this.state.email}
                  style = {
                    !this.state.validEmail ?
                    this.styles.invalid :
                    this.styles.success
                  }
                  className="form-control" 
                  placeholder="Enter email" 
                  onChange={this.handleChange}
                  />
                  {
                    !this.state.validEmail 
                    && (
                      <div>
                        Sorry your email is not valid, please check and try again
                      </div>
                    )
                  }
                  <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label >Password</label>
  
                  <input 
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  style={
                    !this.state.validPassword ?
                    this.styles.invalid : 
                    this.styles.success}
                    />
                </div>
                <div className="form-group">
                  <Link to={'/forgot'} >
                    <label className="form-check-label">Forgot Password</label>  
                  </Link>
                </div>
                <button 
                className="btn btn-primary"
                disabled={
                  !this.state.email || 
                  !this.state.password
                }
                onClick={(e)=>{
                  this.validateForm(context.login)
                }}>Submit</button>
              </div>
               
             )
           } 
          }
        </MyContext.Consumer>
        </div>
      );
    }
  }
}

export default Login;
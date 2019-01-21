import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import { MyContext } from "../MyContext";
class Login extends Component {
  state = {
    password: "",
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
    username: res,
    redirect: true
  });
  }
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
                  className="form-control" 
                  placeholder="Enter email" 
                  onChange={this.handleChange}
                  />
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
                  />
                </div>
                <div className="form-group form-check">
                  <Link to={'/forgot'} >
                    <label className="form-check-label">Forgot Password</label>  
                  </Link>
                </div>
                <button className="btn btn-primary" onClick={(e)=>{
                  
                  context.login(this.state, this.handleRedirect)
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
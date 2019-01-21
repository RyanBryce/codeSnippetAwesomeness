import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { MyContext } from "../MyContext";
class Login extends Component {
  state = {
    password: "",
    confirmPassword: "",
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
                    context.login(this.state, this.handleRedirect)
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
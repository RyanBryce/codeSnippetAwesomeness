import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { MyContext } from "../MyContext";

class SignUp extends Component {
    state = {
    password: "",
    email: "",
    username: "",
    profilePic: "",
    confirmPassword: "",
    redirect: false
  }

  handleChange = (event)=>{
  const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  redirect = (res) => {
    this.setState({
      username: res,
      redirect: true
    });
  }

  render() {
    if(this.state.redirect){
      return <Redirect to={`/profile/${this.state.username}`}/>
    }
    return (
      <div>
      <MyContext.Consumer>
        {
         (context) => {
           return(
             <React.Fragment>
              <form>
                <div className="form-group">
                  <label >Username</label>
                  <input type="username" className="form-control"  placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label >Profile Picture</label>
                  <input className="form-control"  placeholder="Profile Pic" name="profilePic" value={this.state.profilePic} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label >Email address</label>
                  <input type="email" name="email" value={this.state.email} className="form-control" placeholder="Enter email" onChange={this.handleChange} />
                  <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label >Password</label>
                  <input type="password" className="form-control"  placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label >Confirm Password</label>
                  <input type="password" className="form-control"  placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button onClick={(e)=>{
                  e.preventDefault()
                  if(this.state.password === this.state.confirmPassword){
                    context.signUp({
                    email: this.state.email,
                    loggedIn: true,
                    username: this.state.username,
                    password: this.state.password,
                    profilePic: this.state.profilePic
                    }, this.redirect)
                  } else {
                    alert("Ooops your passwords did not match, please check your passwords to continue signup")
                  }
                  }} className="btn btn-primary" disabled={!this.state.email||!this.state.password || !this.state.username || !this.state.confirmPassword}>Submit</button>
              </form>
             </React.Fragment>
           )
         } 
        }
      </MyContext.Consumer>
      </div>
    );
  }
}

export default SignUp;
import React, { Component } from 'react';
// import { MyContext } from "../MyContext";
class Login extends Component {
  state = {
    password: "",
    email: ""
  }
  handleChange = (event)=>{
  const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
      {/* <MyContext.Consumer>
        {
         () => {
           return(
             
           )
         } 
        }
      </MyContext.Consumer> */}
        <form>
          <div className="form-group">
            <label >Email address</label>
            <input type="email" name="email" value={this.state.email} className="form-control" placeholder="Enter email" />
            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control"  placeholder="Password" name="password" value={this.state.password} />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
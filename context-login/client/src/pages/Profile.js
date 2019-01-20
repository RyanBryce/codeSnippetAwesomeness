import React, {Component} from 'react';
 import {MyContext} from '../MyContext';
class Profile extends Component {
  state = {
    updatePannel: false,
    password: "",
    email: "",
    username: "",
    profilePic: "",
    confirmPassword: ""
  }
  componentDidMount(){
    console.log(this.props.match.params.username);
  }
  handleChange = (event)=>{
  const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }



  render(){
    return (
      <div>
        <MyContext.Consumer className="row">
        {
          (context)=>{
            return (
              <div className="col-sm-4 justify-content-center offset-4">
                <div className="card" style={{width: '18rem'}}>
                  <img className="card-img-top" src={context.state.profilePic} alt="Card pic cap" />
                  <div className="card-body">
                    <h5 className="card-title">Welcome {context.state.username}!</h5>
                    <p className="card-text">email: {context.state.email}</p>
                  </div>
                </div>
              </div>
            )
          }
        }
      </MyContext.Consumer>
      </div>
    );
  }
};

export default Profile;
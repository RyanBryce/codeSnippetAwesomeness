import React, {Component} from 'react';
 import {MyContext} from '../MyContext';
class Profile extends Component {
  state = {
    updatePannel: false,
    email: "",
    username: "",
    profilePic: "",
  }
  componentDidMount(){
    console.log(this.props.match.params.username);
  }

  toggleUpdateDiv = () => {
    this.setState({
      updatePannel: !this.state.updatePannel
    });
  }

  handleChange = (event)=>{
  const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  updateUrlParamsAfterUpdate = (username) => {
    console.log(username);
    this.setState({
      updatePannel: false
    });
    this.props.history.push(`/profile/${username}`)
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
                {
                  this.state.updatePannel && this.props.match.params.username === context.state.username ? (
                   <div>
                    <form>
                      <div className="form-group">
                        <label >Username</label>
                        <input 
                        type="username" 
                        className="form-control"  
                        placeholder="Username" 
                        name="username" 
                        value={this.state.username === "" ? context.state.username : this.state.username} 
                        onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label >Profile Picture</label>
                        <input 
                        className="form-control"  
                        placeholder="Profile Pic" 
                        name="profilePic" 
                        value={this.state.profilePic === "" ? context.state.profilePic : this.state.profilePic} 
                        onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label >Email address</label>
                        <input 
                        type="email" 
                        name="email" 
                        value={this.state.email === "" ? context.state.email : this.state.email} 
                        className="form-control" 
                        placeholder="Enter email" 
                        onChange={this.handleChange}
                        />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <button onClick={(e)=>{
                        e.preventDefault()
                        context.update({
                           email: (this.state.email === "" ? context.state.email : this.state.email),
                          username: (this.state.username === "" ? context.state.username : this.state.username),
                          profilePic: (this.state.profilePic === "" ? context.state.profilePic : this.state.profilePic),
                        }, this.updateUrlParamsAfterUpdate)
                      }}
                       >Update</button>
                        <button onClick={ this.toggleUpdateDiv }>Cancel</button>
                    </form>
                   </div> 
                  ) : (<button onClick={this.toggleUpdateDiv }>update</button>)
                }
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
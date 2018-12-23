import React from 'react';
 import {MyContext} from '../MyContext';
const Profile = () => {
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
                  <p className="card-text">password: {context.state.password}</p>
                </div>
              </div>
            </div>
          )
        }
      }
    </MyContext.Consumer>
    </div>
  );
};

export default Profile;
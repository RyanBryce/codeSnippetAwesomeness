import React from 'react';
 import {MyContext} from '../MyContext';
const Profile = () => {
  return (
    <div>
      <MyContext.Consumer>
        {
          (context) => {
            console.log(context)
            return (
              <React.Fragment>
                <p>yooooo {context.state.username}</p>
                <p>yooooo {context.state.email}</p>
              </React.Fragment>
            )
          }
        }
      </MyContext.Consumer>
    </div>
  );
};

export default Profile;
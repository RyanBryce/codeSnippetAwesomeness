import React from 'react';
 import {MyContext} from '../MyContext';
const Profile = () => {
  return (
    <div>
      <MyContext.Consumer>
        {
          ({state}) => {

          }
        }
      </MyContext.Consumer>
    </div>
  );
};

export default Profile;
import React, { Component, Fragment} from 'react';
import {MyContext} from '../MyContext';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <MyContext.Consumer>
          {
            (context) => {
              return (
                <div>

                </div>
              )
            }
          }
        </MyContext.Consumer>
      </Fragment>
    );
  }
}

export default Home;
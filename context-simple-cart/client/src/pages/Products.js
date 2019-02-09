import React, { Component, Fragment } from 'react';
import {MyContext} from '../MyContext';
import ProductCard from '../components/ProductCard';

class Products extends Component {
  render() {
    return (
      <Fragment>
        <MyContext.Consumer>
          {
            (context) => {
              return (
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    {
                      context.state.products.map((product) => {
                        return <ProductCard 
                        key={product._id} 
                        addProductToCart={context.addProductToCart}
                        {...product}
                        ></ProductCard>
                      })
                    }
                  </div>
                </div>
              )
            }
          }
        </MyContext.Consumer>
      </Fragment>
    );
  }
}

export default Products;
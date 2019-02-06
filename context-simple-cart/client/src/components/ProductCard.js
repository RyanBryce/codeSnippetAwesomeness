import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductCard extends Component {
  state = {
    mouseEnter: false
  }
  handleMouseEnter = () => {
    this.setState({
      mouseEnter: !this.state.mouseEnter
    });
  }
  handleMouseLeave = () => {
    this.setState({
      mouseEnter: !this.state.mouseEnter
    });
  }
  render() {
    return (
      <div className="card" onMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave}>
        <Link to={`product/${this.props.productName}`}>
          <img src="dog.jpg" className="card-img-top" alt={this.props.productName} />
        </Link>
        {
          this.state.mouseEnter && 
          (
            <div className="card-body">
                <h5 className="card-title">
                  <Link to={`product/${this.props.productName}`}>{this.props.productName}</Link>
                </h5>
                <p className="card-text">{this.props.productDescription}</p>
                <Link to={`product/${this.props.productName}`}>Add to Cart</Link>
            </div>
          )
        }
      </div>
    );
  }
}

export default ProductCard;
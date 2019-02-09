import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const styles = {
  cardStyle: {
    margin: "5px",
    "box-shadow": "0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)"
  },
  imgStyle: {
    margin: "0 auto",
    "vertical-align": "middle",
    width: "18rem",
    height: "300px"
  }
}
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
      <div className="card col-sm-3 text-center" style={styles.cardStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <Link to={`product/${this.props._id}`}>
          <img src={this.props.productImg} 
          className = "card-img-top"
          alt={this.props.productName} 
          style={styles.imgStyle} 
          
          />
        </Link>
        {
          this.state.mouseEnter && 
          (
            <div className="card-body">
                <h5 className="card-title">
                  <Link to={`product/${this._id}`}>{this.props.productName}</Link>
                </h5>
                <p>Price: {this.props.price}</p>
                <p 
                className="card-text">
                {this.props.productDescription.slice(0, 150)} 
                <Link to={`product/${this.props._id}`}>...more details</Link></p>
                <button className="btn btn-success" onClick={(e) => {
                  e.preventDefault();
                  this.props.addProductToCart(this.props._id)
                }}>Add To Cart</button>
            </div>
          )
        }
      </div>
    );
  }
}

export default ProductCard;
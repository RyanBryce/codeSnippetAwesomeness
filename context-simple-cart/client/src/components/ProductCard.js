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
        <Link to={`product/${this.props.productName}`}>
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
                  <Link to={`product/${this.props.productName}`}>{this.props.productName}</Link>
                </h5>
                <p 
                className="card-text">
                {this.props.productDescription.slice(0, 150)} 
                <Link to={`product/${this.props.productName}`}>...more details</Link></p>
                <Link type="button" className="btn btn-warning" to={`product/${this.props.productName}`}>Add to Cart</Link>
            </div>
          )
        }
      </div>
    );
  }
}

export default ProductCard;
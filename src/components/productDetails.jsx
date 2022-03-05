import React, { Component } from "react";
import { useParams } from "react-router-dom";

class ProductDetails extends Component {
  handleSave = () => {
    const { id } = useParams();
    // Navigate to /products
    return id;
  };

  render() {
    return (
      <div>
        <h1>Product Details - {() => this.handleSave} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;

import React, { Component } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./productDetails";

class Products extends Component {
  state = {
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ],
  };

  render() {
    return (
      <div>
        <h1>Products Details </h1>
        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>
              <a href={`/products/${product.id}`}>{product.name}</a>
            </li>
          ))}
        </ul>
        {/* <button onClick=>submit</button> */}
      </div>
    );
  }
}

export default Products;

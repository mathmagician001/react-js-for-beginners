import React from "react";

function ProductItem({ product, deleteProduct }) {
  const { name, imgLink, description, id } = product;
  return (
    <li className="product-item">
      <h3 className="product-number">Product {id}</h3>
      <img src={imgLink} alt="" className="product-img" />
      <p className="product-name">Name: {name}</p>
      <p className="description">Description: {description}</p>
      <button
        className="btn-x"
        onClick={() => {
          deleteProduct(id);
        }}
      >
        x
      </button>
    </li>
  );
}

export default ProductItem;

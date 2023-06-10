import React from "react";
import ProductItem from "./ProductItem";

function ProductsList({ products, deleteProduct }) {
  return (
    <ul className="products-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
        />
      ))}
    </ul>
  );
}

export default ProductsList;

import React from "react";

function ProductsHeader(props) {
  const {
    changeProductName,
    description,
    changeImgLink,
    imgLink,
    productName,
    price,
    addProduct,
    changePrice,
    changeDescription,
  } = props;

  return (
    <div className="products-header">
      <h2 className="products-title">Add Product</h2>
      <div className="input-container">
        <label htmlFor="product-name">Name: </label>
        <input
          value={productName}
          id="product-name"
          onChange={({ target }) => {
            const { value } = target;
            changeProductName(value);
          }}
        />
      </div>

      <div className="input-container">
        <label htmlFor="product-img-link">Image link: </label>
        <input
          onChange={({ target }) => {
            const { value } = target;
            changeImgLink(value);
          }}
          value={imgLink}
          id="product-img-link"
        />
      </div>
      <div className="input-container">
        <label htmlFor="product-price">Price: </label>
        <input
          type="number"
          onChange={({ target }) => {
            const { value } = target;
            changePrice(value);
          }}
          value={price}
          id="product-price"
        />
      </div>
      <div className="input-container">
        <label htmlFor="description">Description: </label>
        <textarea
          value={description}
          className="description-textarea"
          onChange={({ target }) => {
            const { value } = target;
            changeDescription(value);
          }}
          id="description"
        />
      </div>
      <div className="btn-container">
        <button onClick={addProduct} className="add-product-btn">
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductsHeader;

import { useEffect, useState } from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsList from "./ProductsList";

function Products() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    const productsInLocalStorage = localStorage.getItem("products");

    if (productsInLocalStorage) {
      setProducts(JSON.parse(productsInLocalStorage));
    }
  }, []);

  const changeDescription = (value) => setDescription(value);

  const changeProductName = (value) => setProductName(value);

  const changePrice = (price) => {
    setPrice(Math.abs(price) || "");
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const changeImgLink = (value) => {
    setImgLink(value);
  };
  const addProduct = () => {
    if (!productName || !imgLink || !description || !price) {
      return;
    }
    setProducts((prevProducts) => {
      const newProduct = {
        id: prevProducts.at(-1)?.id + 1 || 1,
        name: productName,
        price,
        imgLink,
        description,
      };

      return [...prevProducts, newProduct];
    });

    setProductName("");
    setImgLink("");
    setPrice("");
    setDescription("");
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  return (
    <>
      <ProductsHeader
        changeProductName={changeProductName}
        productName={productName}
        addProduct={addProduct}
        changeImgLink={changeImgLink}
        changeDescription={changeDescription}
        description={description}
        imgLink={imgLink}
        price={price}
        changePrice={changePrice}
      />
      <ProductsList products={products} deleteProduct={deleteProduct} />
    </>
  );
}

export default Products;

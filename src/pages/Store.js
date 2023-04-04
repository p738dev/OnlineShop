import React, { useContext, useEffect } from "react";
import StoreProduct from "../components/StoreProduct";
import { ProductsContext } from "../context/ProductsContext";
import data from "../data/data";
import { StyledRow, StyledCol } from "../styles/Store.css";

const Store = ({ addToCart, setIsOpenBasket }) => {
  const { setProductsList, productsList } = useContext(ProductsContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProductsList(res));
  }, []);

  return (
    <>
      <h1>Products</h1>
      <StyledRow>
        {productsList.map((product) => (
          <StyledCol key={product.id}>
            <StoreProduct
              product={product}
              addToCart={addToCart}
              setIsOpenBasket={setIsOpenBasket}
            />
          </StyledCol>
        ))}
      </StyledRow>
    </>
  );
};

export default Store;

import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import {
  StyledAddButton,
  StyledCard,
  StyledCardBody,
  StyledCardImage,
  StyledCardTitle,
  StyledSpanName,
  StyledSpanPrice,
  StyledSpanSize,
  StyledGoBasketButton,
} from "../styles/StoreProduct.css";

const StoreProduct = ({ product, setIsOpenBasket }) => {
  const { addToCart } = useContext(ProductsContext);

  return (
    <StyledCard>
      <StyledCardImage>
        <img
          src={product.image}
          alt={product.name}
        />
      </StyledCardImage>
      <StyledCardBody>
        <StyledCardTitle>
          <StyledSpanName>{product.title}</StyledSpanName>
          {/* <StyledSpanSize>{product.size}</StyledSpanSize> */}
          <StyledSpanPrice>${product.price}</StyledSpanPrice>
        </StyledCardTitle>
        <StyledAddButton onClick={() => addToCart(product)}>
          + Dodaj do koszyka
        </StyledAddButton>
        <StyledGoBasketButton onClick={() => setIsOpenBasket(true)}>
          Przejdź do koszyka
        </StyledGoBasketButton>
      </StyledCardBody>
    </StyledCard>
  );
};

export default StoreProduct;

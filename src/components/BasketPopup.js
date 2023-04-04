import React from "react";
import {
  StyledBasketPopupContainer,
  StyledProductBody,
  StyledProductImage,
  StyledProductTitle,
  StyledSpanName,
  StyledSpanPrice,
  StyledSpanSize,
  StyledRemoveButton,
  StyledQuanArea,
} from "../styles/BasketPopup.css";

const BasketPopup = ({
  product,
  removeProduct,
  increaseProduct,
  decreaseProduct,
}) => {
  return (
    <>
      <StyledBasketPopupContainer>
        <StyledProductImage>
          <img
            src={product.image}
            alt={product.name}
          />
        </StyledProductImage>
        <StyledQuanArea>
          <button onClick={() => decreaseProduct(product)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => increaseProduct(product)}>+</button>
        </StyledQuanArea>
        <StyledProductBody>
          <StyledProductTitle>
            <StyledSpanName>{product.title}</StyledSpanName>
            {/* <StyledSpanSize>{product.size}</StyledSpanSize> */}
            <StyledSpanPrice>${product.price}</StyledSpanPrice>
          </StyledProductTitle>
          <StyledRemoveButton onClick={() => removeProduct(product)}>
            Usuń
          </StyledRemoveButton>
        </StyledProductBody>
      </StyledBasketPopupContainer>
    </>
  );
};

export default BasketPopup;

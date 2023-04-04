import React, { useContext } from "react";
import BasketPopup from "./BasketPopup";
import {
  StyledAreaCancel,
  StyledBasketContainer,
  StyledCancelBasketButton,
  StyledEmptyBasket,
  StyledEmptyArea,
  StyledRow,
  StyledTotalPrice,
} from "../styles/Basket.css";
import { ProductsContext } from "../context/ProductsContext";

const Basket = ({
  setIsOpenBasket,
  cartItems,
  removeProduct,
  increaseProduct,
  decreaseProduct,
}) => {
  const { basketProductsList } = useContext(ProductsContext);

  return (
    <>
      <StyledBasketContainer>
        <StyledAreaCancel>
          <StyledCancelBasketButton onClick={() => setIsOpenBasket(false)}>
            Zamknij
          </StyledCancelBasketButton>
        </StyledAreaCancel>
        {basketProductsList.length === 0 && (
          <StyledEmptyArea>
            <StyledEmptyBasket>
              Koszyk jest pusty, prosimy dodać produkty
            </StyledEmptyBasket>
          </StyledEmptyArea>
        )}

        <StyledRow>
          {basketProductsList.map((product) => (
            <BasketPopup
              key={product.id}
              product={product}
              removeProduct={removeProduct}
              increaseProduct={increaseProduct}
              decreaseProduct={decreaseProduct}
            />
          ))}
        </StyledRow>
        <StyledTotalPrice>
          <p>
            Total Price: <span>$</span>
            <span>
              {cartItems
                .map((item) => item.price * item.quantity)
                .reduce((total, value) => total + value, 0)
                .toFixed(2)}
            </span>
          </p>
        </StyledTotalPrice>
      </StyledBasketContainer>
    </>
  );
};

export default Basket;

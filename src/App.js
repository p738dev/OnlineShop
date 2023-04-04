import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Basket from "./components/Basket";
import data from "./data/data";

import { StyledContainer } from "./styles/App.css";

const App = () => {
  const { products } = data;
  const [isOpenBasket, setIsOpenBasket] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const removeProduct = (productRemove) => {
    setCartItems(cartItems.filter((product) => product !== productRemove));
  };

  const increaseProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    }
  };

  const decreaseProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      {isOpenBasket && (
        <Basket
          setIsOpenBasket={setIsOpenBasket}
          cartItems={cartItems}
          removeProduct={removeProduct}
          increaseProduct={increaseProduct}
          decreaseProduct={decreaseProduct}
        />
      )}
      <Navbar
        setIsOpenBasket={setIsOpenBasket}
        cartItems={cartItems}
      />
      <StyledContainer>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/store"
            element={
              <Store
                products={products}
                setIsOpenBasket={setIsOpenBasket}
              />
            }
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </StyledContainer>
    </>
  );
};

export default App;

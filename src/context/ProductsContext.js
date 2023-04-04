import { createContext, useState } from "react";

export const ProductsContext = createContext({});

const ProductsContextProvider = ({ children }) => {
  const [basketProductsList, setBasketProductsList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  console.log(basketProductsList);

  const addToCart = (product) => {
    setBasketProductsList([...basketProductsList, { ...product, quantity: 1 }]);
    const productExist = basketProductsList.find(
      (prod) => prod.id === product.id
    );
    if (productExist) {
      setBasketProductsList(
        basketProductsList.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        basketProductsList,
        setBasketProductsList,
        productsList,
        setProductsList,
        addToCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

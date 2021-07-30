import React, { useState, createContext } from "react";

const ProdCtx = createContext();

const ProductContext = (props) => {
  const [products, setproducts] = useState([]);
  return (
    <ProdCtx.Provider value={{ products, setproducts }}>
      {props.children}
    </ProdCtx.Provider>
  );
};
export { ProdCtx, ProductContext };

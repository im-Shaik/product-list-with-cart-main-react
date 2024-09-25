import { createContext, useEffect, useState } from "react";
import productData from "./Data.json";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [myCart, setMyCart] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(productData.map((product, i) => ({ ...product, id: i })));
  }, [productData]);

  return (
    <ProductContext.Provider value={{ myCart, setMyCart, data }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

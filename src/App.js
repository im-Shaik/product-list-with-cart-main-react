import React from "react";
import Desserts from "./pages/Desserts";
import { ProductProvider } from "./Context";

const App = () => {
  return (
    <ProductProvider>
      <div className="wrapper">
        <Desserts />
      </div>
    </ProductProvider>
  );
};

export default App;

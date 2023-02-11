import React from "react";
import ProductsContextProvider from "./components/context/productsContext";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./components/products/AddProduct";
import Routing from "./Routing";

const App = () => {
  return (
    <ProductsContextProvider>
      <Navbar />
      <Routing />
    </ProductsContextProvider>
  );
};

export default App;

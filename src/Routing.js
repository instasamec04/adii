import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";
import ProductsList from "./components/products/ProductsList";

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AddProduct />
            <ProductsList />
          </>
        }
      />
      <Route path="/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default Routing;

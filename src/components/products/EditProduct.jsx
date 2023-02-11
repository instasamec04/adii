import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/productsContext";

const EditProduct = () => {
  const { EditUser } = useProducts();
  const navigate = useNavigate();
  return (
    <div>
      <input type="text" value={{}} onChange={{}} />
      <input type="text" value={{}} onChange={{}} />
      <input type="text" value={{}} onChange={{}} />
      <button>Edit</button>
      <button onClick={() => navigate("/")}>Вернуться</button>
    </div>
  );
};

export default EditProduct;

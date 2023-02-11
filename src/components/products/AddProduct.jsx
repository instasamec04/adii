import React, { useState } from "react";
import { useProducts } from "../context/productsContext";

const AddProduct = () => {
  const { AddUser } = useProducts();
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    age: "",
  });

  function handleSave(obj) {
    if (!obj.name.trim() || !obj.lastName.trim() || !obj.age.trim()) {
      alert("заполните поля");
      console.log(obj);
    } else {
      AddUser(obj);
    }
  }

  return (
    <div
      style={{
        margin: "20px 0 0 0",
      }}
    >
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <button onClick={() => handleSave(user)}>AddProduct</button>
    </div>
  );
};

export default AddProduct;

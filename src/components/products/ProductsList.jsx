import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/productsContext";

const ProductsList = () => {
  const { users, DeleteUser } = useProducts();

  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        gap: "10px 5px",
        margin: "50px 0 0 0",
      }}
      className="container"
    >
      {users.map((user) => (
        <div
          style={{
            border: "1px solid teal",
            display: "flex",
            flexDirection: "column",
            width: "30%",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
          }}
          key={user.id}
        >
          <h1>{user.name}</h1>
          <h1>{user.lastName}</h1>
          <h1>{user.age}</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <button onClick={() => DeleteUser(user.id)}>DELETE</button>
            <button onClick={() => navigate(`/${user.id}`)}>EDIT</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

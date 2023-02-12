import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/productsContext";

const EditProduct = () => {
  const { EditUser, getUser, man } = useProducts();

  const { id } = useParams();

  const [newMan, setNewMan] = useState(man);

  console.log(id);

  useEffect(() => {
    getUser(id);
  }, []);

  useEffect(() => {
    setNewMan(man);
  }, [man]);
  console.log(man);
  console.log(newMan);

  const navigate = useNavigate();
  return (
    <div>
      <input
        type="text"
        value={newMan.name}
        onChange={(e) => setNewMan({ ...newMan, name: e.target.value })}
      />
      <input
        type="text"
        value={newMan.lastName}
        onChange={(e) => setNewMan({ ...newMan, lastName: e.target.value })}
      />
      <input
        type="number"
        value={newMan.age}
        onChange={(e) => setNewMan({ ...newMan, age: e.target.value })}
      />
      <button
        onClick={() => {
          EditUser(id, newMan);
          navigate("/");
        }}
      >
        Edit
      </button>
      <button onClick={() => navigate("/")}>Вернуться</button>
    </div>
  );
};

export default EditProduct;

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const productsContext = createContext();
export const useProducts = () => useContext(productsContext);
const API = "http://localhost:8000/users";

const INIT_STATE = {
  users: [],
  getOneUser: {},
};

const ProductsContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  async function AddUser(obj) {
    try {
      let res = await axios.post(API, obj);
      console.log(res);
      getUser();
    } catch (error) {
      console.log(error);
    }
  }

  async function DeleteUser(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getUser();
    } catch (error) {
      console.log(error);
    }
  }

  async function getUser() {
    try {
      let { data } = await axios.get(API);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function EditUser(id, newUser) {
    try {
      await axios.patch(`${API}/${id}`, newUser);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const values = { AddUser, users, DeleteUser, EditUser };

  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;

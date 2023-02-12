import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const productsContext = createContext();
export const useProducts = () => useContext(productsContext);
const API = "http://localhost:8000/users";

const INIT_STATE = {
  users: [],
  getOneUser: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "GET_ONE_USER":
      return { ...state, getOneUser: action.payload };

    default:
      return state;
  }
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [users, setUsers] = useState([]);

  async function AddUser(obj) {
    try {
      let res = await axios.post(API, obj);
      console.log(res);

      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  async function DeleteUser(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  async function getUsers() {
    try {
      let { data } = await axios.get(API);
      setUsers(data);
      dispatch({ type: "GET_USERS", payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  async function getUser(id) {
    let { data } = await axios.get(`${API}/${id}`);
    console.log(data);
    dispatch({ type: "GET_ONE_USER", payload: data });
  }

  async function EditUser(id, newUser) {
    try {
      await axios.patch(`${API}/${id}`, newUser);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const values = {
    AddUser,
    users,
    DeleteUser,
    EditUser,
    getUser,
    man: state.getOneUser,
  };

  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;

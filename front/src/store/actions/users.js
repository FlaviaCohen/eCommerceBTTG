import axios from "axios";
import {
  LOGIN_USER,
  LOGOUT_USER,
  ERROR_MESSAGE,
  GET_USERS,
  GET_USER,
} from "../constants";
import { allCart } from "./cart";

const loginUser = (user) => ({
  type: LOGIN_USER,
  user,
});

const logoutUser = (user) => ({
  type: LOGOUT_USER,
  user,
});

const errorMessage = (message) => ({
  type: ERROR_MESSAGE,
  message,
});

const getUsers = (users) => ({
  type: GET_USERS,
  users,
});

const getUser = (user) => ({
  type: GET_USER,
  user,
});

export const userLogin = function (user) {
  return function (dispatch) {
    return axios
      .post("/api/users/login", user)
      .then((res) => {
        return dispatch(loginUser(res.data));
      })
      .catch((err) =>
        dispatch(errorMessage("El usuario o contraseña no existe"))
      );
  };
};

export const userLogout = function (user) {
  return function (dispatch) {
    axios.post("/api/users/logout", user).then(() => {
      dispatch(logoutUser({}));
      dispatch(allCart([]));
    });
  };
};

export const registerUser = function (user) {
  return function (dispatch) {
    return axios
      .post("/api/users/register", user)
      .catch((err) =>
        dispatch(errorMessage("Ese email ya esta en uso por un usuario"))
      );
  };
};

export const cookieLogger = () => (dispatch) =>
  axios.get("/api/users/cookieuser").then((res) => {
    dispatch(loginUser(res.data));
  });

export const fetchUsers = function () {
  return function (dispatch) {
    axios.get("/api/users/admin").then((res) => dispatch(getUsers(res.data)));
  };
};

export const fetchUser = (id) => (dispatch) =>
  axios
    .get(`/api/users/admin/${id}`)
    .then((res) => dispatch(getUser(res.data)));

export const editUser = (id, role) => () => {
  axios.patch(`/api/users/admin/${id}`, role);
};

export const deleteUser = (id) => () => {
  axios.delete(`/api/users/admin/${id}`);
};

import axios from "axios";
export const GET_ALL_DOGS = "GET_ALL_DOGS"; //raer todos los perros y mostrarlos
export const GET_TEMPER = "GET_TEMPER"; //Traer temperamentos
export const GET_FILTER_TEMPER = "GET_FILTER_TEMPER"; //Filtrado por temperamento
export const GET_DOG = "GET_DOGS"; //Raza existente del api o creada por nosotros
export const ORDER_BY_NAME = "ORDER_BY_NAME"; //el orden alfabético
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT"; //peso del perro
export const GET_DETAIL = "GET_DETAIL"; // detalle del perro

export const getAllDogs = () => {
  const url = "http://localhost:3001/dogs";
  return async function (dispatch) {
    const data = (await axios.get(url)).data;
    return dispatch({ type: GET_ALL_DOGS, payload: data });
  };
};

export const getTemper = () => {
  const url = "http://localhost:3001/temperaments";
  return async function (dispatch) {
    const dataTemper = (await axios.get(url)).data;
    return dispatch({ type: GET_TEMPER, payload: dataTemper });
  };
};

export const filterByTemperament = (filter) => {
  return function (dispatch) {
    return dispatch({ type: GET_FILTER_TEMPER, payload: filter });
  };
};

export const getName = (name) => {
  const url = `http://localhost:3001/dogs?name=${name}`;
  return async function (dispatch) {
    const dataName = (await axios(url)).data;
    return dispatch({ type: GET_DOG, payload: dataName });
  };
};

export const OrderbyName = (order) => {
  return function (dispatch) {
    return dispatch({ type: ORDER_BY_NAME, payload: order });
  };
};

export const OrderByWeight = (order) => {
  return function (dispatch) {
    return dispatch({ type: ORDER_BY_WEIGHT, payload: order });
  };
};

export const getDetail = (id) => {
  const url = `http://localhost:3001/dogs/${id}`;
  return async function (dispatch) {
    const detail = (await axios.get(url)).data;
    return dispatch({ type: GET_DETAIL, payload: detail });
  };
};

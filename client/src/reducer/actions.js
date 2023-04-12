import axios from "axios";
import {
  GET_ALL_DOGS,
  GET_TEMPER,
  GET_FILTER_TEMPER,
  GET_DOG,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  GET_DETAIL,
  CLEAR_DETAIL,
  CLEAR_DOGS,
} from "./types/types";

export const getAllDogs = () => {
  return async function (dispatch) {
    const data = (await axios.get("http://localhost:3001/dogs")).data;
    return dispatch({ type: GET_ALL_DOGS, payload: data });
  };
};

export const getTemper = () => {
  return async function (dispatch) {
    const dataTemper = (await axios.get("http://localhost:3001/temperaments"))
      .data;
    return dispatch({ type: GET_TEMPER, payload: dataTemper });
  };
};

export const filterByTemperament = (filter) => {
  return function (dispatch) {
    return dispatch({ type: GET_FILTER_TEMPER, payload: filter });
  };
};

export const getName = (name) => {
  return { type: GET_DOG, payload: name };
};

//COPIA DE BUSQUEDA CON NAME EN API PERO CON ERRORES NO NECESARIOS (DOBLE TRABAJO PARA LO MISMO)
// export const getName = (name) => {
//   return async function (dispatch) {
//     const dataName = (
//       await axios.get(`http://localhost:3001/dogs?name=${name}`)
//     ).data;
//     return dispatch({ type: GET_DOG, payload: dataName });
//   };
// };

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
  return async function (dispatch) {
    const detail = (await axios.get(`http://localhost:3001/dogs/${id}`)).data;
    return dispatch({ type: GET_DETAIL, payload: detail });
  };
};

export const clearDetail = () => {
  return { type: CLEAR_DETAIL };
};

export const clearDogs = () => {
  return { type: CLEAR_DOGS };
};

import axios from "axios";
import { FILTER, ORDER, GET_ALL_GODS } from "./types";

export const filterTemper = (temper) => {
  return { type: FILTER, payload: temper };
};

export const oder_raza = (id) => {
  return { type: ORDER, payload: id };
};

export const getAllDogsAction = async () => {
  const data = (await axios.get("http://localhost:3001")).data;
  return { type: GET_ALL_GODS, payload: data };
};

export const search = async () => {
  
};

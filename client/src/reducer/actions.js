import axios from "axios";
import { GET_DOGS } from "./types";

export const getDogs = () => {
  return async function (dispatch) {
    let response = await axios.get("http://localhost:3001/dogs");
    return dispatch({ type: GET_DOGS, payload: response.data });
  };
};

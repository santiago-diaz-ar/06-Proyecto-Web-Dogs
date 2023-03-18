import { GET_DOGS } from "../reducer/types";

const initialState = {
  dogs: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

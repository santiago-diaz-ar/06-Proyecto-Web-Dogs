import { ORDER, GET_ALL_GODS } from "../reducer/types";

const initialState = {
  dogs: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_GODS:
      return {
        ...state,
        dogs: payload,
      };

    case ORDER:
      break;

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

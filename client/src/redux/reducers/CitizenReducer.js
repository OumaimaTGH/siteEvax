import { GET_ALL_CITIZENS, GET_SINGLE_CITIZEN } from "../types";
import isEmpty from "../../util/isEmpty";

const initialState = {
  all: [],
  single: null
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CITIZENS:
      return {
        all: action.payload
      };
      case GET_SINGLE_CITIZEN:
        return {
          ...state,
          single: action.payload
        };      

    default:
      return state;
  }
}

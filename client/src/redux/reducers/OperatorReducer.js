import { GET_ALL_OPERATORS, GET_SINGLE_OPERATOR } from "../types";
import isEmpty from "../../util/isEmpty";

const initialState = {
  all: [],
  single: null
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_OPERATORS:
      return {
        all: action.payload
      };
      case GET_SINGLE_OPERATOR:
        return {
          ...state,
          single: action.payload
        };      

    default:
      return state;
  }
}

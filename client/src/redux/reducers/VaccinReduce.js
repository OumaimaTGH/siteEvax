import { GET_ALL_VACCINS, GET_SINGLE_VACCIN } from "../types";
import isEmpty from "../../util/isEmpty";

const initialState = {
  all: [],
  single: null
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_VACCINS:
      return {
        all: action.payload
      };
      case GET_SINGLE_VACCIN:
        return {
          ...state,
          single: action.payload
        };      

    default:
      return state;
  }
}

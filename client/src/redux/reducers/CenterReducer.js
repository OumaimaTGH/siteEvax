import { GET_ALL_CENTERS, GET_SINGLE_CENTER } from "../types";
import isEmpty from "../../util/isEmpty";

const initialState = {
  all: [],
  single: null
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CENTERS:
      return {
        all: action.payload
      };
      case GET_SINGLE_CENTER:
        return {
          ...state,
          single: action.payload
        };      

    default:
      return state;
  }
}

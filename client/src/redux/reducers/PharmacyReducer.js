import { GET_ALL_PHARMACIES, GET_SINGLE_PHARMACIE } from "../types";
import isEmpty from "../../util/isEmpty";

const initialState = {
  all: [],
  single: null
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PHARMACIES:
      return {
        all: action.payload
      };
      case GET_SINGLE_PHARMACIE:
        return {
          ...state,
          single: action.payload
        };      

    default:
      return state;
  }
}

import { GET_ALL_OPENDAY,  ADD_OPENDAY} from "../types";
import isEmpty from "../../util/isEmpty";

const initialState = {
    all: []
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_OPENDAY:
      return  {
          ...state,
          all: action.payload
      };
   

    default:
      return state;
  }
}

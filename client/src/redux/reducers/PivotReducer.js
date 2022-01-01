import { SET_CITIZEN } from "../types";

const initialState = null;
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CITIZEN:
      return  action.payload

    default:
      return state;
  }
}

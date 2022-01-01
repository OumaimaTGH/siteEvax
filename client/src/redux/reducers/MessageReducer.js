import { SET_MESSAGE } from "../types";


const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return action.payload;

    default:
      return state;
  }
}

import { GET_ERRORS_AUTH, RESET_PASSWORD, SET_CURRENT_USER } from "../types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../util/setAuthToken";

//TODO: Register User
export const RegisterUser = (data, router) => (dispatch) => {
  axios
    .post("/api/add__admin", data)
    .then((res) => {
      router.push("/login");
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: {},
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      })
    );
};
//TODO: Login User
export const LoginUser = (data, history) => (dispatch) => {
  axios
    .post("/api/secure__login", data)
    .then((res) => {
      //get token
      const { token } = res.data;
      //set to local storage
      window.localStorage.setItem("jwtToken", token);
      //set auth toekn if exist
      setAuthToken(token);
      //decode token
      const decoded = jwt_decode(token);

        history.push("/AppAdmin");

      console.log(decoded)
      //set current user
      dispatch(set_current_user(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      })
    );
};


//TODO: Logout User
export const LogoutUser = () => (dispatch) => {
  window.location.href = "/login";
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(set_current_user({}));
};


export const set_current_user = (data) => ({
  type: SET_CURRENT_USER,
  payload: data,
});

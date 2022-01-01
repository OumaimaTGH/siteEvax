import axios from "axios";
import {
  GET_ALL_OPERATORS,
  GET_ERRORS_AUTH,
  GET_SINGLE_OPERATOR,
  SET_MESSAGE,
} from "../types";
export const FindAll = () => (dispatch) => {
  axios
    .get("/api/operator")
    .then((res) => {
      dispatch({
        type: GET_ALL_OPERATORS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
};

export const FindSingle = (id) => async (dispatch) => {
  await axios
    .get(`/api/operator/${id}`)
    .then(async (res) => {
      await dispatch({
        type: GET_SINGLE_OPERATOR,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
};

export const Create = (data, setVisible) => (dispatch) => {
  axios
    .post(`/api/operator`, data)
    .then((res) => {
      dispatch(FindAll());
      setVisible(false);
      dispatch(set_message(res.data))
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
};

export const DeleteOperator = (id) => (dispatch) => {
  if (window.confirm("étes vous sure de supprimé ce operator?")) {
    axios
      .delete(`/api/operator/${id}`)
      .then((res) => {
        alert(`${res.data.message}`);
        dispatch(FindAll());
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS_AUTH,
          payload: err.response.data,
        });
      });
  }
};

export const UpdatePassword = (id) => (dispatch) => {
  if (window.confirm("tu veux changé le mot de pass opérateur?")) {
    axios
      .patch(`/api/operator/${id}`)
      .then((res) => {
        alert(`le nouveau mot de pass pour ${res.data.email} est: ${res.data.password}`);
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS_AUTH,
          payload: err.response.data,
        });
      });
  }
};

export const UpdateOperator = (data, id, setvisible) => (dispatch) => {
  axios
    .put(`/api/operator/${id}`, data)
    .then((res) => {
      dispatch(FindAll());
      setvisible(false);
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
};

export const set_message = (response) => ({
    type: SET_MESSAGE,
    payload: response,
  });


import axios from "axios";
import { GET_ALL_VACCINS, GET_ERRORS_AUTH, GET_SINGLE_VACCIN } from "../types";
export const FindAll = () => (dispatch) => {
  axios
    .get("/api/vaccin")
    .then((res) => {
      dispatch({
        type: GET_ALL_VACCINS,
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


export const FindSingle =  (id)=>async(dispatch)=>{
  await axios
    .get(`/api/vaccin/${id}`)
    .then(async (res) => {
     await  dispatch({
        type: GET_SINGLE_VACCIN,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
}

export const Create = (data, setVisible)=>dispatch=>{
  axios
    .post(`/api/vaccin`, data)
    .then((res) => {
      dispatch(FindAll())
      setVisible(false)
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
}

export const DeleteVaccin = (id)=>dispatch=>{
  if(window.confirm("étes vous sure de supprimé ce vaccin?")){
    axios
    .delete(`/api/vaccin/${id}`)
    .then((res) => {
      alert(`${res.data.message}`)
      dispatch(FindAll())
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
  }
}

export const UpdateVaccin = (data, id, setvisible)=>dispatch=>{

    axios
    .put(`/api/vaccin/${id}`, data)
    .then((res) => {
      dispatch(FindAll())
      setvisible(false)
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
  }

import axios from "axios";
import { GET_ALL_PHARMACIES, GET_ERRORS_AUTH, GET_SINGLE_PHARMACIE } from "../types";
export const FindAll = () => (dispatch) => {
  axios
    .get("/api/pharmacy")
    .then((res) => {
      dispatch({
        type: GET_ALL_PHARMACIES,
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
    .get(`/api/pharmacy/${id}`)
    .then(async (res) => {
     await  dispatch({
        type: GET_SINGLE_PHARMACIE,
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
    .post(`/api/pharmacy`, data)
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

export const DeletePharmacy = (id)=>dispatch=>{
  if(window.confirm("étes vous sure de supprimer cette pharmacie?")){
    axios
    .delete(`/api/pharmacy/${id}`)
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

export const UpdatePharmacy = (data, id, setvisible)=>dispatch=>{

    axios
    .put(`/api/pharmacy/${id}`, data)
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

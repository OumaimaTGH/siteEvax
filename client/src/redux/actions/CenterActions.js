import axios from "axios";
import { GET_ALL_CENTERS, GET_ERRORS_AUTH, GET_SINGLE_CENTER } from "../types";
export const FindAll = () => (dispatch) => {
  axios
    .get("/api/center")
    .then((res) => {
      dispatch({
        type: GET_ALL_CENTERS,
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
    .get(`/api/center/${id}`)
    .then(async (res) => {
     await  dispatch({
        type: GET_SINGLE_CENTER,
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
    .post(`/api/center`, data)
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

export const DeleteCenter = (id)=>dispatch=>{
  if(window.confirm("étes vous sure de supprimé ce centre?")){
    axios
    .delete(`/api/center/${id}`)
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

export const UpdateCenter = (data, id, setvisible)=>dispatch=>{

    axios
    .put(`/api/center/${id}`, data)
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

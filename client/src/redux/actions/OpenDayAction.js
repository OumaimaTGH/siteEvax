import axios from "axios";
import {  GET_ERRORS_AUTH, GET_ALL_OPENDAY } from "../types";
export const FindAll = () => (dispatch) => {
  axios
    .get("/api/openday")
    .then((res) => {
      dispatch({
        type: GET_ALL_OPENDAY,
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




export const Create = (data, setVisible)=>dispatch=>{
  axios
    .post(`/api/openday`, data)
    .then((res) => {
      dispatch(FindAll())
      setVisible(false)
    })

}

export const DeleteOpenDay = (id)=>dispatch=>{
  if(window.confirm("étes vous sure de supprimé ce openday?")){
    axios
    .delete(`/api/openday/${id}`)
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

import axios from "axios";
import { GET_ALL_CITIZENS, GET_ERRORS_AUTH, GET_SINGLE_CITIZEN, SET_CITIZEN } from "../types";
export const FindAll = () => (dispatch) => {
  axios
    .get("/api/citizen")
    .then((res) => {
      dispatch({
        type: GET_ALL_CITIZENS,
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
    .get(`/api/citizen/${id}`)
    .then(async (res) => {
     await  dispatch({
        type: GET_SINGLE_CITIZEN,
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

export const ConfirmAccount = (id, record)=>dispatch=>{
  if (window.confirm(!record.confirmed ? 'tu veux confirmé le compte citoyen?': 'tu veux annuler le confirmation du compte citoyen?')) {
  axios
    .put(`/api/citizen/confirm/${id}`)
    .then((res) => {
      dispatch(FindAll())
      alert('compte mis ajour et email envoyé vers le citoyen')
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
  }
}

export const ConfirmVaccin = (id, record)=>dispatch=>{
  if (window.confirm(!record.vaccinated ? 'tu veux confirmé le vaccin citoyen?': 'tu veux annuler le vaccin du compte citoyen?')) {
  axios
    .put(`/api/citizen/vaccinated/${id}`)
    .then((res) => {
      dispatch(FindAll())
      alert('compte mis ajour et email envoyé vers le citoyen')
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
  }
}

export const Create = (data)=>dispatch=>{
  axios
    .post(`/api/citizen`, data)
    .then((res) => {
      dispatch({
        type: SET_CITIZEN,
        payload: 'Compte enregistré, veuillez attender un message de confirmation par email'
      })
      setTimeout(() => {
        dispatch({
          type: SET_CITIZEN,
          payload: null
        })
      }, 8000);
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
}

export const DeleteCitizen = (id)=>dispatch=>{
  if(window.confirm("étes vous sure de supprimé ce citizen?")){
    axios
    .delete(`/api/citizen/${id}`)
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

export const UpdateCitizen = (data)=>dispatch=>{
  if(window.confirm('voulez vous mettre à jour les données actuels ?')){
    axios
    .put(`/api/citizen/${data._id}`, data)
    .then((res) => {
       alert(`${res.data.message}`);
       window.location.href = '/Visiteur/inscription';
       dispatch({
        type: GET_SINGLE_CITIZEN,
        payload: null
      })
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
  }
  
  }

  export const ConnectCitizen = (data, setform)=>dispatch=>{

    axios
    .post(`/api/citizen/connect`, data)
    .then((res) => {
      setform(res.data.data)
      
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS_AUTH,
        payload: err.response.data,
      });
    });
  }



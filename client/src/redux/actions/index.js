import axios from 'axios';

export const control = (payload) => {
  return {
    type: 'CONTROL',
    payload,
  };
};

export const signIn = () => {
  return {
    type: 'SIGN_IN',
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const getRendezvous = () => (dispatch) => {
  axios
    .get('../fakedata/rendez-vous.json')
    .then((res) => dispatch({ type: 'GET_RENDEZVOUS', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_RENDEZVOUS_ERR', payload: err }));
};
export const getJournéesportesouvertes = () => (dispatch) => {
  axios
    .get('../fakedata/journées_portes_ouvertes.json')
    .then((res) => dispatch({ type: 'GET_JOURNÉESPORTESOUVERTES', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_JOURNÉESPORTESOUVERTES_ERR', payload: err }));
};
export const getGestiondesvolontaires = () => (dispatch) => {
  axios
    .get('../fakedata/gestion_des_volontaires.json')
    .then((res) => dispatch({ type: 'GET_GESTIONDESVOLONTAIRES', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_GESTIONDESVOLONTAIRES_ERR', payload: err }));
};
export const getSysinfo = () => (dispatch) => {
  axios
    .get('../fakedata/sysInfo.json')
    .then((res) => dispatch({ type: 'GET_SYSINFO', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_SYSINFO_ERR', payload: err }));
};

export const getErrorlog = () => (dispatch) => {
  axios
    .get('../fakedata/errorLog.json')
    .then((res) => dispatch({ type: 'GET_ERRORLOG', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_ERRORLOG_ERR', payload: err }));
};

export const getAuthlog = () => (dispatch) => {
  axios
    .get('../fakedata/authLog.json')
    .then((res) => dispatch({ type: 'GET_AUTHLOG', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_AUTHLOG_ERR', payload: err }));
};

export const getRequestcount = () => (dispatch) => {
  axios
    .get('../fakedata/requestHit.json')
    .then((res) => dispatch({ type: 'GET_REQUEST_COUNT', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_REQUEST_COUNT_ERR', payload: err }));
};

export const getMaillog = () => (dispatch) => {
  axios
    .get('../fakedata/mailLog.json')
    .then((res) => dispatch({ type: 'GET_MAIL_LOG', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_MAIL_LOG_ERR', payload: err }));
};

export const getCentresdevaccination = () => async (dispatch) => {
  await axios
    .get('../fakedata/centresdevaccination.json')
    .then((res) => res.data)
    .then((res) => dispatch({ type: 'GET_CENTRESDEVACCINATION', payload: res.urls }))
    .catch((err) => dispatch({ type: 'GET_CENTRESDEVACCINATION', payload: err }));
};

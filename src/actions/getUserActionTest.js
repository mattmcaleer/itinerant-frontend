import { LOADING_USER, GET_USER_SUCCESS, GET_USER_ERRORS, GET_USER_FAILURE } from './constantsTest'

const API_URL = 'http://localhost:5000'

export const getUser = (token) => (dispatch) => {
    dispatch({ type:LOADING_USER })
    
    fetch(API_URL + `/auto_login`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if (data.id !== undefined) {
            return dispatch({ type: GET_USER_SUCCESS, payload: data })
        } else {
            alert(data.errors.map(error => error))
            return dispatch({ type: GET_USER_ERRORS, payload: data })
        }
    })
    .catch(err => {
        alert("Unable To Veryify User At This Time")
        return dispatch({ type: GET_USER_FAILURE, payload: err })
    })
}
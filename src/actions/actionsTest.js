import { LOADING_USER, POST_USER_SUCCESS, POST_USER_ERRORS, POST_USER_FAILURE } from './constantsTest'

const API_URL = 'http://localhost:3000'

export const actionsTest = ({ name, email, password }) => (dispatch) => {

    dispatch({ type: LOADING_USER })
    
    fetch(API_URL + `/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.user !== undefined) {
            localStorage.setItem("token", data.jwt)
            alert("Successfully Signed Up")
            return dispatch({ type: POST_USER_SUCCESS, payload: data })
        } else {
            alert(data.errors.map(error => error))
            return dispatch({ type: POST_USER_ERRORS, payload: data })
        }
    })
    .catch(err => {
        alert("Unable to SignUp At This Time")
        return dispatch({ type: POST_USER_FAILURE, payload: err })
    })
}
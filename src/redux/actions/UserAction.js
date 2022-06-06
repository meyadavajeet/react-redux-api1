import axios from "axios";
import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../constants/UserConstants";


export const userAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST });
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload: error.data && error.response.data.message ? error.response.data.message : error.message
        })
    }
};
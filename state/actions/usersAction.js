import axiosConfig from '../../config/axios';
import {
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    CREATE_USER,
    GET_USERS,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
} from '../dispatchTypes';

export const getUsers= (dispatch) => {
    dispatch({
        type: GET_USERS
    });
    axiosConfig
        .get(`/users`, {
            headers: {
                'token': localStorage.token,
            },
        })
        .then(response => {
            dispatch({
                type: GET_USERS_SUCCESS,
                orders: response.data,
            });
        })
        .catch(error => {
            dispatch({
                type: GET_USERS_ERROR,
                errorMessage: error.response.data.message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_ORDERS_ERROR,
                errorMessage:
                    'Lost connection to the server. Kindly check your internet connection',
            });
        });
};

export const createUser = (dispatch, credentials) => {
    dispatch({
        type: CREATE_USER
    });

    axiosConfig
        .post(`/users`, credentials, {
            headers: {
                'token': localStorage.token,
            },
        })
        .then(response => {
            dispatch({
                type: CREATE_ORDERS_SUCCESS,
                orders: response.data,
            });
        })
        .catch(error => {
            dispatch({
                type: CREATE_ORDERS_ERROR,
                errorMessage: error.response.data.message,
            });
        })
        .catch(() => {
            dispatch({
                type: CREATE_ORDERS_ERROR,
                errorMessage:
                    'Lost connection to the server. Kindly check your internet connection',
            });
        });
}

export const getUser = (dispatch, userId) => {
    dispatch({
        type: GET_USER,
    });
    axiosConfig
        .get(`/users/${userId}`, {
            headers: {
                'token': localStorage.token,
            },
        })
        .then(response => {
            dispatch({
                type: GET_USER_SUCCESS,
                order: response.data,
            })
        })
        .catch(error => {
            dispatch({
                type: GET_USER_ERROR,
                errorMessage: error.response.data.message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_USER_ERROR,
                errorMessage:
                    'Lost connection to the server. Kindly check your internet connection',
            });
        });
};

import {
    GET_ORDER,
    GET_ORDER_ERROR,
    GET_ORDER_SUCCESS,
    GET_ORDERS,
    GET_ORDERS_ERROR,
    GET_ORDERS_SUCCESS, GET_USER, GET_USER_ERROR, GET_USER_SUCCESS, GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS
} from "../dispatchTypes";

export const initialOrdersState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    users: {
        users: [],
        pagination: {}
    },
    user: {},
}

export const usersReducers = (
    state = initialOrdersState,
    action
) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                orders: action.orders,
            };
        }
        case GET_USERS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_USER: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                order: action.order,
            };
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        default:
            return state
    }

};
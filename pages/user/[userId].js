import React, {useEffect} from 'react';
import GealDashboard from '../../components/dashboard/admin';
import axiosConfig from '../../config/axios';
import { initializeStore } from '../../state';

const Home = () => {
    useEffect(() => {
        try {
            JSON.parse(localStorage.currentUser);
        } catch (error) {
            localStorage.clear();
            window.location.replace('/');
        }
    }, []);
    return (
        <GealDashboard page='user' section='specific-user'/>
    );
};

const fetchSpecificUser= async (userId, dispatch) => {
    await axiosConfig
        .get(`/users/${userId}`)
        .then(response =>
            dispatch({
                type: 'GET_USER_SUCCESS',
                post: response.data,
            })
        )
        .catch(error =>
            dispatch({
                type: 'GET_USER_ERROR',
                errorMessage: error.response.data.message,
            })
        )
        .catch(() =>
            dispatch({
                type: 'GET_USER_ERROR',
                errorMessage: 'Something went wrong',
            })
        );
};

export const getServerSideProps = async context => {
    const { userId } = context.query;
    let initialServerSideState;

    const state = initializeStore();
    const { dispatch } = state;
    await fetchSpecificUser(userId, dispatch);

    const { usersAction } = state.getState();
    initialServerSideState = {
        usersAction,
    };

    return {
        props: {
            initialServerSideState,
        },
    };
};

export default Home;

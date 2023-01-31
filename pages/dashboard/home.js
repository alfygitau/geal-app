import React, {useEffect} from 'react';
import GealDashboard from '../../components/dashboard/admin';
import {getRoles} from "../../state/actions/roleAction";
import {useDispatch} from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        try {
            JSON.parse(localStorage.currentUser);
            getRoles(dispatch);
        } catch (error) {
            localStorage.clear();
            window.location.replace('/');
        }
    }, [dispatch]);
    return (
        <GealDashboard page='dashboard' section='home'/>
    );
};

export default Home;

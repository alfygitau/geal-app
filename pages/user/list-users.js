import React, {useEffect} from 'react';
import GealDashboard from '../../components/dashboard/admin';

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
        <GealDashboard page='user' section='list-users'/>
    );
};

export default Home;

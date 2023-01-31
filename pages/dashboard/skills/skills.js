import React, {useEffect} from 'react';
import GealDashboard from '../../../components/dashboard/admin';

const Skills = () => {
    useEffect(() => {
        try {
            JSON.parse(localStorage.currentUser);
        } catch (error) {
            localStorage.clear();
            window.location.replace('/');
        }
    }, []);
    return (
        <GealDashboard page='dashboard' section='skills'/>
    );
};

export default Skills;

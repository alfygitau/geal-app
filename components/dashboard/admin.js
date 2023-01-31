import React from 'react';
import GealLayout from './layout/layout';
import Servicemen from "./servicemen/servicemen";
import Home from "./home/home";
import AllJobs from "../../components/dashboard/jobs/all_jobs";
import Roles from "./roles/roles";
import Skills from "./skills/skills";
import ListUsers from "./users/list-users";
import UserDetails from "./users/user-details";

const GealDashboard = ({section}) => {
    const renderOrderPages = () => {
        switch (section) {
            case 'home':
                return (
                    <Home/>
                );
            case 'servicemen':
                return (
                    <Servicemen/>
                );
            case 'all_jobs':
                return (
                    <AllJobs section={section}/>
                );
            case 'roles':
                return (
                    <Roles section={section}/>
                );
            case 'skills':
                return (
                    <Skills section={section}/>
                );
            case 'list-users':
                return (
                    <ListUsers section={section}/>
                );
            case 'specific-user':
                return (
                    <UserDetails section={section}/>
                );
            case undefined:
                return '';
            default:
                return '';
        }
    }
    return (
        <div>
            <GealLayout section={section}>
                {renderOrderPages()}
            </GealLayout>
        </div>
    );
};

export default GealDashboard;
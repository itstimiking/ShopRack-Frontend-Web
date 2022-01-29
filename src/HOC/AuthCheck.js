import React from 'react';
import { Navigate, useLocation } from 'react-router';
import {useAuth } from "../context/AuthUserContext";

function AuthCheck({component: Component}) {

    const {authUser} = useAuth();
    const location = useLocation();

    if(!authUser.email){
        return <Navigate to="/signin" state={{ path: location.pathname }} replace /> 
    }
    
    return <Component />;
    
}

export default AuthCheck;
import React from 'react';
import { Navigate} from 'react-router';
import {useAuth } from "../context/AuthUserContext";

function PreventAuthUser({component: Component}) {

    const {authUser} = useAuth();

    if(authUser.email){
        return <Navigate to="/dashboard"/> 
    }
    
    return <Component />;
    
}

export default PreventAuthUser;
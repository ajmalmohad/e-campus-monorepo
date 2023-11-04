import React from 'react'
import { Navigate } from 'react-router-dom';

const AccessChecker = ({ children }) => {
    const isLoggedIn = true;
    return (
        isLoggedIn===true ? <div>{ children }</div> : <Navigate to="/not-found" />
    )
}

export default AccessChecker
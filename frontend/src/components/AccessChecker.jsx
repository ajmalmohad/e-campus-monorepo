import React from 'react'
import { Navigate } from 'react-router-dom';
import { config } from '../../settings';

const AccessChecker = ({ children, access }) => {
    const accessCheck = config.access;
    return (
        accessCheck===access ? <div>{ children }</div> : <Navigate to="/not-found" />
    )
}

export default AccessChecker
import React, { Children, use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ClimbingBoxLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)

    const location = useLocation();
    console.log(location);

    if (loading) {
        return (
            <div className='h-[97vh] flex items-center justify-center'>
                <ClimbingBoxLoader color='#e74c3c'></ClimbingBoxLoader>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/signin" state={location.pathname}></Navigate>
    }


    return children;
};

export default PrivateRoute;
import React from 'react';
import {useAuth0} from '@auth0/auth0-react';


function AuthWrapper({children}) {
    const {isLoading, error} = useAuth0();

    if(isLoading) {
        return (
            <h3>Loading...</h3>
        )
    }

    if(error) {
        return (
            <h3>{error.message}</h3>
        )
    }

    return (
    <>{children}</>
    )
}

export default AuthWrapper
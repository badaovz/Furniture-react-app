import {useAuth0} from '@auth0/auth0-react';


function AuthWrapper({children}) {
    const {isLoading, error} = useAuth0();

    if(isLoading) {
        return (
            <div className='loading'></div>
        )
    }

    if(error) {
        return (
            <h3>{error.message}</h3>
        )
    }

    return (
    <div>
        {children}
    </div>
    )
}

export default AuthWrapper;
import {createContext, useContext, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();
export const  UserProvider = ({children}) => {
    const { loginWithRedirect, logout, user, isLoading, error, isAuthenticated} = useAuth0();
    const [myUser, setMyUser] = useState(null);

    useEffect(() => {
        setMyUser(user);
    }, [user])
    return (
        <UserContext.Provider value={{
            myUser,
            isAuthenticated,
            loginWithRedirect, 
            logout, 
            isLoading, 
            error,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}

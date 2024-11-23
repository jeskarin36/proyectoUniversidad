import { useState, createContext, useMemo } from 'react';

const UserContext = createContext(); 

const UserProvider = (props) => {
    const [user, setUser] = useState([]);

const value = useMemo(
   () => ({user, setUser}),[user])


    return (
        <UserContext.Provider
            value={value}
        >
            {props.children}
        </UserContext.Provider>
    );
}
export { UserContext, UserProvider };
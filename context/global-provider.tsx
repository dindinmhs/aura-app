import { getCurrentUser } from "@/services/users";
import { userType } from "@/types/user";
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";


export interface GlobalContextType {
    user : userType|null|undefined;
    setUser : Dispatch<SetStateAction<userType|null|undefined>>;
    isLoggedIn : boolean;
    setLoggedIn : Dispatch<SetStateAction<boolean>>;
    isLoading : boolean;
}

const GlobalContext = createContext<GlobalContextType|null>(null)

export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({ children } : { children : React.ReactNode }) => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [user, setUser] = useState<userType|null|undefined>(null)

    useEffect(()=>{
        const checkSession = async () => {
            try {
                const user = await getCurrentUser()

                if (!user) {
                    setUser(null)
                    setLoggedIn(false)
                }

                setUser(user)
                setLoggedIn(true)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        checkSession()
    },[])

    useEffect(()=>{
        console.log(user)
    },[user])

    return (
    <GlobalContext.Provider
        value={{
            user,
            setUser,
            isLoggedIn,
            setLoggedIn,
            isLoading
        }}
    >
        {children}
    </GlobalContext.Provider>)
};

export default GlobalProvider

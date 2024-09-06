import { getCurrentUser } from "@/services/users";
import { UserDocument, userType } from "@/types/user";
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";


export interface GlobalContextType {
    user : UserDocument|undefined|null;
    setUser : Dispatch<SetStateAction<UserDocument|undefined|null>>;
    isLoggedIn : boolean;
    setLoggedIn : Dispatch<SetStateAction<boolean>>;
    isLoading : boolean;
}

const GlobalContext = createContext<GlobalContextType|null>(null)


const GlobalProvider = ({ children } : { children : React.ReactNode }) => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [user, setUser] = useState<UserDocument|undefined|null>(null)
    
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

export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalProvider

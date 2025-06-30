import { createContext, useState } from "react";

export const userContext=createContext();

// eslint-disable-next-line react/prop-types
export default function UserProvider({children}){
    const [token,setToken]=useState(localStorage.getItem("token"))
    return <userContext.Provider value={{token,setToken}}>
        {children}
    </userContext.Provider>
}
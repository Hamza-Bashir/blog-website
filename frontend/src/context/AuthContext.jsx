import {createContext, useState} from "react"

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [auth, setAuth] = useState({
        token:localStorage.getItem("token") || "",
        user:JSON.parse(localStorage.getItem("user")) || null
    })


    return <AuthContext.Provider value={{auth, setAuth}}>
        {children}
    </AuthContext.Provider>
}
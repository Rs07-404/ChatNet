import { createContext, Dispatch, SetStateAction, useState } from "react";
import { User } from "../types/User.type.ts";

type AuthContextType = {
    authUser: User | null;
    setAuthUser: Dispatch<SetStateAction<User | null>>;
}



export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);



    return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>;
}

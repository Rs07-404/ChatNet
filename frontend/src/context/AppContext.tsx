import React, { createContext, ReactNode, SetStateAction, useContext, useState } from "react";

export const AppContext = createContext<{
    showAddConversationBox: boolean | null,
    setShowAddConversationBox: React.Dispatch<SetStateAction<boolean>>;
} | undefined>(undefined );

export const useAppContext = () => {
    const context = useContext(AppContext);
    if(!context){
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
}

export const AppContextProvider = ({children}: {children: ReactNode}) => {
    const [ showAddConversationBox, setShowAddConversationBox ] = useState<boolean>(false);
    return (
        <AppContext.Provider value={{ showAddConversationBox, setShowAddConversationBox }}>
            {children}
        </AppContext.Provider>
    )
}
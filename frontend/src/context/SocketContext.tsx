import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io, { Socket } from "socket.io-client";


export const useSocketContext = () => {
    const context = useContext(SocketContext);
    if(!context){
        throw new Error("useAuthContext must be used within an AuthContextProvider");
    }
    return context;
}

export const SocketContext = createContext<{socket: Socket | null, onlineusers: any}>({socket: null, onlineusers: []});

export const SocketContextProvider = ({children}) => {
    const [socket, setSoket] = useState<Socket | null>(null);
    const [onlineusers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(()=>{
        if(authUser){
            const socket = io("http://localhost:5000",{
                query: {
                    userId: authUser._id,
                }
            });
            setSoket(socket);

            socket.on("getOnlineUsers", (users)=>{
                setOnlineUsers(users);
            })

            return ()=>{
                socket.close();
            }
        }else{
            if(socket){
                socket.close();
                setSoket(null);
            }
        }
    },[authUser])
    return(
        <SocketContext.Provider value={{socket, onlineusers}}>
            {children}
        </SocketContext.Provider>
    )
}
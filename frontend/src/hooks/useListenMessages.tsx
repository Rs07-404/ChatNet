import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/incommingChat.mp3"

const sound = new Audio(notificationSound);

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            if(newMessage.senderId == selectedConversation?._id){
                sound.play();
                setMessages([...messages, newMessage]);
            }
        })

        return (() => {socket?.off("newMessage");});
    }, [socket, setMessages, messages])
}

export default useListenMessages;
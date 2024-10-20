import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import UserAvatar from "../Conversations/Conversation/Avatar";
import MessageInput from "../MessageInput/MessageInput";
import Messages from "../Messages/Messages";
import DefaultMessageScreen from "./DefaultMessageScreen";
import { useSocketContext } from "../../context/SocketContext";
import { useAppContext } from "../../context/AppContext";

export const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const { onlineusers } = useSocketContext();
    const { screenWidth } = useAppContext();
    useEffect(()=>{

        const HideMessageBox = (e) => {
            if(screenWidth <= 850){
                e.preventDefault();
                setSelectedConversation(null);
            }
            console.log(e);
        }

        if(screenWidth <= 850 && selectedConversation) {
            window.addEventListener('popstate', HideMessageBox);
            window.history.pushState(null, '', window.location.href);
        }

        return () => {
            window.removeEventListener('popstate', HideMessageBox);
        }
    },[])

    return (selectedConversation ? <div className="messageArea">
     <div className="messageHeader">
         <div className="conversation">
             <UserAvatar name={selectedConversation.fullName} profilepic={selectedConversation.profilePic} size={32} isOnline={onlineusers.includes(selectedConversation._id)}  />
             <div className="nameArea">{selectedConversation.fullName}</div>
     </div>
         </div>
         <Messages />
         <MessageInput />
     </div> : <DefaultMessageScreen /> )
}
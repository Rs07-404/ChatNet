import useConversation from "../../zustand/useConversation";
import UserAvatar from "../Conversations/Conversation/Avatar";
import MessageInput from "../MessageInput/MessageInput";
import Messages from "../Messages/Messages";
import DefaultMessageScreen from "./DefaultMessageScreen";

export const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();
        
       return (selectedConversation ? <div className="messageArea">
        <div className="messageHeader">
            <div className="conversation">
                <UserAvatar name={selectedConversation.fullName} profilepic={selectedConversation.profilePic} />
                <div className="nameArea">{selectedConversation.fullName}</div>
        </div>
            </div>
            <Messages />
            <MessageInput />
        </div> : <DefaultMessageScreen /> )
}
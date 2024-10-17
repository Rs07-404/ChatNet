import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const isMessageReceived = (message.senderId === selectedConversation?._id);
    return(
        isMessageReceived?
        <div className="message message-recieved"><div className="messageContent">{message.message}</div><div className="messageTime">15:30</div></div>
        :<div className="message message-sent"><div className="messageContent">{message.message}</div><div className="messageTime">15:30</div></div>
    )
}

export default Message;
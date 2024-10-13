import Conversation from "../Conversations/Conversation/Conversation";
import MessageInput from "../MessageInput/MessageInput";
import Messages from "../Messages/Messages";

const MessageContainer = () => {
    return (
        <div className="messageArea">
            <div className="messageHeader">
                <Conversation />
            </div>
            <Messages />
            <MessageInput />
        </div>
    )
}

export default MessageContainer;
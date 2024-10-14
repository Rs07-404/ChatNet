import { IoSend } from "react-icons/io5";

const MessageInput = () => {
    return (
        <div className="messageInput"><input type="text" placeholder="Type a message..." className="inputForm" /><IoSend className="message-send-button"/></div>
    )
}

export default MessageInput;
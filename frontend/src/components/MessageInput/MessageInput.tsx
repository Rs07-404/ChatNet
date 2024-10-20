import { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";

const MessageInput = () => {
    const [inputMessage, setInputMessage] = useState("");
    const { sendMessage } = useSendMessage()
    const handleChange = (e) => {
        setInputMessage(e.target.value);
    }

    const handleSendMessage = async(e) => {
        e.preventDefault();
        try {
            if(!inputMessage){
                return;
            }else{
                await sendMessage(inputMessage);
                setInputMessage("");
            }
        } catch (error:any) {
            toast.error(error.message);
        }
    }
    return (
        <div className="messageInput">
            <form className="messageInputArea" onSubmit={handleSendMessage}>
            <input type="text" placeholder="Type a message..." value={inputMessage} onChange={handleChange} className="inputForm" />
            <IoSend className="message-send-button" onClick={handleSendMessage}/>
            </form>
        </div>
    )
}

export default MessageInput;
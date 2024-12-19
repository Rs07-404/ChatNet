import formatMessage from "../../services/formatMessage";
import useConversation from "../../zustand/useConversation";

const extractTime = (dateString):String => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
}

const Message = ({message}) => {
    const { selectedConversation } = useConversation();
    const formattedMessage = formatMessage(message.message);
    const isMessageReceived = (message.senderId === selectedConversation?._id);
    const className = isMessageReceived ? "message message-recieved" : "message message-sent";
    const time = extractTime(message.createdAt);
    return(
        <div className={ className }><div className="messageContent" dangerouslySetInnerHTML={{ __html: formattedMessage }}></div><div className="messageTime">{time}</div></div>
    )
}

export default Message;
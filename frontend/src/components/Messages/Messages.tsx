import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    return (
        <div className="messageBox">
            {!loading && messages.length > 0 && messages.map((message)=>{
                return <Message key={message._id} message={message} />
            })}
            {!loading && messages.length === 0 && (
                <p>Send a message to start the conversation</p>
            )}
        </div>
    )
}

export default Messages;
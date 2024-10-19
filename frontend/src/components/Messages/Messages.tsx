import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageLoadingSkeleton from "./MessageLoadingSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const messageBoxRef = useRef<HTMLDivElement | null>(null);
    useEffect(()=>{
        setTimeout(()=>{
            if(messageBoxRef.current) messageBoxRef.current.scrollTop = messageBoxRef.current?.scrollHeight;
        }, 500);
    },[messages])

    return (
        <div className="messageBox" ref={messageBoxRef}>
            {loading && (<div className="singleChatArea"><MessageLoadingSkeleton /></div>)}
            {!loading && messages.length > 0 && messages.map((message)=>{
                return <div className="singleChatArea" key={message._id}><Message message={message} /></div>
            })}
            {!loading && messages.length === 0 && (
                <p>Send a message to start the conversation</p>
            )}
        </div>
    )
}

export default Messages;
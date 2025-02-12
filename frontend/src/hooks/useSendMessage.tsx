import { useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [ loading, setLoading ] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        try {
            setLoading(true);
            const response = await fetch(`/api/messages/send/${selectedConversation?._id}`,{
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({message: message})
            });
            const data = await response.json();
            if(data.error){
                throw new Error(data.error);
            }
            setMessages([...messages, data])
            
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {sendMessage, loading};
}

export default useSendMessage;
import { create } from "zustand";
import { User } from "../types/User.type";
import { Message } from "../types/Message.type";

interface ConversationStore{
    selectedConversation: User | null,
    setSelectedConversation: (selectedConversation: User | null)=> void,
    messages: Message[] | [],
    setMessages: (messages: Message[] | [])=> void,
}

const useConversation = create<ConversationStore>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;
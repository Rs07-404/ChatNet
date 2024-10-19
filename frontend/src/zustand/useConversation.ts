import { create } from "zustand";
import { User } from "../types/User.type";
import { Message } from "../types/Message.type";

interface ConversationStore{
    conversations: User[] | [],
    setConversations: (conversations: User[] | [])=> void,
    filteredConversations: User[] | [],
    setFilteredConversations: (conversations: User[] | []) => void,
    selectedConversation: User | null,
    setSelectedConversation: (selectedConversation: User | null)=> void,
    messages: Message[] | [],
    setMessages: (messages: Message[] | [])=> void,
}

const useConversation = create<ConversationStore>((set, get) => ({
    conversations: [],
    setConversations: (conversations) => set({conversations}),
    filteredConversations: [],
    setFilteredConversations: (filteredConversations) => set({filteredConversations}),
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;
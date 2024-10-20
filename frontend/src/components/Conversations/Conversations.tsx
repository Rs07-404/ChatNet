import { useAppContext } from "../../context/AppContext";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";
import Conversation from "./Conversation/Conversation";

const Conversations = () => {;
    const { loading } = useGetConversations();
    const { conversations, filteredConversations} = useConversation();
    const { setShowAddConversationBox } = useAppContext();
    return (
        <div className="conversation_list">
            {filteredConversations.length > 0 &&
            (filteredConversations.map((contact) => {
                // let lastIdx = index === contacts.length - 1;
                return (<><Conversation key={contact._id} contact={contact} /></>)
            }))}
            {filteredConversations.length < 1 && conversations.length > 0 && (conversations.map((contact) => {
                // let lastIdx = index === contacts.length - 1;
                return (<><Conversation key={contact._id} contact={contact} /></>)
            }))}
            {loading ? "Loading...." : !(conversations.length > 0) ? <div className="startConversationBox"><div className="addNewConversationButton" onClick={()=>{setShowAddConversationBox(true)}}>➕</div><div className="todoMessage">Create a Conversation and start chatting</div></div> : ""}
        </div>
    );
}

export default Conversations;
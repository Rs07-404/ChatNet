import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation/Conversation";

const Conversations = () => {;
    const { loading, contacts } = useGetConversations();
    return (
        <div className="conversation_list">
            {(contacts.map((contact) => {
                // let lastIdx = index === contacts.length - 1;
                return (<><Conversation key={contact._id} contact={contact} /></>)
            }))}
            {loading ? "Loading...." : !(contacts.length > 0) ? <div className="startConversationBox"><div className="addNewConversationButton">➕</div><div className="todoMessage">Create a Conversation and start chatting</div></div> : ""}
        </div>
    );
}

export default Conversations;
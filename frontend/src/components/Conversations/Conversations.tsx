import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation/Conversation";

const Conversations = () => {;
    const { loading, contacts } = useGetConversations();
    return (
        <div className="conversation_list">
            {contacts ? (contacts.map((contact, index) => {
                // let lastIdx = index === contacts.length - 1;
                return (<><Conversation key={contact._id} contact={contact} /></>)
            })): <div className="startConversationBox"><div className="addNewConversationButton">➕</div></div>
            }
            {loading ? "Loading...." : null}
        </div>
    );
}

export default Conversations;
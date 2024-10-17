import useConversation from "../../../zustand/useConversation";
import UserAvatar from "./Avatar";

const Conversation = ({contact}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === contact._id;
    return (
        <>
        <div className={isSelected ? "conversation selected" : "conversation"} onClick={()=>{setSelectedConversation(contact)}}>
                <UserAvatar name={contact.fullName} profilepic={contact.profilePic} size={32} />
                <div className="nameArea">{contact.fullName}</div>
        </div>
        </>
    )
}

export default Conversation;
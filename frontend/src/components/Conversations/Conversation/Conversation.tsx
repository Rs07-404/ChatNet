import UserAvatar from "./Avatar";

const Conversation = ({contact}) => {
    return (
        <>
        <div className="conversation">
                <UserAvatar name={contact.fullName} profilepic={contact.profilePic} />
                <div className="nameArea">{contact.fullName}</div>
        </div>
        </>
    )
}

export default Conversation;
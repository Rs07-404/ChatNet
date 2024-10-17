import { useAuthContext } from "../../context/AuthContext";

const DefaultMessageScreen = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="messageArea centreContent">
            <div className="MessageGreet">Welcome 👋 {authUser?.fullName} !</div>
            <div className="todoMessage">Select a chat to start messaging on <div className="brand">ChatNet</div></div>
            <div className="appIcon"><img src="/designicon/chatNet64x64.png" alt="" /></div>
        </div>
    )
};

export default DefaultMessageScreen
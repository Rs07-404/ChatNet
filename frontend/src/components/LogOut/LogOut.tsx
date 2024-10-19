import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../hooks/LogOutHook";
import { useAppContext } from "../../context/AppContext";

const LogOut = () => {
    const { loading, logout } = useLogout();
    const { setShowAddConversationBox } = useAppContext();
    return (
        <div className="logoutArea">
            {!loading ? (<div className="logOutButtonArea" onClick={logout}><BiLogOut className="logButton" /> </div>):(<div className="logOutButtonArea">Loading...</div> )}
            <div className="addNewConversationButton" onClick={()=>{setShowAddConversationBox(true)}}>➕</div>
        </div>
    );
}

export default LogOut;
import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../hooks/LogOutHook";

const LogOut = () => {
    const { loading, logout } = useLogout();
    return (
        <div className="logoutArea">
            {!loading ? (<div className="logOutButtonArea" onClick={logout}><BiLogOut className="logButton" /> </div>):(<div className="logOutButtonArea">Loading...</div> )}
            <div className="addNewConversationButton">➕</div>
        </div>
    );
}

export default LogOut;
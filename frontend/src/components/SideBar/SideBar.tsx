import { useAuthContext } from "../../context/AuthContext";
import Conversations from "../Conversations/Conversations";
import LogOut from "../LogOut/LogOut";
import SearchInput from "../SearchInput/SearchInput";

const SideBar = () => {
    const { authUser } = useAuthContext();
    return(
        <div className="sideBar">
            <SearchInput />
            <div className="divider"></div>
            <Conversations key={authUser? String(authUser._id): "000"} />
            <LogOut />
        </div>
    )
}

export default SideBar;
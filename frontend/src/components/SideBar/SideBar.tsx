import Conversations from "../Conversations/Conversations";
import LogOut from "../LogOut/LogOut";
import SearchInput from "../SearchInput/SearchInput";

const SideBar = () => {
    return(
        <div className="sideBar">
            <SearchInput />
            <div className="divider"></div>
            <Conversations />
            <LogOut />
        </div>
    )
}

export default SideBar;
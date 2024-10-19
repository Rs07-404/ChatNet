import AddConversation from '../../components/AddConversationBox/AddConversationBox.tsx';
import {MessageContainer} from '../../components/MessageContainer/MessageContainer.tsx';
import SideBar from '../../components/SideBar/SideBar.tsx';
import { AppContextProvider } from '../../context/AppContext.tsx';

const Home = () => {
    return (
        <div className="chatBox">
            <AppContextProvider>
                <AddConversation />
                <SideBar />
                <MessageContainer />
            </AppContextProvider>
        </div>
    );
}

export default Home;
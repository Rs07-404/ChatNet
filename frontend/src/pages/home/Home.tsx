import {MessageContainer, DefaultMessageScreen} from '../../components/MessageContainer/MessageContainer.tsx';
import SideBar from '../../components/SideBar/SideBar.tsx';

const Home = () => {
    let noChatSelected = true
    return (
        <div className="chatBox">
            <SideBar />
            {(noChatSelected)?<DefaultMessageScreen />:<MessageContainer />}
        </div>
    );
}

export default Home;
import {MessageContainer} from '../../components/MessageContainer/MessageContainer.tsx';
import SideBar from '../../components/SideBar/SideBar.tsx';

const Home = () => {
    return (
        <div className="chatBox">
            <SideBar />
            <MessageContainer />
        </div>
    );
}

export default Home;
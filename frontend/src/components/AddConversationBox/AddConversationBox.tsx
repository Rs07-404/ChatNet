import { useState } from "react";
import { useCreateConversation } from "../../hooks/useCreateConversation";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddConversation = () => {
    const { showAddConversationBox, setShowAddConversationBox } = useAppContext();
    const [inputs, setInputs] = useState({
        username: ''
    });

    const {loading, createConversation} = useCreateConversation();

    const changeHandler = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const username = inputs.username;
        if(username){
            await createConversation({username, setShowAddConversationBox});
        }else{
            toast.error("Enter a valid username");
        }
        setInputs({username: ''});
    }

    const handleBack = (e) => {
        e.preventDefault();
        setShowAddConversationBox(false);
    }

    const className = showAddConversationBox? "addNewfloatBox": "disabled";
    return (
        <div className={className}>
        <div className="loginArea">
            <div className="loginBox">
                <div className="headText">Create Conversation</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label">
                            Username
                        </label>
                        <input type="text" name="username" placeholder="Enter Username" className="inputForm" value={inputs.username} onChange={changeHandler} />
                    </div>
                    <div>
                        <button className="btn">{!loading ? "Add" : "Loading..."}</button>
                    </div>
                    <div>
                        <a onClick={handleBack} className="link">Go Back</a>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default AddConversation;
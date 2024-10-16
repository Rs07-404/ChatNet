import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/LoginHook";

const AddConversation = () => {
    const [inputs, setInputs] = useState({
        username: ''
    });

    const {loading, createConversation} = useLogin();

    const changeHandler = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();
        await createConversation(inputs);
    }
    return (
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
                        <button className="btn">{!loading ? "Add" : "Loading"}</button>
                    </div>
                    <div>
                        <Link to={"/"} className="link">Go Back</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddConversation;
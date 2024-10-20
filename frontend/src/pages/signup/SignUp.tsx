import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/SignUpHook";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const {loading, signUp} = useSignUp();

    const changeHandler = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();
        await signUp(inputs);
    }

    return (
        <div className="loginArea">
            <div className="loginBox">
                <div className="headText">Sign Up <span className="brand">ChatNet</span></div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label">
                            Full Name
                        </label>
                        <input name="fullName" type="text" placeholder="Enter Full Name" className="inputForm" value={inputs.fullName} onChange={changeHandler} />
                    </div>
                    <div>
                        <label className="label">
                            Gender
                        </label>
                        <select name="gender" value={inputs.gender} className="inputForm" onChange={changeHandler}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            Username
                        </label>
                        <input name="username" type="text" placeholder="Enter Username" className="inputForm" value={inputs.username} onChange={changeHandler} />
                    </div>
                    <div>
                        <label className="label">
                            Password
                        </label>
                        <input name="password" type="password" placeholder="Enter Password" className="inputForm" value={inputs.password} onChange={changeHandler} />
                    </div>
                    <div>
                        <label className="label">
                            Confirm Password
                        </label>
                        <input name="confirmPassword" type="password" placeholder="Enter Same Password" className="inputForm" value={inputs.confirmPassword} onChange={changeHandler} />
                    </div>
                    <div>
                        <button className="btn">{loading? "loading...":"Sign Up"}</button>
                    </div>
                    <div>
                        <Link to={"/login"} className="link">Already have an account ?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
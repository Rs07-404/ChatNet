const SignUp = () => {
    return (
        <div className="loginArea">
            <div className="loginBox">
                <div className="headText">Sign Up <span className="brand">ChatNet</span></div>
                <form>
                    <div>
                        <label className="label">
                            Full Name
                        </label>
                        <input type="text" placeholder="Enter Full Name" className="inputForm" />
                    </div>
                    <div>
                        <label className="label">
                            Gender
                        </label>
                        <select value="Nonez" className="inputForm">
                            <option value="None">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            Username
                        </label>
                        <input type="text" placeholder="Enter Username" className="inputForm" />
                    </div>
                    <div>
                        <label className="label">
                            Password
                        </label>
                        <input type="password" placeholder="Enter Password" className="inputForm" />
                    </div>
                    <div>
                        <label className="label">
                            Confirm Password
                        </label>
                        <input type="password" placeholder="Enter Same Password" className="inputForm" />
                    </div>
                    <div>
                        <button className="btn">Sign Up</button>
                    </div>
                    <div>
                        <a href="#" className="link">Already have an account ?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="loginArea">
            <div className="loginBox">
                <div className="headText">Login <span className="brand">ChatNet</span></div>
                <form>
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
                        <button className="btn">Login</button>
                    </div>
                    <div>
                        <Link to={"/signup"} className="link">Don't have an account ?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
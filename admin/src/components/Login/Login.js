import "./Login.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../../store/actions/User";

const Login = () => {
    const USER = useSelector((state) => state.LogIn);
    const dispatch = useDispatch();

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [invUser, setInvUser] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let userInfo = {
            user,
            password,
        };
        // let expDate = ;

        localStorage.setItem(
            "iROkloginExp",
            new Date().setMinutes(new Date().getMinutes() + 7200)
        );
        dispatch(LogIn(userInfo));

        if (USER.status === 401) {
            setTimeout(() => {
                setInvUser(true);
            }, 500);
        } else {
            setTimeout(() => {
                console.log("Processing");
            }, 500);
        }
    };
    return (
        <div id="login">
            <form>
                <h4 id="formlabel">Login</h4>

                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setUser(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <p
                    id="warn"
                    style={{
                        visibility: invUser === true ? "visible" : "hidden",
                    }}
                >
                    * Incorrect email or password
                </p>

                {!password ? (
                    <button
                        id="loginbtn"
                        style={{ backgroundColor: "rgba(217, 52, 77, 0.358)" }}
                        onClick={(e) => e.preventDefault()}
                    >
                        Login
                    </button>
                ) : (
                    <button id="loginbtn" type="submit" onClick={handleSubmit}>
                        Login
                    </button>
                )}
                <div id="refarebox">
                    <p>
                        Don't have an account ?
                        <span
                            onClick={() => window.location.replace("/register")}
                        >
                            sign up
                        </span>
                    </p>
                    <p>
                        <span>Forgot password</span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;

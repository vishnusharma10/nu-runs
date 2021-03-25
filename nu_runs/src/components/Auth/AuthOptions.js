import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";
import axios from "axios";

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push("/get-started");
    const login = () => history.push("/login");
    const logout = async() => {
        setUserData({
            token: undefined,
            user: undefined
        });

        axios.get("http://localhost:8000/auth/logout");
        history.push("/login")
    };

    return (
        <nav className="auth-options">
            {userData.user ? (
                <button className="btn btn-primary mr-2" onClick={logout}>Logout</button>
            ) : (
                <>
                <button className="btn btn-primary mr-2" onClick={register}>Sign Up</button>
                <button className="btn btn-primary mr-2" onClick={login}>Login</button>
                </>
            )}
        </nav>
    )
}

export default AuthOptions;
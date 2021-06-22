import React from 'react';
import { NavLink } from "react-router-dom"; 
import Login from "./login"


//
const Auth = (props) => {
    return (
        <div>
            {/* изменили после логинизации */}
            {/* {props.isAuth ? props.login
                : <NavLink to={"/Login"}>
                    <Login />
                    </NavLink>} */}

            {props.isAuth
                ? <div>{props.login} <button onClick={props.LogoutThunkCreator}>
                                            Log out</button> </div>
                : <NavLink to={"/login"}> <Login /> </NavLink>}
            
        </div>
    );
};

export default Auth;
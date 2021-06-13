import React from 'react';
import { NavLink } from "react-router-dom"; 
import Login from "./login"


//
const Auth = (props) => {
    return (
        <div>
            {props.isAuth ? props.login
                : <NavLink to={"/Login"}>
                    <Login />
                    </NavLink>}
            
        </div>
    );
};

export default Auth;
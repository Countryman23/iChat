import React from 'react';
import ModCSS from "./Authorization.module.css"; //Модифицируем наши стили с помощью .module
import { NavLink } from "react-router-dom"; 
import Login from "./login"


//ниже JSX коде в котором находится HTML разметка
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

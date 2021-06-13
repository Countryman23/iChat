import React from 'react';
import ModCSS from "./Authorization.module.css"; //Модифицируем наши стили с помощью .module
import ReduxLoginForm from "../../form/loginForm"

//ниже JSX коде в котором находится HTML разметка
const Login = (props) => {
    
    const onSubmitHandl = (formData) => {
        console(formData);
    }

    return (
        <div>
            <ReduxLoginForm onSubmit={onSubmitHandl} />
        </div>
    );
};

export default Login;

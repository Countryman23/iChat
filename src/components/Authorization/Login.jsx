import React from 'react';
// import ModCSS from "./Authorization.module.css"; //Модифицируем наши стили с помощью .module
import ReduxLoginForm from "../../form/loginForm"

//ниже JSX коде в котором находится HTML разметка
const Login = (props) => {

        const onSubmitHandl = (formData) => {
                console.log(formData); //formData, все значения из формы
            }

            // вызываем другой onSubmit и получаем из формы LoginForm параметры handleSubmit
    return (
        <div>
        <h3>LOGIN</h3>
            <ReduxLoginForm onSubmit={onSubmitHandl} /> 
        </div>
    );
};

export default Login;

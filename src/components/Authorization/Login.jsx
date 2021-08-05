import React from 'react';
// import ModCSS from "./Authorization.module.css"; //Модифицируем наши стили с помощью .module
import ReduxLoginForm from "../../form/loginForm"
import { connect } from 'react-redux';
import { LoginThunkCreator } from '../../redux/auth-reducer';
import { Redirect } from "react-router";

//ниже JSX коде в котором находится HTML разметка
const Login = (props) => {

    const onSubmitHandl = (formData) => {
            // console.log(formData); //formData, все значения из формы
        // изменяем под логинизацию
        props.LoginThunkCreator(formData.email, formData.password, formData.rememberMe);
        } // тут мы из пропсов вызываем LoginThunkCreator. Он приходит через connect.
        // Но connect вызывает не LoginThunkCreator, а его диспатч authProfileThunk

    if (props.isAuth) {
        return <Redirect to = "/ProfileInfoContainer" />
    }
            
            // вызываем другой onSubmit и получаем из формы LoginForm параметры handleSubmit
    return (
        <div>
        <h3>LOGIN</h3>
            <ReduxLoginForm onSubmit={onSubmitHandl} /> 
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

// export default Login;
// HOC для логинизации. apiLogin прийдёт к нам в пропсы в Login
export default connect (mapStateToProps, {LoginThunkCreator}) (Login);

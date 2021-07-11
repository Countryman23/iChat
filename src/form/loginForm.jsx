import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {requiredField, maxLengthCreator} from "../form/validators";
import {Input} from "../form/formsControls"
import ModCSS from "./formStyle.module.css"; //Модифицируем наши стили с помощью .module

// вынесли в переменную. так как если сразу добавить в validate, то это вызывает зависание
const maxLength20 = maxLengthCreator(20);

//ниже JSX коде в котором находится HTML разметка
// Field это специальные компоненты для form
// handleSubmit получаем из стандартных свойств формы, из reduxForm. Этим мы говорим, что хотим доверить обработку onSubmit
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="email" 
                    placeholder={"Email"} 
                    component={Input}
                    validate={[requiredField, maxLength20]} /> 
            </div>
            <div>
                <Field name="password" 
                    placeholder={"Password"} 
                    component={Input}
                    validate={[requiredField, maxLength20]} />
            </div>
            <div>
                <Field name="rememberMe" 
                    type={"checkbox"} 
                    component={"input"} /> Remember
            </div>
                {/* тут мы говорим, если у нас есть props.error тогда покажи {props.error} */}
                {error && <div className={ModCSS.loginFormError}>
                    {error}
                </div>
                }
            <div>
                <button> OK </button>
            </div>
        </form>
    );
};

//HOC
const ReduxLoginForm = reduxForm ({
    form: "login" //уникальное имя для формы
}) (LoginForm)

export default ReduxLoginForm;

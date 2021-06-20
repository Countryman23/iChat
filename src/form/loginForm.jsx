import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {requiredField, maxLengthCreator} from "../form/validators";
import {Input} from "../form/formsControls"

// вынесли в переменную. так как если сразу добавить в validate, то это вызывает зависание
const maxLength10 = maxLengthCreator(10);

//ниже JSX коде в котором находится HTML разметка
// Field это специальные компоненты для form
// handleSubmit получаем из стандартных свойств формы, из reduxForm. Этим мы говорим, что хотим доверить обработку onSubmit
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" 
                    placeholder={"Login"} 
                    component={Input}
                    validate={[requiredField, maxLength10]} /> 
            </div>
            <div>
                <Field name="password" 
                    placeholder={"Password"} 
                    component={Input}
                    validate={[requiredField, maxLength10]} />
            </div>
            <div>
                <Field name="remember" 
                    type={"checkbox"} 
                    component={"input"} /> Remember
            </div>
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

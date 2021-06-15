import React from 'react';
import { reduxForm, Field } from 'redux-form';

//ниже JSX коде в котором находится HTML разметка
// Field это специальные компоненты для form
// handleSubmit получаем из стандартных свойств формы, из reduxForm. Этим мы говорим, что хотим доверить обработку onSubmit
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" placeholder={"Login"} component={"input"} /> 
            </div>
            <div>
                <Field name="password" placeholder={"Password"} component={"input"} />
            </div>
            <div>
                <Field name="remember" type={"checkbox"} component={"input"} /> Remember
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

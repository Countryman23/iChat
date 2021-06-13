import React from 'react';
import { reduxForm, Field } from 'redux-form';

//
// 
const LoginForm = (props) => {
    return (
        <div>             
            <h3>LOGIN</h3>
            <form onSubmit={props.handleSabmit}>
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
        </div>
    );
};

//HOC
const ReduxLoginForm = reduxForm ({
    form: "login", //
}) (LoginForm)

export default ReduxLoginForm;
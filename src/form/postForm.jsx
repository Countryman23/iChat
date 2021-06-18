import React from 'react';
import { reduxForm, Field } from 'redux-form';

//ниже JSX коде в котором находится HTML разметка
// Field это специальные компоненты для form
// handleSubmit получаем из стандартных свойств формы, из reduxForm. Этим мы говорим, что хотим доверить обработку onSubmit
const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newTextMessage" placeholder={"add your text message"} component={"textarea"} /> 
            </div>

                <div>
                    <button> Add message </button>
                </div>
        </form>
    );
};

//HOC
const ReduxMessageForm = reduxForm ({
    form: "message" //уникальное имя для формы
}) (MessageForm)

export default ReduxMessageForm;

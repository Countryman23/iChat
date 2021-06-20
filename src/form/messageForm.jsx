import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {requiredField, maxLengthCreator} from "../form/validators";
import {Textarea} from "../form/formsControls"

// вынесли в переменную. так как если сразу добавить в validate, то это вызывает зависание
const maxLength100 = maxLengthCreator(100);

//ниже JSX коде в котором находится HTML разметка
// Field это специальные компоненты для form
// handleSubmit получаем из стандартных свойств формы, из reduxForm. Этим мы говорим, что хотим доверить обработку onSubmit
const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newTextMessage" 
                placeholder={"add your text message"} 
                // заменили потомучто, когда указываем свои кастомные элементы, пишем без кавычек
                        // component={"textarea"}
                        component={Textarea}
                        validate={[requiredField, maxLength100]} />
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

import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {requiredField, maxLengthCreator} from "../form/validators";
import {Textarea} from "../form/formsControls"

// вынесли в переменную. так как если сразу добавить в validate, то это вызывает зависание
const maxLength10 = maxLengthCreator(10);

//ниже JSX коде в котором находится HTML разметка
// Field это специальные компоненты для form
// handleSubmit получаем из стандартных свойств формы, из reduxForm. Этим мы говорим, что хотим доверить обработку onSubmit
const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newTextPost" 
                        placeholder={"add your text post"} 
                        // заменили потомучто, когда указываем свои кастомные элементы, пишем без кавычек
                        // component={"textarea"}
                        component={Textarea}
                        validate={[requiredField, maxLength10]} /> 
            </div>
                <div>
                    <button> Add post </button>
                </div>
        </form>
    );
};

//HOC
const ReduxPostForm = reduxForm ({
    form: "post" //уникальное имя для формы
}) (PostForm)

export default ReduxPostForm;

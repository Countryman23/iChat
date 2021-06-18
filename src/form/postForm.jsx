import React from 'react';
import { reduxForm, Field } from 'redux-form';

//ниже JSX коде в котором находится HTML разметка
// Field это специальные компоненты для form
// handleSubmit получаем из стандартных свойств формы, из reduxForm. Этим мы говорим, что хотим доверить обработку onSubmit
const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newTextPost" placeholder={"add your text post"} component={"textarea"} /> 
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

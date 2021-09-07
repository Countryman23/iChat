import React from 'react';
import { reduxForm, Field } from 'redux-form';

const DescriptionForm = (props) => {
    return <form onSubmit={props.handleSubmit} >
        <div>
            <button> save </button>
        </div>
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Checkbox)}
        </div>
        <div>
            <b>My skylls</b>: {createField("My skylls", "mySkylls", [], TextareaForm)}
        </div>
        <div>
            <b>About me</b>: {createField("About me", "amoutMe", [], TextareaForm)}
        </div>
    </form>
}

const createField = (placeholder, name, validators, component) => (
    <div>
        <Field placeholder={placeholder}
                name={name}
                validators={validators}
                component={component} />
    </div>
)

const Input = () => {
    return <div>
        <input />
    </div>
}

const Checkbox = () => {
    return <div>
        <input type="checkbox" />
    </div>
}

const TextareaForm = () => {
    return <div>
        <textarea />
    </div>
}

const DescriptionFormReduxForm = reduxForm({form: "edit-form"})(DescriptionForm)

export default DescriptionFormReduxForm

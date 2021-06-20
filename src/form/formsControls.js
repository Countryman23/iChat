import React from "react";
import ModCSS from "./formStyle.module.css"; //Модифицируем наши стили с помощью .module

// рефакторим для того что бы получилось сделать форму логина
// // создаем кастомную компоненту textarea для отображения пользователю информации об валидности полей
// export const Textarea = ({input, meta, ...props}) => { //Применяем REST оператор. этим мы говорим. 
//     //что хотим достать деструктуризацией input и meta, 
//     //а в ...props будет всё остальное кроме input и meta
    
// const showError = meta.touched && meta.error; // meta.touched и meta.error стандартно из формы

//     return (
//         // свойство error сидит в meta
//         // (showError ? ModCSS.error : " ") Тут говорим. если ошибка есть покажи showError и отобрази ModCSS.error, а иначе " "
//         <div className={ModCSS.form + " " + (showError ? ModCSS.error : " ")}>
//             {/* деструктуризацируем input и props */} 
//             <textarea {...input} {...props} /> 
//             <div>
//                 {/* если поле Textarea было тронуто и не выполнено условие, тогда показываем span */}
//             { showError && <span>{ meta.error }</span> }
//             </div>
//         </div>
//     )
// }

export const FormControl = ({input, meta, child, ...props}) => { // добавили child

const showError = meta.touched && meta.error;

    return ( // изменили textarea на { props.children } 
        <div className={ModCSS.form + " " + (showError ? ModCSS.error : " ")}>
             { props.children } 
            <div>
               { showError && <span>{ meta.error }</span> }
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props; //...restProps остаточные пропсы
    return <FormControl {...props} > <textarea {...input} {...restProps} /> </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} > <input {...input} {...restProps} /> </FormControl>
}
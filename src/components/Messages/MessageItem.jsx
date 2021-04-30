import React from 'react';
// import ModCSS from "./Messages.module.css"; //Модифицируем наши стили с помощью .module

// Новая компонента с пропсами для сообщений
const MessageItem = (props) => {
    let path = "/Messages/" + props.id;
    return <div>{props.item}</div>
}

export default MessageItem;

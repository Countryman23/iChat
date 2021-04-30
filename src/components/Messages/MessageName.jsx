import React from 'react';
import ModCSS from "./Messages.module.css"; //Модифицируем наши стили с помощью .module
import { NavLink } from "react-router-dom"; // импорт с фигурными скобками из-за экспорта не по дефолту

// Новая компонента с пропсами для пользователей
const MessageName = (props) => {
    let path = "/Messages/" + props.id;
    return <div className={ModCSS.message}>
            <NavLink to={path} activeClassName={ModCSS.activeLink}>{props.name}</NavLink>
        </div>
}

export default MessageName;
import React from 'react';
import ModifyCSS from "./Authorization.module.css"; //Модифицируем наши стили с помощью .module

//ниже JSX коде в котором находится HTML разметка
const AuthorizationItem = () => {
    //добавляем к HTML разметке JS код. Было className="item", стало {ModifyCSS.item}
    return (
        <div>
            <div className={ModifyCSS.item}> 
                <a>Login</a>
            </div>
            <div className={ModifyCSS.item}>
                <a>Registration</a>
            </div>
        </div>
    );
};
// экспортируем для Authorizatio.jsx
export default AuthorizationItem;

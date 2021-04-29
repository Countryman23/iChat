import React from 'react';
import ModCSS from "./Authorization.module.css"; //Модифицируем наши стили с помощью .module

//ниже JSX коде в котором находится HTML разметка
const Authorization = () => {
    return (
        // добавляем к HTML разметке JS код. Было className="item", стало {ModCSS.item}
        // применяем шаблонные строки для конкатенации выражения {`${} ${}`}
        <div>
            <div className={`${ModCSS.item} ${ModCSS.active}`}>
                Login
            </div>
            <div className={ModCSS.item}>
                Registration
            </div>
        </div>
    );
};

export default Authorization;

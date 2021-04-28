import React from 'react';
import ModCSS from "./Groups.module.css"; //Модифицируем наши стили с помощью .module

const GroupsItem = () => {
    return (
        <div>
            <div className={ModCSS.item}>
                Chatterbox
            </div>
            <div className={ModCSS.item}>
                Messages
            </div>
        </div>
    );
};

export default GroupsItem;

import React from 'react';
import ModCSS from "./Messages.module.css"; //Модифицируем наши стили с помощью .module

const Messages = () => {
    return (
        <div>
            <div className={ModCSS.item}>
                Messages
            </div>
        </div>
    );
};

export default Messages;

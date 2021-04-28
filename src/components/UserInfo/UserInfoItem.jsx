import React from 'react';
import ModCSS from "./UserInfo.module.css"; //Модифицируем наши стили с помощью .module

const UserInfoItem = () => {
    return (
        <div>
            <div className={ModCSS.item}>
                ava
            </div>
            <div className={ModCSS.item}>
                Description
            </div>
        </div>
    );
};

export default UserInfoItem;

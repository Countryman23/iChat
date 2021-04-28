import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module

const ProfileItem = () => {
    return (
        <div>
            <div className={ModCSS.item}>
                User
            </div>
            <div className={ModCSS.item}>
                Statistics
            </div>
        </div>
    );
};

export default ProfileItem;

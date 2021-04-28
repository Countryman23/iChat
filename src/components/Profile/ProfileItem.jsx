import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module

const ProfileItem = () => {
    return (
        <div>
            <div className={ModCSS.item}>
                888
            </div>
            <div className={ModCSS.item}>
                888
            </div>
            <div className={ModCSS.item}>
                888
            </div>
        </div>
    );
};

export default ProfileItem;

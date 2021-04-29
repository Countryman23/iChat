import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module

const Profile = () => {
    return (
        <div>
            <div className={ModCSS.item}>
                ava
            </div>
            <div className={ModCSS.item}>
                Description
            </div>
            <div className={ModCSS.item}>
                Statistics
            </div>
        </div>
    );
};

export default Profile;

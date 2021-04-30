import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import ProfileInfo from './ProfileInfo';

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            
            <div className={ModCSS.item}>
                Statistics
            </div>
        </div>
    );
};

export default Profile;

import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module

const ProfileInfo = () => {
    return (
        <div>
            <div className={ModCSS.img}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU" />

            </div>
            <div className={ModCSS.item}>
                Description
            </div>
            
        </div>
    );
};

export default ProfileInfo;

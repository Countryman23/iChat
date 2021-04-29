import React from 'react';
import ModCSS from "./Navigation.module.css"; //Модифицируем наши стили с помощью .module
import Logo from "./../../logo.png";

const Navigation = () => {
    return (
        <div className={ModCSS.main}>
            <div className={ModCSS.logo}>
                <img src={Logo} alt="Logo" />
                <h1> Сообщество умных людей</h1>
            </div>
            <div>
                {/* для Route тут должны быть ссылки*/}
                <div>
                    <a href="Authorization">Authorization</a>
                </div>
                <div>
                    <a href="Profile">Profile</a>
                </div>
                    <a href="Messages">Messages</a>
                <div>
                    <a href="MyPosts">MyPosts</a>
                </div>

            </div>

        </div>
    );
};

export default Navigation;

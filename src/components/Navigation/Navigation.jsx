import React from 'react';
import ModCSS from "./Navigation.module.css"; //Модифицируем наши стили с помощью .module
import Logo from "./../../logo.png";
import { NavLink } from "react-router-dom"; // импорт с фигурными скобками из-за экспорта не по дефолту

const Navigation = () => {
    return (
        <div className={ModCSS.main}>
            <div className={ModCSS.logo}>
                <img src={Logo} alt="Logo" />
                <h1> Сообщество умных людей</h1>
            </div>
            <div>
                {/* для Route тут должны быть ссылки*/}
                <div className={ModCSS.item}>
                    {/* принудительно создали класс activeClassName(activeLink)*/}
                    {/* создали NavLink для обработки ссылок без перезагрузки всей страницы  */}
                    <NavLink to="/Authorization" activeClassName={ModCSS.activeLink}>Authorization</NavLink>
                </div>
                <div className={ModCSS.item}>
                    <NavLink to="/ProfileInfoContainer" activeClassName={ModCSS.activeLink}>Profile</NavLink>
                </div>
                <div className={ModCSS.item}>
                    <NavLink to="/Users" activeClassName={ModCSS.activeLink}>Users</NavLink>
                </div>
                <div className={ModCSS.item}>
                    <NavLink to="/Messages" activeClassName={ModCSS.activeLink}>Messages</NavLink>
                </div>
                
                <div className={ModCSS.item}>
                    <NavLink to="/Settings" activeClassName={ModCSS.activeLink}>Settings</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;

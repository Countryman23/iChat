import React from "react";
import Profile from "./components/Profile/Profile";
import Groups from "./components/Groups/Groups";
import UserInfo from "./components/UserInfo/UserInfo";
import MyPosts from "./components/MyPosts/MyPosts";
import Authorization from "./components/Authorization/Authorization";
import ModCSSapp from "./App.module.css"; //Модифицируем наши стили с помощью .module
import ModCSSmain from "./main.module.css"; //Модифицируем наши стили с помощью .module
import ModCSSc from "./content.module.css"; //Модифицируем наши стили с помощью .module
import Logo from "./logo.png"

//создали основную компоненту (это переменная, которая по факту функция)
const App = () => {
    return (
        <div className={ModCSSapp.appWrapper}>
            <div className={ModCSSmain.main}>
                <div className={ModCSSmain.logo}>
                    <img src={Logo} alt="Logo" />
                    <h1> Сообщество умных людей</h1>
                </div>
                <div className={ModCSSmain.authorization}>
                    {/* передаём сюда подкомпоненту */}
                    <a>Authorization</a>
                </div>
                <div className={ModCSSmain.profile}>
                    <a>Profile</a>
                </div>
                <div className={ModCSSmain.groups}>
                    <a>Groups</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </div>
            <div className={ModCSSc.content}>
                <div className={ModCSSc.item}>
                    <UserInfo />
                </div>
                <div className={ModCSSc.item}>
                    <MyPosts />
                </div>
            </div>
        </div>
    );
};

// экспортируем для index.js
export default App;

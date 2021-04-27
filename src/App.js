import React from "react";
import Profile from "./components/Profile/Profile";
import Groups from "./components/Groups/Groups";
import UserInfo from "./components/UserInfo/UserInfo";
import MyPosts from "./components/MyPosts/MyPosts";
import Authorization from "./components/Authorization/Authorization";
import "./App.css";

//создали основную компоненту (переменная, которая по факту функция)
const App = () => {
    return (
        <div className="app-wrapper">
            <div className="main">
                <div className="logo">
                    <img src="./../public/VchatLogo.png" alt="Logo" />
                </div>
                <div className="authorization">
                    <Authorization />
                </div>
                <div className="profile">
                    <Profile />
                </div>
                <div className="groups">
                    <Groups />
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </div>
            <div className="content">
                <div className="UserInfo">
                    <UserInfo />
                </div>
                <div className="MyPosts">
                    <MyPosts />
                </div>
            </div>
        </div>
    );
};

export default App;

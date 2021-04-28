import React from "react";
import Profile from "./components/Profile/Profile";
import Groups from "./components/Groups/Groups";
import UserInfo from "./components/UserInfo/UserInfo";
import MyPosts from "./components/MyPosts/MyPosts";
import Authorization from "./components/Authorization/Authorization";
import "./App.css";
import "./main.css";
import "./content.css";

//создали основную компоненту (это переменная, которая по факту функция)
const App = () => {
    return (
        <div className="app-wrapper">
            <div className="main">
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRqOE5EJnSqYT_juSSqytRMOY5JIst6MVxA&usqp=CAU"/>
                    {/* <img src="./../public/logo.png" alt="Logo" /> */}
                    <h1> Сообщество умных людей</h1>
                </div>
                <div className="authorization">
                    {/* передаём сюда подкомпоненту */}
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

// экспортируем для index.js
export default App;

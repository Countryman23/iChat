import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Authorization from "./components/Authorization/Authorization";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/MyPosts/MyPosts";
import Messages from "./components/Messages/Messages";
import ModCSS from "./App.module.css"; //Модифицируем наши стили с помощью .module
import { BrowserRouter, Route } from "react-router-dom"; // импорт с фигурными скобками из-за экспорта не по дефолту

//создали основную компоненту (это переменная, которая по факту функция)
const App = () => {
    return (
        // BrowserRouter, вложенность для маршрутизации
        <BrowserRouter>
            <div className={ModCSS.appWrapper}>
                <div className={ModCSS.nav}>
                {/* передаём сюда подкомпоненту */}
                {/* в Navigation.jsx лежат ссылки для Route */}
                    <Navigation />
                </div>
                <div className={ModCSS.content}>
                    {/* создаём маршрутизатор для управлеения ссылками */}
                    <Route path="/Authorization" component={Authorization} />
                    <Route path="/Profile" component={Profile} />
                    <Route path="/MyPosts" component={MyPosts} />
                    <Route path="/Messages" component={Messages} />
                </div>
            </div>
        </BrowserRouter>
    );
};

// экспортируем для index.js
export default App;

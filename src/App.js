import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Authorization from "./components/Authorization/Authorization";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/MyPosts/MyPosts";
import Messages from "./components/Messages/Messages";
import Settings from "./components/Settings/Settings";
import ModCSS from "./App.module.css"; //Модифицируем наши стили с помощью .module
import { BrowserRouter, Route } from "react-router-dom"; // импорт с фигурными скобками из-за экспорта не по дефолту

// переносим массив из MyPosts, и далее в index.js
// let postData = [
//         { id: 1, text: "text1", like: "10" },
//         { id: 2, text: "text2", like: "20" },
//         { id: 3, text: "Bi", like: "30" },
//         { id: 4, text: "Mi", like: "40" }
//     ];

//создали основную компоненту (это переменная, которая по факту функция)
const App = (props) => {
    
    return (
        // BrowserRouter, вложенность для маршрутизации
        <BrowserRouter>
            <div className={ModCSS.appWrapper}>
                <div className={ModCSS.nav}>
                {/* передаём сюда подкомпоненту. Компонента всегда с большой буквы */}
                {/* в Navigation.jsx лежат ссылки для Route */}
                    <Navigation />
                </div>
                <div className={ModCSS.content}>
                    {/* создаём маршрутизатор для управлеения ссылками */}
                    {/* <Route path="/Authorization" component={Authorization} />
                    <Route path="/Profile" component={Profile} />
                    <Route path="/MyPosts" component={MyPosts} />
                    <Route path="/Messages" component={Messages} />
                    <Route path="/Settings" component={Settings} /> */}
                    {/* через render можем вызвать анонимную функцию */}
                    <Route path="/Authorization" render={ () => <Authorization />} />
                    <Route path="/Profile" render={ () => <Profile />} />
                    {/* передаём пропсы из массива postData */}
                    {/* затем берём postData уже из пропса который приходит в app.js из index.js. прописываем props.postData */}
                    {/* теперь массив с объектами находится в state.js, для этого добавляем appState (props.appState.postData)*/}
                    {/* <Route path="/MyPosts" render={ () => <MyPosts postData={props.appState.postData}/>} />
                    <Route path="/Messages" render={ () => <Messages MesDataName={props.appState.MesDataName} MesDataItem={props.appState.MesDataItem}/>} /> */}
                    {/* сгруппировали state и атрибуты имеют другой вид */}
                    {/* <Route path="/MyPosts" render={ () => <MyPosts state={props.addState} addPostBLL={props.addPostBLL} />} /> */}
                    {/* добавили myPostsPage */}
                    {/* добавили updatePostChange */}
                    {/* переписываем с учётом dispatch */}
                    {/* <Route path="/MyPosts" render={ () => <MyPosts state={props.addState} 
                                                            addPostBLL={props.addPostBLL}
                                                            myPostsPage={props.myPostsPage}
                                                            updatePostChange={props.updatePostChange} />} /> */}
                    <Route path="/MyPosts" render={ () => <MyPosts state={props.addState} 
                                                            dispatch={props.dispatch}
                                                            myPostsPage={props.myPostsPage} />} />
                                                            {/* updatePostChange тут уже не нужен */}
                                                            {/* updatePostChange={props.updatePostChange}  */}
                                                            
                    <Route path="/Messages" render={ () => <Messages state={props.addState} 
                                                            state={props.addState}/>} />
                    <Route path="/Settings" render={Settings} />
                    
                </div>
            </div>
        </BrowserRouter>
    );
};

// экспортируем для index.js
export default App;

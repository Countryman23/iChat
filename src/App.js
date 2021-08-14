import React from "react";
import Navigation from "./components/Navigation/Navigation";
import AuthContainer from "./components/Authorization/authContainer";
import Login from "./components/Authorization/login";
// import Profile from "./components/Profile/Profile";
//изменили на Container
// import MyPosts from "./components/MyPosts/MyPosts";
// import Messages from "./components/Messages/Messages";
import MyPostsContainer from "./components/MyPosts/MyPostsContainer";
// import MessagesContainer from "./components/Messages/MessagesContainer"; //перенесли ниже для React lazy
// import UserContainer from "./components/Users/userContainer"; //перенесли ниже для React lazy
import ProfileInfoContainer from "./components/Profile/profileInfoContainer";
import Settings from "./components/Settings/Settings";
import ModCSS from "./App.module.css"; //Модифицируем наши стили с помощью .module
import { BrowserRouter, Route } from "react-router-dom"; // импорт с фигурными скобками из-за экспорта не по дефолту
import { connect } from 'react-redux';
// import { withRouter } from "react-router";
// import { compose } from "redux";
import {initializApp} from "./redux/app-reducer";
import Loading from "../src/loading";
import {withSuspense} from "./hoc/withSuspense" // нужен для React Lazy

// переносим массив из MyPosts, и далее в index.js
// let postData = [
//         { id: 1, text: "text1", like: "10" },
//         { id: 2, text: "text2", like: "20" },
//         { id: 3, text: "Bi", like: "30" },
//         { id: 4, text: "Mi", like: "40" }
//     ];

//создали основную компоненту (это переменная, которая по факту функция)
// const App = (props) => {
//     // debugger
//     return (
//         // BrowserRouter, вложенность для маршрутизации
//         <BrowserRouter>
//             <div className={ModCSS.appWrapper}>
//                 <div className={ModCSS.nav}>
//                 {/* передаём сюда подкомпоненту. Компонента всегда с большой буквы */}
//                 {/* в Navigation.jsx лежат ссылки для Route */}
//                     <Navigation />
//                 </div>
//                 <div className={ModCSS.content}>
//                     {/* создаём маршрутизатор для управлеения ссылками */}
//                     {/* <Route path="/Authorization" component={Authorization} />
//                     <Route path="/Profile" component={Profile} />
//                     <Route path="/MyPosts" component={MyPosts} />
//                     <Route path="/Messages" component={Messages} />
//                     <Route path="/Settings" component={Settings} /> */}
//                     {/* через render можем вызвать анонимную функцию */}
//                     <Route path="/Authorization" render={ () => <AuthContainer />} />
//                     <Route path="/Profile" render={ () => <ProfileContainer />} />
//                     {/* ? - означает что это параметр (:userId) не обязательный */}
//                     <Route path="/ProfileInfoContainer/:userId?" render={ () => <ProfileInfoContainer />} />
//                     {/* передаём пропсы из массива postData */}
//                     {/* затем берём postData уже из пропса который приходит в app.js из index.js. прописываем props.postData */}
//                     {/* теперь массив с объектами находится в state.js, для этого добавляем appState (props.appState.postData)*/}
//                     {/* <Route path="/MyPosts" render={ () => <MyPosts postData={props.appState.postData}/>} />
//                     <Route path="/Messages" render={ () => <Messages MesDataName={props.appState.MesDataName} MesDataItem={props.appState.MesDataItem}/>} /> */}
//                     {/* сгруппировали state и атрибуты имеют другой вид */}
//                     {/* <Route path="/MyPosts" render={ () => <MyPosts state={props.addState} addPostBLL={props.addPostBLL} />} /> */}
//                     {/* добавили myPostsPage */}
//                     {/* добавили updatePostChange */}
//                     {/* переписываем с учётом dispatch */}
//                     {/* <Route path="/MyPosts" render={ () => <MyPosts state={props.addState} 
//                                                             addPostBLL={props.addPostBLL}
//                                                             myPostsPage={props.myPostsPage}
//                                                             updatePostChange={props.updatePostChange} />} /> */}
//                                                             {/* заменяем компоненту */}
//                     {/* <Route path="/MyPosts" render={ () => <MyPosts APPstate={props.addState} 
//                                                             dispatch={props.dispatch} />} />
//                                                             {/* updatePostChange тут уже не нужен */}
//                                                             {/* updatePostChange={props.updatePostChange}  */}
//                     {/* <Route path="/MyPosts" render={ () => <MyPostsContainer newState = {props.addState} />} />
//                     <Route path="/Messages" render={ () => <MessagesContainer newState={props.addState} 
//                                                             dispatch={props.dispatch} />} /> */}
//                                                             {/* переписываю под react-redux */}
//                     <Route path="/MyPosts" render={ () => <MyPostsContainer newState = {props.store} />} />
//                     <Route path="/Messages" render={ () => <MessagesContainer newState = {props.store}
//                                                             dispatch={props.dispatch} />} />
//                     <Route path="/login" render={ () => <Login />} />
//                     <Route path="/Settings" render={Settings} />
//                 </div>
//             </div>
//         </BrowserRouter>
//     );
// };

// React lazy. Тут мы говорим, загрузи данную компоненту когда её вызовут
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const UserContainer = React.lazy(() => import('./components/Users/userContainer'));

// изменили компоненту на классовую
class App extends React.Component {

    componentDidMount() {
        // this.props.authProfileThunk() // перенесли из AuthContainer
        this.props.initializApp()
    }
    
    render () {
        




        // делаем проверку. тут говорим, пока не получена инициализация покажи загрузчик
        //закоментировал для gh-pages
        // if (!this.props.initialized) {
        //     return <Loading />
        // }





        return (
                <div className={ModCSS.appWrapper}>
                    <div className={ModCSS.nav}>
                        <Navigation />
                    </div>
                    <div className={ModCSS.content}>
                        <Route path="/Authorization" render={ () => <AuthContainer />} />
                        <Route path="/Profile" render={ () => <MyPostsContainer newState = {this.props.store} />} />
                        {/* убрали, так как применили React.Lazy */}
                        {/* <Route path="/Users" render={ () => <UserContainer />} /> */}
                        <Route path="/Users" render={withSuspense(UserContainer)} />
                        <Route path="/ProfileInfoContainer/:userId?" render={ () => <ProfileInfoContainer />} />
                        {/* убрали, так как применили React.Lazy */}
                        {/* <Route path="/Messages" render={ () => <MessagesContainer newState = {this.props.store}
                                                                                dispatch={this.props.dispatch} />} /> */}
                        <Route path="/Messages" render={withSuspense(MessagesContainer)} />
                        <Route path="/login" render={ () => <Login />} />
                        <Route path="/Settings" render={Settings} />
                    </div>
                </div>
        );
    }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized // эту app необходимо брать из комбайна редьюсеров
})

// экспортируем для index.js
// export default App; // изменили компоненту на классовую
// export default connect(null, {authProfileThunk}) (App); // изменили аосле создания appReducer
export default connect(mapStateToProps, {initializApp}) (App);

// не получилось запустить
// export default compose(
//     withRouter, 
//     connect(null, {authProfileThunk})) (App);
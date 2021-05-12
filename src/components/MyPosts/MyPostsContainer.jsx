import React from 'react';
import {addPostUIActionCreator, postChangeActionCreator} from '../../redux/myPost-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    // debugger
    // считываем поле textarea с помощью addPostUI
    // запускаем функцию addPostBLL из index.js
    let addPostUI = () => {
        // нет смысла отправлять текст в addPostUI
        // let text = newPostEl.current.value;
        // закеоментировали let text
        // props.addPostBLL(text);
        // props.addPostBLL(); // меняем на dispatch
        // props.dispatch ({ type: "ADD-POST-BLL"})
        //создали функцию addPostUIActionCreator которая будет передоваться в BLL
        props.store.dispatch(addPostUIActionCreator());
    }

    // создаём переменную которая будет отправлять новые значения в BLL
    let onPostChange = (text) => {
        props.store.dispatch(postChangeActionCreator(text))
    }
    //необходимая переменная для пропсов
    let state = props.store.getState();
    
    return (
        <MyPosts updatePostChange = {onPostChange} 
                addPostBLL = {addPostUI}
                postData = {state.myPostsPage.postData}
                newPostData = {state.myPostsPage.newPostData} />
    );
};

export default MyPostsContainer;

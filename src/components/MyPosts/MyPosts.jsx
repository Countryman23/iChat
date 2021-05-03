import React from 'react';
import ModCSS from "./MyPosts.module.css"; //Модифицируем наши стили с помощью .module
import Post from './Post/Post';

const MyPosts = (props) => {

    // переносим массив в app.js
    // let postData = [
    //     { id: 1, text: "text1", like: "10" },
    //     { id: 2, text: "text2", like: "20" },
    //     { id: 3, text: "Bi", like: "30" },
    //     { id: 4, text: "Mi", like: "40" }
    // ];

    // добавляем props. к postData.map чтобы передать пропсы из index.js
    let postDataEl = props.state.myPostsPage.postData.map(post => (<Post text={post.text} like={post.like} />))

    // просим React создать ссылку
    let newPostEl = React.createRef();

    // считываем поле textarea с помощью addPostUI
    // запускаем функцию addPostBLL из index.js
    let addPostUI = () => {
        let newText = newPostEl.current.value;
        if (newText == ""){
            addPostUI = null;
        } 
        else {props.addPostBLL(newText)};
        newPostEl.current.value = "";
    }

    return (
        <div>
            <div className={ModCSS.item}>
                <div className={ModCSS.header}><h3>My posts</h3></div>
                <div>
                    <textarea ref={newPostEl} />
                </div>
                <div>
                    {/* добавили событие onClick, и передали ей функцию addPost */}
                    <button onClick={addPostUI}>Add post</button>
                </div>
            </div>
            { postDataEl }
            {/* экспортируем компоненту Post */}
            {/* передаём атрибуты компоненте, через пропсы */}
            {/* <Post text="Hello" like="10" />
            <Post text="You cool" like="20" /> */}
            {/* в этом способе данные берем из массива с объектами */}
            {/* <Post text={postData[2].text} like={postData[2].like} />
            <Post text={postData[3].text} like={postData[3].like} /> */}
        </div>
    );
};

export default MyPosts;

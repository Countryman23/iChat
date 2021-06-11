import React from 'react';
import ModCSS from "./MyPosts.module.css"; //Модифицируем наши стили с помощью .module
import Post from './Post/Post';
import { withAuthRedirect } from "../../hoc/authRedirect";

const MyPosts = (props) => {
// debugger
    // переносим массив в app.js
    // let postData = [
    //     { id: 1, text: "text1", like: "10" },
    //     { id: 2, text: "text2", like: "20" },
    //     { id: 3, text: "Bi", like: "30" },
    //     { id: 4, text: "Mi", like: "40" }
    // ];

            {/* экспортируем компоненту Post */}
            {/* передаём атрибуты компоненте, через пропсы */}
            {/* <Post text="Hello" like="10" />
            <Post text="You cool" like="20" /> */}
            {/* в этом способе данные берем из массива с объектами */}
            {/* <Post text={postData[2].text} like={postData[2].like} />
            <Post text={postData[3].text} like={postData[3].like} /> */}

    // добавляем props. к postData.map чтобы передать пропсы из index.js
    let postDataEl = props.postData
    .map(post => (<Post text={post.text} 
                        like={post.like}
                        key={post.id} />))

    // просим React создать ссылку
    let newPostEl = React.createRef();

        // создаём переменную которая будет отправлять новые значения в BLL
    let addPostChange = () => {
        let text = newPostEl.current.value;
        // props.updatePostChange (text); // меняем на dispatch
        // props.dispatch ({ type: "UPDATE-POST-CHANGE", newText: text})
        //создали функцию addPostUIActionCreator которая будет передоваться в BLL
        //убрали после создания MyPostsContainer
        // props.dispatch(postChangeActionCreator(text))
        props.updatePostChange(text);
    }

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
        //убрали после создания MyPostsContainer
        // props.dispatch(addPostUIActionCreator());
        props.addPostBLL()
    }

    // вынес пропс в переменную
    let newPostDataRemove = props.newPostData;
// debugger
    return (
        <div>
            <div className={ModCSS.item}>
                <div className={ModCSS.header}><h3>My posts</h3></div>
                <div>
                    <textarea onChange={addPostChange} 
                                ref={newPostEl} 
                                value={newPostDataRemove} />
                </div>
                <div>
                    {/* добавили событие onClick, и передали ей функцию addPost */}
                    <button onClick={addPostUI}>
                            Add post</button>
                </div>
            </div>
            { postDataEl }
        </div>
    );
};

//доступ только авторизованным
let authAccessHOC  = withAuthRedirect(MyPosts); 

export default authAccessHOC;

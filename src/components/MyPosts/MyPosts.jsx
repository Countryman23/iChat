import React from 'react';
import ModCSS from "./MyPosts.module.css"; //Модифицируем наши стили с помощью .module
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        { id: 1, text: "text1", like: "10" },
        { id: 2, text: "text2", like: "20" },
        { id: 3, text: "Bi", like: "30" },
        { id: 4, text: "Mi", like: "40" }
    ];

    return (
        <div>
            <div className={ModCSS.item}>
                <div className={ModCSS.header}><h3>My posts</h3></div>
                <div>
                    <textarea />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {/* экспортируем компоненту Post */}
            {/* передаём атрибуты компоненте, через пропсы */}
            <Post text="Hello" like="10" />
            <Post text="You cool" like="20" />
            {/* в этом способе данные берем из масива с объектами */}
            <Post text={postData[2].text} like={postData[2].like} />
            <Post text={postData[3].text} like={postData[3].like} />
        </div>
    );
};

export default MyPosts;

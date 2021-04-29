import React from 'react';
import ModCSS from "./MyPosts.module.css"; //Модифицируем наши стили с помощью .module
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div className={ModCSS.item}>
                <p>My posts</p>
                <div>
                    <textarea />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {/* экспортируем компоненту Post */}
            {/* создаём атрибыты для пропсов */}
            <Post message="Hello" />
            <Post message="You cool" />
        </div>
    );
};

export default MyPosts;

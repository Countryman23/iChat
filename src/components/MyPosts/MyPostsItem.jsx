import React from 'react';
import ModCSS from "./MyPosts.module.css"; //Модифицируем наши стили с помощью .module

const MyPostsItem = () => {
    return (
        <div>
            <div className={ModCSS.item}>
                myPost
            </div>
            <div className={ModCSS.item}>
                newPost
            </div>
            <div className={ModCSS.item}>
                Post1
            </div>
            <div className={ModCSS.item}>
                Post2
            </div>
        </div>
    );
};

export default MyPostsItem;

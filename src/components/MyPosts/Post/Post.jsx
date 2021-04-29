import React from 'react';
import ModCSS from "./../MyPosts.module.css"; //Модифицируем наши стили с помощью .module

const Post = (props) => {
    return (
      <div>
          <div className={ModCSS.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU" />
          {/* принимаем атрибуты через пропсы из MyPosts */}
          {props.message}
      </div>
        <div>
            <button>Like</button>
        </div>
      </div>
    );
};

export default Post;

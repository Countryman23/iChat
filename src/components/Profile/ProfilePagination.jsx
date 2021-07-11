import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module

let ProfilePagination = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize); //3. количество страниц c пользователями
        
        let pages = [];
        //4 заполняем в pages // дописал / 100 что бы уменьшить количество отображаемых страниц
        for (let i=1; i <= pagesCount / 100; i++) {
            pages.push(i);
        }

    return <div>
         {pages.map(p => {
                return <span className={props.carrentPage === p && ModCSS.Selected}
                            onClick={(e) => {props.onUserListChanged(p)}}>{p}</span>
            })}
    </div>
}
export default ProfilePagination;

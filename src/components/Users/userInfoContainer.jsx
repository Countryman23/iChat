import React from 'react';
import ModCSS from "../Profile/Profile.module.css"; //Модифицируем наши стили с помощью .module
import Loading from "../../loading";
import ProfilePagination from "../Profile/ProfilePagination"
import User from "./User"

let UserInfoContainer = ({carrentPage, onUserListChanged, totalUsersCount, pageSize, ...props}) => {
    return <div>
            
            {props.isLoading ? <Loading /> : null }

            {/* Убираем кнопку */}
            {/* <button onClick={this.getUsers}>Get users</button> */}
            {/*  {props.users.map(u => берём users полученныйе из props.setUsers, которые пришли туда из ответа сервера*/}
            {/* временная запись для проверки, далее выводим количество страниц из результатов сервера */}
            {/* <div className={ModCSS.listNamberSelectedWrapper} >
                <span className={ModCSS.listNamberSelected}>1</span>
                <span>2</span>
                <span>3</span>

            {/* //9 создаём массив*/}
            {/* //10. деллаем логику onClick */}

            <div className={ModCSS.listNamberSelected}>
                <ProfilePagination carrentPage={carrentPage}
                                    onUserListChanged={onUserListChanged}
                                    totalUsersCount={totalUsersCount}
                                    pageSize={pageSize} />
            </div>
            <div >
                {props.users.map(u => <User key={u.id}
                                            user={u}
                                            followingInProcess={props.followingInProcess}
                                            followThunk={props.followThunk}
                                            unFollowThunk={props.unFollowThunk} />  )}
            </div>
    </div>
}

export default UserInfoContainer;

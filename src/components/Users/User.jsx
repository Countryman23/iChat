import React from 'react';
import ModCSS from "../Profile/Profile.module.css"; //Модифицируем наши стили с помощью .module
import { NavLink } from "react-router-dom"; // импорт с фигурными скобками из-за экспорта не по дефолту

let User = ({ user, ...props }) => {
    return (<>
        <div className={ModCSS.profile}>
            <div className={ModCSS.subscribeWrapper}>
                <div className={ModCSS.subscribeImg}>
                    {/* <img src={u.photoUrl} /> // временно скрыли потомучто этих данных нет в api  */}
                    {/* //реализуем переход по юзеру */}
                    <NavLink to={"/ProfileInfoContainer/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"} />
                    </NavLink>
                </div>
                <div className={ModCSS.subscribe}>
                    {user.followed
                        //вызываем dispatch и передпм id
                        ? <button disabled={props.followingInProcess.some(id => id === user.id)} onClick={() => { //если в пропсах followingInProcess будет true, то кнопка будет disabled .some(id => id === u.id) этим мы говорим, если хоть одна id равна id пользователя то тогда disabled
                            //перекинули логику в санки
                            // props.toggleFollowingInProcess(true, u.id);//мы фоловим true
                            //добавляем запрос отписки
                            //перекинули запрос в api.js apiUnfollowUser
                            // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                            // { withCredentials: true,
                            //     headers: {
                            //         "API-KEY": "b945a48b-e23b-46ca-a66f-5493b89d60ce"
                            //     }
                            // } ) //headers стандартный запрос к API. Тут говорится, буду обращаться к заголовкам. Цепляем ключ к headers
                            // // withCredentials передаётся в delete вторым параметром
                            // .then(response => {
                            //перекинули логику в санки
                            // apiUnfollowUser(u.id).then(data => {
                            //     // debugger
                            //         if (data.resultCode == 0) {
                            //             props.unFollow(u.id);
                            //         }
                            //         props.toggleFollowingInProcess(false, u.id);//когда мы закончим then

                            //     });
                            //когда компонента классовая мы пропсы запрашиваем через this.props.
                            //когда компонента функциональная мы пропсы запрашиваем напрямую через props.
                            props.unFollowThunk(user.id)
                        }} >Unfollow</button>
                        : <button disabled={props.followingInProcess.some(id => id === user.id)} onClick={() => { //если в пропсах followingInProcess будет false, то кнопка НЕ будет disabled. .some(id => id === u.id) этим мы говорим, если хоть одна id равна id пользователя то тогда disabled
                            //перекинули логику в санки
                            // props.toggleFollowingInProcess(true, u.id);//мы фоловим true
                            //добавляем запрос подписки
                            //перекинули запрос в api.js apiFollowUser
                            //     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, 
                            //    { withCredentials: true,
                            //     headers: {
                            //         "API-KEY": "b945a48b-e23b-46ca-a66f-5493b89d60ce"
                            //     }
                            // } ) //подтвеождение авторизации по технологии CORS. withCredentials передаётся в get вторым параметром, а в post третьим
                            // .then(response => {
                            //перекинули логику в санки
                            // apiFollowUser(u.id).then(data => {
                            //     // debugger
                            //             if (data.resultCode == 0) {
                            //                 props.follow(u.id);
                            //             }
                            //             props.toggleFollowingInProcess(false, u.id);//когда мы закончим then
                            //         });
                            props.followThunk(user.id)
                        }} >Follow</button>}
                </div>
            </div>
            <div className={ModCSS.content}>
                {/* <div>{u.fullName}</div> // временно скрыли потомучто этих данных нет в api */}
                <div>{user.name}</div>
                <div>{user.status}</div>
                {/* <div>{u.location.country}</div>// временно скрыли потомучто этих данных нет в api*/}
                {/* <div>{u.location.city}</div>// временно скрыли потомучто этих данных нет в api */}
            </div>
        </div>
    </>
    )
}

export default User;

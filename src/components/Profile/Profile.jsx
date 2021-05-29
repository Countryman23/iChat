import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import Loading from "../../loading";
import { NavLink } from "react-router-dom"; // импорт с фигурными скобками из-за экспорта не по дефолту
import * as axios from 'axios'; //* импортируем всё что есть в библиотеке axios
import {apiFollowUser} from '../../api/api';
import {apiUnfollowUser} from '../../api/api';



let Profile = (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize); //3. количество страниц c пользователями
        
        let pages = [];
        //4 заполняем в pages // дописал / 100 что бы уменьшить количество отображаемых страниц
        for (let i=1; i <= pagesCount / 100; i++) {
            pages.push(i);
        }

    return (<>
        {props.isLoading ? <Loading /> : null }
        <div>
            {/* Убираем кнопку */}
            {/* <button onClick={this.getUsers}>Get users</button> */}
            {/*  {props.users.map(u => берём users полученныйе из props.setUsers, которые пришли туда из ответа сервера*/}
            {/* временная запись для проверки, далее выводим количество страниц из результатов сервера */}
            {/* <div className={ModCSS.listNamberSelectedWrapper} >
                <span className={ModCSS.listNamberSelected}>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div> */} 
            {/* //9 создаём массив*/}
            {/* //10. деллаем логику onClick */}
            <div className={ModCSS.listNamberSelected}>
            {pages.map(p => {
                return <span className={props.carrentPage === p && ModCSS.Selected}
                            onClick={(e) => {props.onUserListChanged(p)}}>{p}</span>
            })}
            </div>
            {props.users.map(u => <div key={u.id} className={ModCSS.profile}>
                <div className={ModCSS.subscribeWrapper}>
                    <div className={ModCSS.subscribeImg}>
                        {/* <img src={u.photoUrl} /> // временно скрыли потомучто этих данных нет в api  */}
                        {/* //реализуем переход по юзеру */}
                        <NavLink to={"/ProfileInfoContainer/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"} />
                        </NavLink>
                    </div>
                    <div className={ModCSS.subscribe}>
                        {u.followed
                            //вызываем dispatch и передпм id
                            ? <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => { //если в пропсах followingInProcess будет true, то кнопка будет disabled .some(id => id === u.id) этим мы говорим, если хоть одна id равна id пользователя то тогда disabled
                                props.toggleFollowingInProcess(true, u.id);//мы фоловим true
                                //добавляем запрос отписки
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                                { withCredentials: true,
                                    headers: {
                                        "API-KEY": "b945a48b-e23b-46ca-a66f-5493b89d60ce"
                                    }
                                } ) //headers стандартный запрос к API. Тут говорится, буду обращаться к заголовкам. Цепляем ключ к headers
                                // withCredentials передаётся в delete вторым параметром
                                .then(response => {
                                // apiUnfollowUser(u).then(response => {
                                    // debugger
                                        if (response.data.resultCode == 0) {
                                            props.unFollow(u.id);
                                            // props.unFollow(u);
                                        }
                                        props.toggleFollowingInProcess(false, u.id);//когда мы закончим then

                                    });

                                }} >Unfollow</button>
                            : <button disabled={props.followingInProcess.some(id => id === u.id)} onClick={() => { //если в пропсах followingInProcess будет false, то кнопка НЕ будет disabled. .some(id => id === u.id) этим мы говорим, если хоть одна id равна id пользователя то тогда disabled
                                props.toggleFollowingInProcess(true, u.id);//мы фоловим true
                                //добавляем запрос подписки
                                //перекинули запрос в api.js apiFollowUser
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, 
                               { withCredentials: true,
                                headers: {
                                    "API-KEY": "b945a48b-e23b-46ca-a66f-5493b89d60ce"
                                }
                            } ) //подтвеождение авторизации по технологии CORS. withCredentials передаётся в get вторым параметром, а в post третьим
                            .then(response => {
                            // apiFollowUser(u).then(response => {
                                // debugger
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                            // props.follow(u);
                                        }
                                        props.toggleFollowingInProcess(false, u.id);//когда мы закончим then
                                    });
                            }} >Follow</button>}
                    </div>
                </div>
                <div className={ModCSS.content}>
                    {/* <div>{u.fullName}</div> // временно скрыли потомучто этих данных нет в api */}
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    {/* <div>{u.location.country}</div>// временно скрыли потомучто этих данных нет в api*/}
                    {/* <div>{u.location.city}</div>// временно скрыли потомучто этих данных нет в api */}
                </div>
            </div>)}
        </div>
    </>
    )
}

export default Profile;

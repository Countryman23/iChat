import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import * as axios from 'axios'; //* импортируем всё что есть в библиотеке axios
// import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                // debugger;
                props.setUsers(response.data.items);
            });

        //убрали и подключили через сервер
        // props.setUsers([
        //     {
        //         id: 1, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
        //         followed: true, fullName: "Ivan", status: "I am in network Russia", location: { country: "Russia", city: "Moscow" }
        //     },
        //     {
        //         id: 2, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
        //         followed: false, fullName: "Roma", status: "I am in network Europe", location: { country: "Europe", city: "Italy" }
        //     },
        //     {
        //         id: 3, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
        //         followed: false, fullName: "Dima", status: "I am in network Asia", location: { country: "Asia", city: "Japan" }
        //     },
        //     {
        //         id: 4, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
        //         followed: false, fullName: "Rita", status: "I am in network USA", location: { country: "USA", city: "Chicago" }
        //     },

        // ])
    };
    // debugger
    return (
        <div>
            {/*  {props.users.map(u => берём users полученныйе из props.setUsers, которые пришли туда из ответа сервера*/}
            {props.users.map(u => <div key={u.id} className={ModCSS.profile}>
                <div className={ModCSS.subscribeWrapper}>
                    <div className={ModCSS.subscribeImg}>
                        {/* <img src={u.photoUrl} /> // временно скрыли потомучто этих данных нет в api  */}
                        <img src={u.photos.small != null ? u.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"} />
                    </div>
                    <div className={ModCSS.subscribe}>
                        {u.followed
                            //вызываем dispatch и передпм id
                            ? <button onClick={() => { props.unFollow(u.id) }} >Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
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
    )

};

export default Profile;

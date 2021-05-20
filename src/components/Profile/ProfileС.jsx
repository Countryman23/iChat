import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
import * as axios from 'axios'; //* импортируем всё что есть в библиотеке axios

class Profile extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                // debugger;
                this.props.setUsers(response.data.items);
            });
    }

    //убираем let, так как внутри класса мы можем одъявлять только методы
    // getUsers = () => {
    //     if (this.props.users.length === 0) {

    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(response => {
    //                 // debugger;
    //                 this.props.setUsers(response.data.items);
    //             });
    //     }
    // } // Убираем логику нажатия кнопки

    render() {
        return (
            <div>
                {/* Убираем кнопку */}
                {/* <button onClick={this.getUsers}>Get users</button> */}
                {/*  {props.users.map(u => берём users полученныйе из props.setUsers, которые пришли туда из ответа сервера*/}
                {this.props.users.map(u => <div key={u.id} className={ModCSS.profile}>
                    <div className={ModCSS.subscribeWrapper}>
                        <div className={ModCSS.subscribeImg}>
                            {/* <img src={u.photoUrl} /> // временно скрыли потомучто этих данных нет в api  */}
                            <img src={u.photos.small != null ? u.photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"} />
                        </div>
                        <div className={ModCSS.subscribe}>
                            {u.followed
                                //вызываем dispatch и передпм id
                                ? <button onClick={() => { this.props.unFollow(u.id) }} >Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }} >Follow</button>}
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
    }
}
export default Profile;

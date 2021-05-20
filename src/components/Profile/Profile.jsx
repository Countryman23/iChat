import React from 'react';
import ModCSS from "./Profile.module.css"; //Модифицируем наши стили с помощью .module
// import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
                followed: true, fullName: "Ivan", status: "I am in network Russia", location: { country: "Russia", city: "Moscow" }
            },
            {
                id: 2, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
                followed: false, fullName: "Roma", status: "I am in network Europe", location: { country: "Europe", city: "Italy" }
            },
            {
                id: 3, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
                followed: false, fullName: "Dima", status: "I am in network Asia", location: { country: "Asia", city: "Japan" }
            },
            {
                id: 4, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
                followed: false, fullName: "Rita", status: "I am in network USA", location: { country: "USA", city: "Chicago" }
            },

        ])
    };

    return (
        <div>{props.users.map(u =>
                <div key={u.id} className={ModCSS.profile}>
                    <div className={ModCSS.subscribeWrapper}>
                        <div className={ModCSS.subscribeImg}>
                            <img src={u.photoUrl} />
                        </div>
                        <div className={ModCSS.subscribe}>
                            {u.followed 
                                    //вызываем dispatch и передпм id
                                ? <button onClick={() => { props.unFollow(u.id) }} >Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
                        </div>
                    </div>
                    <div className={ModCSS.content}>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>)}
        </div>
    )

};

export default Profile;

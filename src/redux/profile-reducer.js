//3
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CARRENT_PAGE = "SET_CARRENT_PAGE";//7. создаём константу для работы с сервером. Далее берём её и обрабатываем в state (const profileReducer)
const SET_USER_COUNT = "SET_USER_COUNT";//15. 

//1
// let initialState = {
//     users: [    //         {
//     //     //             id: 1, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
//     //     //             followed: true, fullName: "Ivan", status: "I am in network Russia", location: { country: "Russia", city: "Moscow" }
//     //     //         },
//     //     //         {
//     //     //             id: 2, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
//     //     //             followed: false, fullName: "Roma", status: "I am in network Europe", location: { country: "Europe", city: "Italy" }
//     //     //         },
//     //     //         {
//     //     //             id: 3, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
//     //     //             followed: false, fullName: "Dima", status: "I am in network Asia", location: { country: "Asia", city: "Japan" }
//     //     //         },
//     //     //         {
//     //     //             id: 4, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU",
//     //     //             followed: false, fullName: "Rita", status: "I am in network USA", location: { country: "USA", city: "Chicago" }
//     //     //         },
//     ],
// };

let initialState = {
    users: [],
    pageSize: 5, //1
    totalUsersCount: 0,//общее количество пользобателей
    carrentPage: 1,

};

//4
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //копируем users из state
                users: state.users.map( u => {
                    //когда, пришёл очередной users пришёл в колбэк u благодаря .map, 
                    //и если его id равен айдишнику который нужно зафоловить,
                    //то тогда его нужно зафоловить сделать true, а для этого
                    //нужно вернуть изменённую копию
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    //если не совпадает, возвращаем тот же самый объект
                    return u;
                })
            }
        case UNFOLLOW:
                return {
                    ...state,
                    //копируем users из state
                    users: state.users.map( u => {
                        //когда, пришёл очередной users пришёл в колбэк u благодаря .map, 
                        //и если его id равен айдишнику который нужно зафоловить,
                        //то тогда его нужно зафоловить сделать true, а для этого
                        //нужно вернуть изменённую копию
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        //если не совпадает, возвращаем тот же самый объект
                        return u;
                    })
                }
        case SET_USERS: {
            // return {...state, users: [...state.users, ...action.users]} //таким способом происходит задваивание users
            return {...state, users: [...action.users]} //взять старый state, взять пользователей которые там были и перезатиреть теми пользователями которые пришли из экшна
        }
        case SET_CARRENT_PAGE: {
            return {...state, carrentPage: action.carrentPage} //8. взять старый carrentPage, и меняем на тот carrentPage который сидит в action. затем его нужно задиспатчить
        }
        case SET_USER_COUNT: {
            return {...state, totalUsersCount: action.count} //16. 
        }
        default:
            return state;
    }
}

//2
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCarrentPageAC = (carrentPage) => ({type: SET_CARRENT_PAGE, carrentPage}) //11. возвращаем action setCarrentPage
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_USER_COUNT, count: totalUsersCount}) //17. расписали count чтобы понять что от куда берётся

export default profileReducer;

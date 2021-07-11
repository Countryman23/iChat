//добавляем так же как в state.js
const ADD_POST_BLL = "post/ADD_POST_BLL";
// убрали после того как добавили форму
// const UPDATE_POST_CHANGE = "UPDATE_POST_CHANGE";


//так как redux запускается до нашего state, мы не успеваем отобразить state и мы получаем ошибку
let initialState = {
    postData: [
        { id: 1, text: "text1", like: 10 },
        { id: 2, text: "text2", like: 20 },
        { id: 3, text: "Bi", like: 30 },
        { id: 4, text: "Mi", like: 40 }
    ],
    // создали newPostData для принятия новых значений поля textarea
    // newPostData: "hard code textarea", // убрали после того как добавили форму
};

const myPostReducer = (state = initialState, action) => {
//     if (action.type === ADD_POST_BLL) {
//         {let newPost = {
//             id: 5, 
//             // удалили postMessage, будем брать его через state
//             // text: postMessage, 
//             text: state.newPostData, 
//             like: 50,
//             }
//             // this._state.myPostsPage.postData.push(newPost);
//             //так как myPostsPage к нам приходит из state, меняем запись
//             state.postData.push(newPost);
//         // не добавлять пустой textarea
//         // if (this._state.myPostsPage.newPostData === ""){this._state.myPostsPage.postData.pop(newPost)};
//         //так как myPostsPage к нам приходит из state, меняем запись
//         if (state.newPostData === ""){state.postData.pop(newPost)};
//         //очищаем поле textarea
//         // this._state.myPostsPage.newPostData = "";
//         //так как myPostsPage к нам приходит из state, меняем запись
//         state.newPostData = "";
//         // обновляем страницу с новыми данными через reRenderEntireTree
//         //при работе через reducer _callSubscriber уже тут не нужен
//         // this._callSubscriber(this._state);
//         }
//     } else if (action.type === UPDATE_POST_CHANGE) {
//         //добавили action к newText, так как этот параметр больше не может прийти через updatePostChange(newText)
//         // this._state.myPostsPage.newPostData = action.newText;
//         state.newPostData = action.newText;
//         // this._callSubscriber(this._state); // вызываем reRenderEntireTree
// }
    //когда у нас дискретный(не бесконечный) набор чисел, можно применять switch
//     switch (action.type) {
//         case ADD_POST_BLL:
//             let newPost = {
//                 id: 5, 
//                 text: state.newPostData, 
//                 like: 50,
//             }
//             state.postData.push(newPost);
//             if (state.newPostData === ""){state.postData.pop(newPost)};
//             state.newPostData = "";
//             return state;
//         case UPDATE_POST_CHANGE:
//             state.newPostData = action.newText;
//             return state;
//         default:
//             return state;
//     }
// }

//применяем копирование объекта
    // switch (action.type) {
    //     case ADD_POST_BLL:{
    //         let newPost = {
    //             id: 5, 
    //             text: state.newPostData, 
    //             like: 50,
    //         }
    //         //создаём копию объекта
    //         let stateCopy = {...state};
    //         //добираемся до вложенного массива
    //         stateCopy.postData = [...state.postData];
    //         //добавляем посты уже в новую копию
    //         stateCopy.postData.push(newPost);
    //         if (stateCopy.newPostData === ""){stateCopy.postData.pop(newPost)};
    //         stateCopy.newPostData = "";
    //         return stateCopy;
    //     }
    //     case UPDATE_POST_CHANGE:{
    //         let stateCopy = {...state};
    //         // stateCopy.postData = [...state.postData];
    //         stateCopy.newPostData = action.newText;
    //         return stateCopy;
    //     }
    //     default:
    //         return state;
    // }
    
    ///переписываем оптимизируя
    switch (action.type) {
        // убрали после того как добавили форму
        // case UPDATE_POST_CHANGE:
        //     return {
        //         ...state,
        //         newPostData: action.newText
        //     };
        case ADD_POST_BLL:
            let newPost = {
                id: 5, 
                // заменили после того как добавили форму
                // text: state.newPostData, 
                text: action.newTextPost, 
                like: 50,
            };
            // if (newPost === ""){state.myPostsPage.postData.slice(newPost)};
            return {
                ...state,
                // убрали после того как добавили форму
                // newPostData: "",
                postData: [...state.postData, newPost]
                // реализовать не добавлять пустой textarea
                //if (state.myPostsPage.newPostData === ""){state.myPostsPage.postData.pop(newPost)};
            };
        default:
            return state;
    }
}

// заменили после того как добавили форму
// export const addPostUIActionCreator = () => ({type: ADD_POST_BLL})
export const addPostUIActionCreator = (newTextPost) => ({type: ADD_POST_BLL, newTextPost})
// убрали после того как добавили форму
// export const postChangeActionCreator = (text) => ({type: UPDATE_POST_CHANGE, newText: text})

export default myPostReducer;

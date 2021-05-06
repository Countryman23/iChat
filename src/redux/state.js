const ADD_POST_BLL = "ADD-POST-BLL";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";
// import {reRenderEntireTree} from './render'; октлючили импорт, так как убрали render.js

//создали локально reRenderEntireTree
// let reRenderEntireTree = () => {
//     console.log("state change")
// }

//перенесли в store
// const state = {
//     myPostsPage: {
//         postData: [
//             { id: 1, text: "text1", like: 10 },
//             { id: 2, text: "text2", like: 20 },
//             { id: 3, text: "Bi", like: 30 },
//             { id: 4, text: "Mi", like: 40 }
//         ],
//         // создали newPostData для принятия новых значений поля textarea
//         newPostData: "hard code textarea",
//     },
        
//     messagesPage: {
//         MesDataName: [
//             {id: 1, name: "name1"},
//             {id: 2, name: "name2"},
//             {id: 3, name: "name3"},
//             {id: 4, name: "name4"}
//         ],
//         MesDataItem: [
//             {id: 1, item: "item1"},
//             {id: 2, item: "item2"},
//             {id: 3, item: "item3"},
//             {id: 4, item: "item4"}
//         ]
//     }
// }

// создали функцию, которая будет добавлять новый пост в postData
// экспортируем не по дефолту
// удалили аргумент postMessage, будем брать его через state
// export let addPostBLL = () => {
//         let newPost = {
//         id: 5, 
//         // удалили postMessage, будем брать его через state
//         // text: postMessage, 
//         text: state.myPostsPage.newPostData, 
//         like: 50,
//     }
//     state.myPostsPage.postData.push(newPost);
//     // попробовать реализоть не добавлять пустой textarea
//     // if (newPost.text === ""){alert("hi")};
//     //очищаем поле textarea
//     state.myPostsPage.newPostData = "";
//     // обновляем страницу с новыми данными
//     reRenderEntireTree(state);
// };
// получаем значение newText и перезаписываем в newPostData 
// export let updatePostChange = (newText) => {
//     state.myPostsPage.newPostData = newText;
//     reRenderEntireTree(state);
// };

// функция для импорта reRenderEntireTree
// export const subscribe = (observer) => {
//     //observer наблюдает за запросом рендеринга
//     reRenderEntireTree = observer;
// }; // из index.js вызываем subscribe(reRenderEntireTree)
    // затем она запускается тут (пока не могу понять почему reRenderEntireTree не подставляется в качестве аргумента observer)
    // reRenderEntireTree = observer присваевается переменной let reRenderEntireTree
    // вместо аргумента observer принимается reRenderEntireTree
    // в итоге в index.js вызываем subscribe с переданной "настоящей функцией"(reRenderEntireTree) которая запускается в index.js

    //уже экспортируем store
// export default state

// упаковываем всё в один объект
let store = {
    // _ это означает что эта ссылка приватная
    _state: {
        myPostsPage: {
            postData: [
                { id: 1, text: "text1", like: 10 },
                { id: 2, text: "text2", like: 20 },
                { id: 3, text: "Bi", like: 30 },
                { id: 4, text: "Mi", like: 40 }
            ],
            // создали newPostData для принятия новых значений поля textarea
            newPostData: "hard code textarea",
        },
            
        messagesPage: {
            MesDataName: [
                {id: 1, name: "name1"},
                {id: 2, name: "name2"},
                {id: 3, name: "name3"},
                {id: 4, name: "name4"}
            ],
            MesDataItem: [
                {id: 1, item: "item1"},
                {id: 2, item: "item2"},
                {id: 3, item: "item3"},
                {id: 4, item: "item4"}
            ]
        }
    },
    // заменили название reRenderEntireTree()
    _callSubscriber() {
        console.log("state change")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        //observer наблюдает за запросом рендеринга
        this._callSubscriber = observer;
    },
        // делаем эти методы приватными для dispatch
    // _addPostBLL() {
    //     let newPost = {
    //     id: 5, 
    //     // удалили postMessage, будем брать его через state
    //     // text: postMessage, 
    //     text: this._state.myPostsPage.newPostData, 
    //     like: 50,
    //     }
    //     this._state.myPostsPage.postData.push(newPost);
    // // // не добавлять пустой textarea
    // if (this._state.myPostsPage.newPostData === ""){this._state.myPostsPage.postData.pop(newPost)};
    // // //очищаем поле textarea
    // this._state.myPostsPage.newPostData = "";
    // // // обновляем страницу с новыми данными через reRenderEntireTree
    // this._callSubscriber(this._state);
    // },
    // // передали этот метод в dispatch
    // _updatePostChange(newText) {
    //     // this._state.myPostsPage.newPostData = newText;
    //     // this._callSubscriber(this._state); // вызываем reRenderEntireTree
    // },

    // убрали приватность, передали эти методы в метод dispatch
    // addPostBLL() {
    //     let newPost = {
    //     id: 5, 
    //     // удалили postMessage, будем брать его через state
    //     // text: postMessage, 
    //     text: this._state.myPostsPage.newPostData, 
    //     like: 50,
    //     }
    //     this._state.myPostsPage.postData.push(newPost);
    // // не добавлять пустой textarea
    // if (this._state.myPostsPage.newPostData === ""){this._state.myPostsPage.postData.pop(newPost)};
    // //очищаем поле textarea
    // this._state.myPostsPage.newPostData = "";
    // // обновляем страницу с новыми данными через reRenderEntireTree
    // this._callSubscriber(this._state);
    // },
    // передали этот метод в dispatch
    // updatePostChange(newText) {
    //     // this._state.myPostsPage.newPostData = newText;
    //     // this._callSubscriber(this._state); // вызываем reRenderEntireTree
    // },

    // теперь всё что нужно менять внутри store, меняем через этот метод dispatch
    dispatch(action){
        // пример когда методы приватные
        // if (action.type === "ADD-POST-BLL") {
        //     this.addPostBLL();
        // } else if (action.type === "UPDATE-POST-CHANGE") {
        //     this._updatePostChange(action.newText)
        // }
        
        if (action.type === ADD_POST_BLL) {
            {let newPost = {
                id: 5, 
                // удалили postMessage, будем брать его через state
                // text: postMessage, 
                text: this._state.myPostsPage.newPostData, 
                like: 50,
                }
                this._state.myPostsPage.postData.push(newPost);
            // не добавлять пустой textarea
            if (this._state.myPostsPage.newPostData === ""){this._state.myPostsPage.postData.pop(newPost)};
            //очищаем поле textarea
            this._state.myPostsPage.newPostData = "";
            // обновляем страницу с новыми данными через reRenderEntireTree
            this._callSubscriber(this._state);
            }
        } else if (action.type === UPDATE_POST_CHANGE) {
            //добавили action к newText, так как этот параметр больше не может прийти через updatePostChange(newText)
            this._state.myPostsPage.newPostData = action.newText;
            this._callSubscriber(this._state); // вызываем reRenderEntireTree
        }
    }
}

// // вспомогательная функция
// export const addPostUIActionCreator = () => {
//     return {
//         type: ADD_POST_BLL
//     }
// }
// // вспомогательная функция
// export const postChangeActionCreator = (text) => {
//     return {
//         type: UPDATE_POST_CHANGE, newText: text
//     }
// }
// вспомогательная функция
//переписываем в одну строку
export const addPostUIActionCreator = () => ({type: ADD_POST_BLL})
export const postChangeActionCreator = (text) => ({type: UPDATE_POST_CHANGE, newText: text})

window.store = store;

export default store

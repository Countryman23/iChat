// import {reRenderEntireTree} from './render'; октлючили импорт, так как убрали render.js

//создали локально reRenderEntireTree
let reRenderEntireTree = () => {
    console.log("State")
}

const state = {
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
}

window.state = state;

// создали функцию, которая будет добавлять новый пост в postData
// экспортируем не по дефолту
// удалили аргумент postMessage, будем брать его через state
export let addPostBLL = () => {
        let newPost = {
        id: 5, 
        // удалили postMessage, будем брать его через state
        // text: postMessage, 
        text: state.myPostsPage.newPostData, 
        like: 50,
    }
    state.myPostsPage.postData.push(newPost);
    // попробовать реализоть не добавлять пустой textarea
    // if (newPost.text === ""){alert("hi")};
    //очищаем поле textarea
    state.myPostsPage.newPostData = "";
    // обновляем страницу с новыми данными
    reRenderEntireTree(state);
};
// получаем значение newText и перезаписываем в newPostData 
export let updatePostChange = (newText) => {
    state.myPostsPage.newPostData = newText;
    reRenderEntireTree(state);
};

// функция для импорта reRenderEntireTree
export const subscribe = (observer) => {
    //observer наблюдает за запросом рендеринга
    reRenderEntireTree = observer;
}; // из index.js вызываем subscribe(reRenderEntireTree)
    // затем она запускается тут (пока не могу понять почему reRenderEntireTree не подставляется в качестве аргумента observer)
    // reRenderEntireTree = observer присваевается переменной let reRenderEntireTree
    // вместо аргумента observer принимается reRenderEntireTree
    // в итоге в index.js вызываем subscribe с переданной "настоящей функцией"(reRenderEntireTree) которая запускается в index.js

export default state

import {reRenderEntireTree} from './render';

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
// создали функцию, которая будет добавлять новый пост в postData
// экспортируем не по дефолту
export let addPostBLL = (postMessage) => {
        let newPost = {
        id: 5, 
        text: postMessage, 
        like: 50,
    }
    state.myPostsPage.postData.push(newPost);
    // обновляем страницу с новыми данными
    reRenderEntireTree(state);
};

export let updatePostChange = (newText) => {
    state.myPostsPage.newPostData = newText;
    reRenderEntireTree(state);
};

export default state

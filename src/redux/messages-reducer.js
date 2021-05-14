//добавляем так же как в state.js
const ADD_MESSAGE_BUTTON_BLL = "ADD-MESSAGE-BUTTON-BLL";
const UPDATE_TEXT_MESSAGE_CHANGE = "UPDATE-TEXT-MESSAGE-CHANGE";

let initialState = {
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
    ],
    newMessageData: "hard code message",
};

export const messagesReducer = (state = initialState, action) => {
    // if (action.type === ADD_MESSAGE_BUTTON_BLL) {
    //     {
    //         let newMessage = {
    //             id: 5,
    //             item: state.newMessageData
    //         }
    //         state.MesDataItem.push(newMessage);
    //         if (state.newMessageData === "") {state.MesDataItem.pop(newMessage) };
    //         state.newMessageData = "";
    //         // this._callSubscriber(this._state);
    //     }
    // } else if (action.type === UPDATE_TEXT_MESSAGE_CHANGE) {
    //     state.newMessageData = action.newMessage;
    //     // this._callSubscriber(this._state);
    // }
    //когда у нас дискретный(не бесконечный) набор чисел, можно применять switch
    // switch (action.type) {
    //     case ADD_MESSAGE_BUTTON_BLL:{
    //         let newMessage = {
    //             id: 5,
    //             item: state.newMessageData
    //         };
    //         let stateCopy = {
    //             ...state,
    //             MesDataItem: [...state.MesDataItem]
    //         };
    //         stateCopy.MesDataItem.push(newMessage);
    //         if (stateCopy.newMessageData === "") { stateCopy.MesDataItem.pop(newMessage) };
    //         stateCopy.newMessageData = "";
    //         //возвращаем изменения
    //         return stateCopy;
    //     }
    //     case UPDATE_TEXT_MESSAGE_CHANGE:{
    //         let stateCopy = {...state};
    //         stateCopy.newMessageData = action.newMessage;
    //         //возвращаем изменения
    //         return stateCopy;
    //     }
    //     //если ничего не изменилось то возвращаем старый state
    //     default:
    //         return state;
    // }
    //переносим return в каждый case
    // return state;

    //переписываем оптимизируя
    switch (action.type) {
        case UPDATE_TEXT_MESSAGE_CHANGE:
                return {
                    ...state,
                    newMessageData: action.newMessage, //модифицируем копию
                };
        case ADD_MESSAGE_BUTTON_BLL:
            let newMessage = state.newMessageData; //достаём текст
            return {
                ...state,
                newMessageData: "", //затираем
                MesDataItem: [...state.MesDataItem, {id:5, item: newMessage}] //такой синтаксис push ...., {id:5, item: newMessage} 
            };
        //если ничего не изменилось то возвращаем старый state
        default:
            return state;
    }
}

export const addMessageButtonUIAC = () => ({type: ADD_MESSAGE_BUTTON_BLL})
export const textChangeAC = (text) => ({type: UPDATE_TEXT_MESSAGE_CHANGE, newMessage: text})

export default messagesReducer;


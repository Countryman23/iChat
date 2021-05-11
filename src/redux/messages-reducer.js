//добавляем так же как в state.js
const ADD_MESSAGE_BUTTON_BLL = "ADD-MESSAGE-BUTTON-BLL";
const UPDATE_TEXT_MESSAGE_CHANGE = "UPDATE-TEXT-MESSAGE-CHANGE";

export const messagesReducer = (state, action) => {
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
    switch (action.type) {
        case ADD_MESSAGE_BUTTON_BLL:
            let newMessage = {
                id: 5,
                item: state.newMessageData
            };
            state.MesDataItem.push(newMessage);
            if (state.newMessageData === "") { state.MesDataItem.pop(newMessage) };
            state.newMessageData = "";
            //возвращаем изменения
            return state;
        case UPDATE_TEXT_MESSAGE_CHANGE:
            state.newMessageData = action.newMessage;
            //возвращаем изменения
            return state;
        //если ничего не изменилось то возвращаем старый state
        default:
            return state;
    }
    //переносим return в каждый case
    // return state;
}

export const addMessageButtonUIAC = () => ({type: ADD_MESSAGE_BUTTON_BLL})
export const textChangeAC = (text) => ({type: UPDATE_TEXT_MESSAGE_CHANGE, newMessage: text})

export default messagesReducer;


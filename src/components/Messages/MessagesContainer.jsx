// изменили после того как добавили форму
// import {addMessageButtonUIAC, textChangeAC} from "../../redux/messages-reducer";
import {addMessageButtonUIAC} from "../../redux/messages-reducer";
import Messages from "./Messages";
import { connect } from 'react-redux';

//1
// const MessagesContainer = (props) => {
//     //идёт в 3
//     let onTextChange = (text) => {
//         props.newState.dispatch(textChangeAC(text))
//     }
//     //идёт в 4
//     let addMessageButtonUI = () => {
//         props.newState.dispatch(addMessageButtonUIAC());
//     }
    
//     let state = props.newState.getState();
//     //2
//     return (
//         <Messages updateTextChange = {onTextChange}
//                 addMessageButtonBLL = {addMessageButtonUI}
//                 MesDataItem = {state.messagesPage.MesDataItem}
//                 newMessageData = {state.messagesPage.newMessageData}
//                 MesDataName = {state.messagesPage.MesDataName} />
//         )
// };

const mapStateToProps = (state) => {
    return {
        MesDataName: state.messagesPage.MesDataName,
        MesDataItem: state.messagesPage.MesDataItem,
        newMessageData: state.messagesPage.newMessageData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // убрали после того как добавили форму
        // updateTextChange: (text) => {
        //     dispatch(textChangeAC(text));
        // },

        // заменили после того как добавили форму
        // addMessageButtonBLL: () => {
        //     dispatch(addMessageButtonUIAC());
        // }
        addMessageButtonBLL: (newTextMessage) => {
            dispatch(addMessageButtonUIAC(newTextMessage));
        }
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;

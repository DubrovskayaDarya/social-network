import {ActionTypes, messagePageType} from "../store";

export const messageReducer = (state: messagePageType, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            let newM = {
                id: 1,
                name: 'Dasha',
                link: '/dialogs/Dasha',
                message: state.newMessage
            };
            state.dialogs.push(newM);
            return state;
        case "UPDATE-NEW-MESSAGE":
            if (action.message != null) {
                state.newMessage = action.message
            }
            return state;
        default:
            return state
    }
};

// Action Types
export type addNewMessageActionType = {
    type: "ADD-NEW-MESSAGE"
}
export type updateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE"
    message: string
}

// AC
export const addMessageAC = (): addNewMessageActionType => ({type: "ADD-NEW-MESSAGE"})
export const updateNewMessageAC = (message: string): updateNewMessageActionType => ({type: "UPDATE-NEW-MESSAGE", message: message})

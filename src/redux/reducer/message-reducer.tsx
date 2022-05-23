import {ActionTypes, messagePageType} from "../store";

const initialState = {
    newMessage: "",
    dialogs: [{
        id: 1,
        name: 'Dasha',
        link: '/dialogs/Dasha',
        message: "Hi"
    },
        {
            id: 2,
            name: 'Sasha',
            link: '/dialogs/Sasha',
            message: "Lol"
        },
        {
            id: 3,
            name: 'Nastya',
            link: '/dialogs/Nastya',
            message: "How are you?"
        },
        {
            id: 4,
            name: 'Denis',
            link: '/dialogs/Denis',
            message: ";)"
        },
        {
            id: 5,
            name: 'Roman',
            link: '/dialogs/Roman',
            message: "I love you!"
        }]
};

export const messageReducer = (state: messagePageType = initialState, action: ActionTypes) => {
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

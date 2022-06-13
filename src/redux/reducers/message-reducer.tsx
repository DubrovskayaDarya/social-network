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
        case "ADD-NEW-MESSAGE": {
            let newM = {
                id: 1,
                name: 'Dasha',
                link: '/dialogs/Dasha',
                message: state.newMessage
            };
            let stateCopy = {...state};
            stateCopy.dialogs = [...state.dialogs];
            stateCopy.dialogs.push(newM);
            return stateCopy;
        }
        case "UPDATE-NEW-MESSAGE": {
            let stateCopy = {...state}
            if (action.message != null) {
                stateCopy.newMessage = action.message
            }
            return stateCopy;
        }
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
export const updateNewMessageAC = (message: string): updateNewMessageActionType => ({
    type: "UPDATE-NEW-MESSAGE",
    message: message
})

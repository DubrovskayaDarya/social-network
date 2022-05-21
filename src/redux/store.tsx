import {v1} from "uuid";
import {addPostActionType, profileReducer, updateNewPostActionType} from "./reducer/profile-reducer";
import {addNewMessageActionType, messageReducer, updateNewMessageActionType} from "./reducer/message-reducer";

//Types
export type postItemsInitialType = {
    id: string,
    message: string,
    likes: number,
    avatar: string
};
export type DialogsType = {
    id: number,
    name: string,
    link: string,
    message: string
};
export type profilePageType = {
    profileInfo: string,
    postItemsInitial: Array<postItemsInitialType>,
    newPostText: string
};
export type messagePageType = {
    newMessage: string
    dialogs: Array<DialogsType>
};
export type RootStateType = {
    profilePage: profilePageType,
    messagePage: messagePageType
};
export type ActionTypes =
    addPostActionType
    | updateNewPostActionType
    | addNewMessageActionType
    | updateNewMessageActionType
export type RootStoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    subscriber: (observer: (state: RootStateType) => void) => void,
    _callSubscriber: (state: RootStateType) => void,
    dispatch: (action: ActionTypes) => void
}


//Store
export let store: RootStoreType = {
    _state: {
        profilePage: {
            profileInfo: 'My name is Dari. I am Front-end developer!',
            postItemsInitial: [{
                id: v1(),
                message: 'Hello! Today is the first day of May',
                likes: 0,
                avatar: 'http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg'
            }],
            newPostText: 'How are u?',
        },
        messagePage: {
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
        }
    },
    _callSubscriber(state: RootStateType) {
    },

    getState() {
        return this._state
    },
    subscriber(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._callSubscriber(this._state)
    }
}

import {v1} from "uuid";

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
export type ActionTypes = addPostActionType | updateNewPostActionType | addNewMessageActionType | updateNewMessageActionType
export type RootStoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    subscriber: (observer: (state: RootStateType) => void) => void,
    _callSubscriber: (state: RootStateType) => void,
    dispatch: (action: ActionTypes) => void
}

// Action Types
type addPostActionType = {
    type: "ADD-POST"
}
type addNewMessageActionType = {
    type: "ADD-NEW-MESSAGE"
}
type updateNewPostActionType = {
    type: "UPDATE-NEW-POST"
    post: string
}
type updateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE"
    message: string
}

// AC
export const addPostAC = (): addPostActionType => ({type: "ADD-POST"})
export const addMessageAC = (): addNewMessageActionType => ({type: "ADD-NEW-MESSAGE"})
export const updateNewPostAC = (post: string): updateNewPostActionType => ({type: "UPDATE-NEW-POST", post: post})
export const updateNewMessageAC = (message: string): updateNewMessageActionType => ({type: "UPDATE-NEW-MESSAGE", message: message})


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
        if (action.type === "ADD-POST") {
            let newPost: postItemsInitialType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                avatar: 'http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg',
                likes: 0
            }
            this._state.profilePage.postItemsInitial.unshift(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST") {
            if (action.post != null) {
                this._state.profilePage.newPostText = action.post;
            }
            this._callSubscriber(this._state);
        } else if (action.type === "ADD-NEW-MESSAGE"){
            let newM = {
                id: 1,
                name: 'Dasha',
                link: '/dialogs/Dasha',
                message: this._state.messagePage.newMessage
            };
            this._state.messagePage.dialogs.push(newM);
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-MESSAGE"){
            if (action.message != null) {
                this._state.messagePage.newMessage = action.message;
            }
            this._callSubscriber(this._state);
        }
            }
}

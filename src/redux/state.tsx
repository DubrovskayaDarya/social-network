import {v1} from "uuid";
import {rerenderTree} from "../render";


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
    dialogs: Array<DialogsType>
};
export type RootStateType = {
    profilePage: profilePageType,
    messagePage: messagePageType
};

//State
const AVATAR_URL: string = 'http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg';
export let state: RootStateType = {
    profilePage: {
        profileInfo: 'My name is Dari. I am Front-end developer!',
        postItemsInitial: [{
            id: v1(),
            message: 'Hello! Today is the first day of May',
            likes: 0,
            avatar: AVATAR_URL
        }],
        newPostText: 'How are u?',
    },
    messagePage: {
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
};

//Functions
export const addPost = () => {
    let newPost: postItemsInitialType = {
        id: v1(),
        message: state.profilePage.newPostText,
        avatar: AVATAR_URL,
        likes: 0
    }
    state.profilePage.postItemsInitial.unshift(newPost);
    rerenderTree(state);
};
export const updateNewPost = (post: string) => {
    state.profilePage.newPostText = post;
    rerenderTree(state);
}

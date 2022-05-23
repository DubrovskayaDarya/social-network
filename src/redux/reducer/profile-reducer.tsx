import {ActionTypes, postItemsInitialType, profilePageType} from "../store";
import {v1} from "uuid";

const initialState =  {
    profileInfo: 'My name is Dari. I am Front-end developer!',
    postItemsInitial: [{
        id: v1(),
        message: 'Hello! Today is the first day of May',
        likes: 0,
        avatar: 'http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg'
    }],
    newPostText: 'How are u?',
    background: 'https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?t=st=1650550407~exp=1650551007~hmac=e4a15e8a4f13dc52022bdbe9c7cd16492222d7c6a293ab91a398af0bfdfaac4a&w=740'
};

export const profileReducer = (state: profilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: postItemsInitialType = {
                id: v1(),
                message: state.newPostText,
                avatar: 'http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg',
                likes: 0
            }
            state.postItemsInitial.unshift(newPost);
            return state;
        case "UPDATE-NEW-POST":
            if (action.post != null) {
                state.newPostText = action.post;
            }
            return state
        default:
            return state
    }
};


// Action Types
export type addPostActionType = {
    type: "ADD-POST"
};
export type updateNewPostActionType = {
    type: "UPDATE-NEW-POST"
    post: string
};

// Action Creators
export const addPostAC = (): addPostActionType => ({type: "ADD-POST"});
export const updateNewPostAC = (post: string): updateNewPostActionType => ({type: "UPDATE-NEW-POST", post: post});
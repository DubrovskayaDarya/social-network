import {ActionTypes, postItemsInitialType, profilePageType} from "../store";
import {v1} from "uuid";


export const profileReducer = (state: profilePageType, action: ActionTypes) => {
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
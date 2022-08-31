import {ActionTypes, postItemsInitialType, profilePageType} from "../store/store";
import {v1} from "uuid";

const initialState =  {
    user: null,
    profileInfo: 'My name is Dari. I am Front-end developer!',
    defaultAvatar: 'http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg',
    postItemsInitial:
        [{
        id: v1(),
        message: 'Hello! Today is the first day of May',
        likes: 0,
        avatar: 'http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg'
    }],
    newPostText: 'How are u?',
    background: 'https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?t=st=1650550407~exp=1650551007~hmac=e4a15e8a4f13dc52022bdbe9c7cd16492222d7c6a293ab91a398af0bfdfaac4a&w=740'
};

export const profileReducer = (state: profilePageType = initialState, action: ActionTypes) => {

    let stateCopy = {...state, postItemsInitial: [...state.postItemsInitial]}

    switch (action.type) {
        case "ADD-POST": {
            let newPost: postItemsInitialType = {
                id: v1(),
                message: state.newPostText,
                avatar: 'http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg',
                likes: 0
            };
            stateCopy.postItemsInitial.unshift(newPost);
            return stateCopy;
        }
        case "UPDATE-NEW-POST": {
            if (action.post != null) {
                stateCopy.newPostText = action.post;
            }
            return stateCopy
        }
        case "SET_USER_PROFILE": {
            return {
                ...state,
                user: action.user
            }
        }

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
export type setUserToProfileActionType = {
    type: "SET_USER_PROFILE"
    user: UserProfileType
};

// Action Creators
export const addPostAC = (): addPostActionType => ({type: "ADD-POST"});
export const updateNewPostAC = (post: string): updateNewPostActionType => ({type: "UPDATE-NEW-POST", post});
export const setUserToProfile = (user: UserProfileType): setUserToProfileActionType => ({type: "SET_USER_PROFILE", user});

export type UserProfileType = {
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    contacts: UserProfileContactsType
    aboutMe: string
    photos: UserProfilePhotosType
}
type UserProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
};
type UserProfilePhotosType = {
    small: string | null,
    large: string | null
}
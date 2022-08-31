import {
    addPostActionType,
    profileReducer,
    setUserToProfileActionType,
    updateNewPostActionType
} from "../reducers/profile-reducer";
import {addNewMessageActionType, messageReducer, updateNewMessageActionType} from "../reducers/message-reducer";
import {
    followUserActionType, setCurrentPageActionType, setTotalCountActionType,
    setUsersActionType,
    showMoreUsersActionType, toggleIsFetchingActionType,
    unfollowUserActionType
} from "../reducers/users-reducer";
import {setAuthUserDataActionType} from "../reducers/auth-reducer";

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
    defaultAvatar: string,
    postItemsInitial: Array<postItemsInitialType>,
    newPostText: string,
    background: string
};
export type messagePageType = {
    newMessage: string
    dialogs: Array<DialogsType>
};

export type ActionTypes =
    addPostActionType
    | updateNewPostActionType
    | addNewMessageActionType
    | updateNewMessageActionType
    | showMoreUsersActionType
    | followUserActionType
    | unfollowUserActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalCountActionType
    | toggleIsFetchingActionType
    | setUserToProfileActionType
    | setAuthUserDataActionType


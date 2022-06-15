import {addPostActionType, profileReducer, updateNewPostActionType} from "./reducers/profile-reducer";
import {addNewMessageActionType, messageReducer, updateNewMessageActionType} from "./reducers/message-reducer";
import {
    followUserActionType,
    setUsersActionType,
    showMoreUsersActionType,
    unfollowUserActionType
} from "./reducers/users-reducer";

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
    newPostText: string,
    background: string
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
    | showMoreUsersActionType
    | followUserActionType
    | unfollowUserActionType
    | setUsersActionType
export type RootStoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    subscriber: (observer: (state: RootStateType) => void) => void,
    _callSubscriber: (state: RootStateType) => void,
    dispatch: (action: ActionTypes) => void
}

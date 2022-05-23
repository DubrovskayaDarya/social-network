import React from "react";
import {store} from "../../../redux/redux-store";
import {addPostAC, updateNewPostAC} from "../../../redux/reducer/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerType = {}

export const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
    let state = store.getState()

    const updateNewPost = (text: string) => {
        store.dispatch(updateNewPostAC(text))
    };

    const addPost = () => {
        store.dispatch(addPostAC())
    }

    return (
        <MyPosts
            updateNewPost={updateNewPost}
            addPost = {addPost}
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.postItemsInitial}/>
    )
}

import React from "react";
import {addPostAC, updateNewPostAC} from "../../../redux/reducers/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.postItemsInitial
    }
};

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPost: (text: string) => {
            dispatch(updateNewPostAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
        }
    }

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

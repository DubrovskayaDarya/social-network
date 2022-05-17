import React, {MouseEvent, useState, KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ActionType, postItemsInitialType} from "../../../redux/store";

type MyPostsType = {
    dispatch: (action: ActionType) => void,
    newPostText: string,
    posts: Array<postItemsInitialType>
}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    let newPost = React.createRef<HTMLInputElement>()
    let [like, setLike] = useState(0)

    const onClickLikeHandler = (e: MouseEvent<HTMLButtonElement>) => {
        setLike(like + 1)
    }
    const onChangeAddPostHandler = () => {
        if (newPost.current == null) {
            return;
        }
        props.dispatch({type: "UPDATE-NEW-POST", post: newPost.current.value})
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter' && newPost.current != null) {
            props.dispatch({type: "ADD-POST"})
        }
    }
    const onClickAddPostHandler = () => {
        props.dispatch({type: "UPDATE-NEW-POST", post: ''});
    }


    const addPostHandler = (e: MouseEvent<HTMLButtonElement>) => {
        if (newPost.current == null) {
            return;
        }
        props.dispatch({type: "ADD-POST"})
    }

    return (
        <>
            <div className={s.myPosts}>
                <h1>My Posts</h1>
                <input
                    ref={newPost}
                    value={props.newPostText}
                    onClick={onClickAddPostHandler}
                    onChange={onChangeAddPostHandler}
                    onKeyPress={onKeyPressHandler}/>
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            <Post posts={props.posts} callback={onClickLikeHandler}/>

        </>
    )
}

import React, {MouseEvent, useState, KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {postItemsInitialType} from "../../../redux/store";

type MyPostsType = {
    updateNewPost: (text: string)=>void,
    addPost: ()=>void,
    newPostText: string,
    posts: Array<postItemsInitialType>
}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    let newPost = React.createRef<HTMLInputElement>()

    let [like, setLike] = useState(0)
    const onClickLikeHandler = (e: MouseEvent<HTMLButtonElement>) => {
        setLike(like + 1)
    }

    const onClickAddPostHandler = () => {
        props.updateNewPost('');
    }
    const onChangeAddPostHandler = () => {
        if (newPost.current == null) {
            return;
        }
        props.updateNewPost(newPost.current.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter' && newPost.current != null) {
            props.addPost()
        }
    }
    const addPostHandler = (e: MouseEvent<HTMLButtonElement>) => {
        if (newPost.current == null) {
            return;
        }
        props.addPost()
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

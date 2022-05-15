import React, {MouseEvent, useState, KeyboardEvent} from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {postItemsInitialType} from "../../../redux/store";

type MyPostsType = {
    addPost: (value: string) => void,
    updatePost: (post: string) => void,
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
        props.updatePost(newPost.current.value);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter' && newPost.current != null) {
            props.addPost(newPost.current.value);
        }
    }
    const onClickAddPostHandler = () => {
        props.updatePost('');
    }


    const addPostHandler = (e: MouseEvent<HTMLButtonElement>) => {
        if (newPost.current == null) {
            return;
        }
        props.addPost(newPost.current.value);
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

import React, {MouseEvent, useState, ChangeEvent, KeyboardEvent} from "react";
import {v1} from "uuid";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export type postsItemsType = {
    id: string,
    message: string,
    avatar: string,
    likes: number
}
type MyPostsType = {
    data: Array<postsItemsType>
}

export const MyPosts = (props: MyPostsType) => {
    let [postsItems, setPostsItems] = useState<Array<postsItemsType>>(props.data)
    let [post, setPost] = useState('')
    let [like, setLike] = useState(0)

    const onClickLikeHandler = (e: MouseEvent<HTMLButtonElement>) => {
        setLike(like + 1)
    }
    const onChangeAddPostHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost(e.currentTarget.value)
    }
    const AddPost = (message: string) => {
        let newPost = {
            id: v1(),
            message: message,
            avatar: 'http://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg',
            likes: 0
        }
        let newPosts = [newPost, ...postsItems]
        setPostsItems(newPosts)
        setPost('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode == 13) {
            AddPost(post)
        }
    }
    const AddPostHandler = (e: MouseEvent<HTMLButtonElement>) => {
        AddPost(post)
    }

    return (
        <>
            <div className={s.myPosts}>
                <h1>My Posts</h1>
                <input value={post} onChange={onChangeAddPostHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={AddPostHandler}>Add Post</button>
            </div>
            <Post data={postsItems} callback={onClickLikeHandler}/>

        </>
    )
}

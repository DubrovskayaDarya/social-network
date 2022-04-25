import React, {useState} from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export type MessagesType = {message: string}

export const MyPosts = () => {
    let Messages: Array<MessagesType> = [{message:"I love Roman"}, {message:"I love Richard"}, {message:"I love Nastya"}]
    let [likes, setLikes] = useState<number>(0)

    const onclickLikesHandler = () => {
        let newLike = likes + 1
        setLikes(newLike)
    }

    return (
        <div className={s.myPosts}>
            <div><h3>My Posts</h3></div>
            <div>
                <Post message={Messages} likesCount={likes} callback={onclickLikesHandler}/>
            </div>
        </div>
    )
}

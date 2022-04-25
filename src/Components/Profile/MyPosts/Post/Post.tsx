import React from "react";
import s from './Post.module.css'
import {Avatar} from "./Avatar/Avatar";
import {MouseEvent} from "react";
import {MessagesType} from "../MyPosts";

type PostType = {
    message: Array<MessagesType>
    likesCount: number
    callback: (e:MouseEvent<HTMLButtonElement>)=>void
}

export const Post = (props:PostType)=> {


    return (
        <div>
            <div>
               {/*Avatar + Description*/}
                {props.message.map((t)=>{
                    return (
                        <div className={s.post}>{t.message}</div>)})}
                <button onClick={props.callback}><img className={s.like} src={'https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png'}/></button>
                {props.likesCount}
            </div>
            <div>
                {/*Posts*/}

            </div>
        </div>
    )
}
import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postItemsInitialType} from "../../redux/state";

type ProfileType = {
    addPost: (value: string) => void,
    posts: Array<postItemsInitialType>,
    newPostText: string,
    updatePost: (post: string) => void,
    profileInfo: string
}


export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <div>
                {/*Background*/}
                <img className={s.background}
                     src={'https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?t=st=1650550407~exp=1650551007~hmac=e4a15e8a4f13dc52022bdbe9c7cd16492222d7c6a293ab91a398af0bfdfaac4a&w=740'}/>
            </div>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <div>
                <MyPosts
                    newPostText={props.newPostText}
                    addPost={props.addPost}
                    posts={props.posts}
                    updatePost={props.updatePost}
                />
            </div>
        </div>
    )
}
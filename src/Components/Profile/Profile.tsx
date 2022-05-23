import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
    profileInfo: string,
    backgroundInfo: string
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <div>
                {/*Background*/}
                <img className={s.background}
                     src={props.backgroundInfo}/>
            </div>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}
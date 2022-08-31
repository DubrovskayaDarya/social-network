import React from "react";
import s from './Profile.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/reducers/profile-reducer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    backgroundInfo: string
    user: UserProfileType
    defaultAvatar: string
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <div>
                {/*Background*/}
                <img className={s.background}
                     src={props.backgroundInfo}
                     alt={'profile-background'}/>
            </div>
            <ProfileInfo user={props.user} defaultAvatar={props.defaultAvatar}/>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}
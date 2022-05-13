import React from "react";

type ProfileInfoType = {
    profileInfo: string
}

export const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div>{props.profileInfo}</div>
        </div>
    )
}
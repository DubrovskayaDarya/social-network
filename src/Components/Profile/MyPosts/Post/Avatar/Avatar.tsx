import React from "react";

type AvatarType = {
    image: any
}

export const Avatar = (props:AvatarType)=> {
    return (
        <div>
            <div>
               {/*Avatar*/}
               <div>{props.image}</div>
            </div>
        </div>
    )
}
import {ActionTypes} from "../store";

type locationType = {
    city: string
    country: string
}
type photosType = {
    small: string
    large: string
}
export type userType = {
    id: number
    photos: photosType
    name: string
    status: string
    location: locationType
    followed: boolean
}
type usersPageType = {
    users1: Array<userType>
}


let initialState = {
    users1: []
}

export const usersReducer = (state: usersPageType = initialState, action: ActionTypes) => {


    switch (action.type) {
        case "SHOW-MORE-USERS": {
            return state
        }
        case "FOLLOW-USER": {
            return {
                ...state,
                users1: state.users1.map((u) => {
                    return u.id === action.userId ? {...u, followed: true} : u
                })
            }
        }
        case "UNFOLLOW-USER": {
            return {
                ...state,
                users1: state.users1.map((u) => {
                    return u.id === action.userId ? {...u, followed: false} : u
                })
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                users1: [...state.users1, ...action.users]
            }
        }
        default: {
            return state
        }
    }
}

// Action Types
export type showMoreUsersActionType = {
    type: "SHOW-MORE-USERS"
};
export type followUserActionType = {
    type: "FOLLOW-USER"
    userId: number
};
export type unfollowUserActionType = {
    type: "UNFOLLOW-USER"
    userId: number
};
export type setUsersActionType = {
    type: "SET-USERS"
    users: Array<userType>
};


// Action Creators
export const showMoreUsersAC = (): showMoreUsersActionType => ({type: "SHOW-MORE-USERS"});
export const followUserAC = (userId: number): followUserActionType => ({type: "FOLLOW-USER", userId});
export const unfollowUserAC = (userId: number): unfollowUserActionType => ({type: "UNFOLLOW-USER", userId});
export const setUsersAC = (users: Array<userType>): setUsersActionType => ({type: "SET-USERS", users});


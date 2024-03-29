import {ActionTypes} from "../store/store";
import {Dispatch} from "redux";
import {socialNetworkAPI} from "../api/social-network-API";


// Constants
const SHOW_MORE_USERS = "SHOW_MORE_USERS";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


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
export type usersPageType = {
    users1: Array<userType>
    pageUsersSize: number
    totalUsersCount: number
    currentPage: number
}

// Initial State
let initialState = {
    users1: [],
    pageUsersSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}


// Users Reducer
export const usersReducer = (state: usersPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SHOW_MORE_USERS: {
            return state
        }
        case FOLLOW_USER: {
            return {
                ...state,
                users1: state.users1.map((u) => {
                    return u.id === action.userId ? {...u, followed: true} : u
                })
            }
        }
        case UNFOLLOW_USER: {
            return {
                ...state,
                users1: state.users1.map((u) => {
                    return u.id === action.userId ? {...u, followed: false} : u
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users1: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default: {
            return state
        }
    }
}

// Action Types
export type showMoreUsersActionType = {
    type: "SHOW_MORE_USERS"
};
export type followUserActionType = {
    type: "FOLLOW_USER"
    userId: number
};
export type unfollowUserActionType = {
    type: "UNFOLLOW_USER"
    userId: number
};
export type setUsersActionType = {
    type: "SET_USERS"
    users: Array<userType>
};
export type setCurrentPageActionType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export type setTotalCountActionType = {
    type: "SET_TOTAL_COUNT"
    totalCount: number
}
export type toggleIsFetchingActionType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}


// Action Creators
export const showMoreUsersAC = (): showMoreUsersActionType => ({type: SHOW_MORE_USERS});
export const followUser = (userId: number): followUserActionType => ({type: FOLLOW_USER, userId});
export const unfollowUser = (userId: number): unfollowUserActionType => ({type: UNFOLLOW_USER, userId});
export const setUsers = (users: Array<userType>): setUsersActionType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setUsersTotalCount = (totalCount: number): setTotalCountActionType => ({
    type: SET_TOTAL_COUNT,
    totalCount
});
export const setToggle = (isFetching: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});

//Thunk
export const fetchingUsersTC = (currentPage: number) => (dispatch: Dispatch) => {
    dispatch(setToggle(true))
    socialNetworkAPI.getUsers(currentPage)
        .then((res) => {
            dispatch(setUsers(res.data.items))
            dispatch(setToggle(false))
            dispatch(setUsersTotalCount(res.data.totalCount))
        })
}

export const followUserTC = (userId: number) => (dispatch: Dispatch) => {
    socialNetworkAPI.followUser(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(followUser(userId))
            } else {
                alert(JSON.stringify(res.data.messages))
            }
        })
}

export const unfollowUserTC = (userId: number) => (dispatch: Dispatch) => {
    socialNetworkAPI.unfollowUser(userId)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(unfollowUser(userId))
            } else {
                alert(JSON.stringify(res.data.messages))
            }
        })
}

export const onClickPageTC = (page: number) => (dispatch: Dispatch) => {

    dispatch(setCurrentPage(page));
    dispatch(setToggle(true));

    socialNetworkAPI.getUsers(page)
        .then(response => {
            dispatch(setToggle(false));
            dispatch(setUsers(response.data.items));
        })
}
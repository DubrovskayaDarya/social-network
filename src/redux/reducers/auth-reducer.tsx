import {ActionTypes} from "../store";

// Constants
const SET_USER_DATA = "SET_USER_DATA";

type authDataType = {
    id: null | number,
    email: null | string,
    login: null | string
}
type initialStateType = authDataType & {
    isAuth: boolean
}


// Initial State
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


// Users Reducer
export const authReducer = (state: initialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default: {
            return state
        }
    }
}

// Action Types
export type setAuthUserDataActionType = {
    type: "SET_USER_DATA",
    data: authDataType
};


// Action Creators
export const setAuthUserDataAC = (id: number, email: string, login: string): setAuthUserDataActionType => ({type: SET_USER_DATA, data: {id, email, login}});

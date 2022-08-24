import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {messageReducer} from "./reducers/message-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        messagePage: messageReducer,
        usersPage: usersReducer,
        authPage: authReducer
    }
);

export let store = createStore(reducers);
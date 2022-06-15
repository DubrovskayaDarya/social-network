import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {messageReducer} from "./reducers/message-reducer";
import {usersReducer} from "./reducers/users-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        messagePage: messageReducer,
        usersPage: usersReducer
    }
);

export let store = createStore(reducers);
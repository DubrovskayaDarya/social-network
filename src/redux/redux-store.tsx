import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducer/profile-reducer";
import {messageReducer} from "./reducer/message-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        messagePage: messageReducer
    }
);

export let store = createStore(reducers);
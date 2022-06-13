import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile-reducer";
import {messageReducer} from "./reducers/message-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        messagePage: messageReducer
    }
);

export let store = createStore(reducers);
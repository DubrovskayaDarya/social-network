import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "../reducers/profile-reducer";
import {messageReducer} from "../reducers/message-reducer";
import {usersReducer} from "../reducers/users-reducer";
import {authReducer} from "../reducers/auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
        profilePage: profileReducer,
        messagePage: messageReducer,
        usersPage: usersReducer,
        authPage: authReducer
    }
);

export let store = createStore(reducers, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof reducers>;

// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
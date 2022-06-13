import React from 'react';
import './index.css';
import {RootStateType} from "./redux/store";
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

export let rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <Provider store={store}>
        <App/>
        </Provider>,
        document.getElementById('root')
    )
};
rerenderTree(store.getState());
store.subscribe(()=>{
    let state = store.getState()
    rerenderTree(state)});

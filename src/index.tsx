import React from 'react';
import './index.css';
import {RootStateType} from "./redux/store";
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
            state={state}
        />,
        document.getElementById('root')
    )
};
rerenderTree(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    rerenderTree(state)});

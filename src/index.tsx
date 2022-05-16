import React from 'react';
import './index.css';
import {RootStateType, store} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";


export let rerenderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={store.addPost.bind(store)}
            updatePost={store.updateNewPost.bind(store)}
        />,
        document.getElementById('root')
    )
};
rerenderTree(store.getState());
store.subscriber(rerenderTree);

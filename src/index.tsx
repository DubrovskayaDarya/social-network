import React from 'react';
import './index.css';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";


export let rerenderTree = () => {
    ReactDOM.render(
        <App
            state={store._state}
            addPost={store.addPost}
            updatePost={store.updateNewPost}
        />,
        document.getElementById('root')
    )
};
rerenderTree();
store.subscriber(rerenderTree);

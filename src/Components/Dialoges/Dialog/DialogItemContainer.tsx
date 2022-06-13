import React from "react";
import {connect} from "react-redux";
import {DialogItem} from "./DialogItem";


let mapStateToProps = (state: any) => {
    return {
        dialogs: state.messagePage.dialogs
    }
};

let mapDispatchToProps = (dispatch: any) => {
    return {}
};

export const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem);

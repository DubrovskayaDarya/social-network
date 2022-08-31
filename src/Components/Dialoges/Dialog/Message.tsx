import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "../Dialogs.module.css";
import {
    DialogsType
} from "../../../redux/store/store";

type MessageType = {
    addMessage: () => void
    updateMessage: (text: string) => void
    messages: Array<DialogsType>
    setMessage: string
}

export const Message = (props: MessageType) => {
    let newMessage = React.createRef<HTMLInputElement>()

    const setMessageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (newMessage.current == null) {
            return;
        }
        props.updateMessage(newMessage.current.value);
    };
    const setMessageEnterKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter' && newMessage.current != null) {
            props.addMessage();
        }
    }
    const setMessageClickHandler = () => {
        props.addMessage();
    };
    const onClickAddMessageHandler = () => {
        props.updateMessage('');
    }


    return (
        <div>
            {props.messages.map((t) => {
                return (
                    <div className={s.space}>
                        <div className={s.messages}>
                            {t.message}
                        </div>
                    </div>)
            })}
            <span>
            <input
                ref={newMessage}
                value={props.setMessage}
                onClick={onClickAddMessageHandler}
                onChange={setMessageChangeHandler}
                onKeyPress={setMessageEnterKeyPressHandler}/>
                <button
                    onClick={setMessageClickHandler}>Send</button>
            </span>
        </div>
    )
}
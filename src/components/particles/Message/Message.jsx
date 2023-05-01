import React from 'react';
import {useFormattedDate} from "../../../hooks/useFormattedDate";

import "./Message.scss";

const Message = ({isAdmin, message, author, createdAt, isSelf}) => {
    const date = useFormattedDate(createdAt)

    if (isAdmin) {
        return (
            <div className="message message_admin">
                <div className="message__body">
                    <p>{message}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`message ${isSelf ? 'message_self' : ''}`}>
            <div className="message__top">
                <p className="message__author">
                    <strong>{author.username}</strong>, {date}
                </p>
            </div>

            <div className="message__body">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Message;
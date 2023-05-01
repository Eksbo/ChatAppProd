import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";

import io from 'socket.io-client';

import Message from "../../particles/Message/Message";

import "./Chat.scss";

export const Chat = ({id, idRoom}) => {
    const [messages, setMessages] = useState([]);

    const bodyRef = useRef();
    const textField = useRef();

    const user = useSelector(state => state.users.editUser);

    const token = localStorage.getItem('token');

    const socket = io(process.env.REACT_APP_API_URL, {
        extraHeaders: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    const getRoomMessages = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/rooms/${idRoom}/messages`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const messages = await response.json();

        setMessages(messages);
    };

    const joinRooms = async (rooms) => {
        await getRoomMessages();
        await new Promise((resolve) => socket.emit('join-rooms', {rooms}, resolve));
    };

    const leaveRooms = async (rooms) => {
        await new Promise((resolve) => socket.emit('leave-rooms', {rooms}, resolve));
    };

    const sendMessage = async (author, message, room) => {
        await new Promise((resolve) =>
            socket.emit("send-message", { author, message, room }, resolve)
        );
    };

    useEffect(() => {
        joinRooms([idRoom]);

        return () => {
            leaveRooms([idRoom]);
            socket.disconnect();
        };
    }, [idRoom]);


    useEffect(() => {
        socket.on('new-message', (message) => {
            setMessages(prevState => [...prevState, {_id: new Date().getTime(), isAdmin: false, author: {username: message.author.username, id: user._id}, createdAt: message.createdAt, message: message.message.message}])
        });

        socket.on('user-joined', ({ message }) => {
            setMessages(prevState => [...prevState, {_id: new Date().getTime(), isAdmin: true, message}])
        });

        socket.on('user-left', ({ message }) => {
            setMessages(prevState => [...prevState, {_id: new Date().getTime(), isAdmin: true, message}])
        });
    }, [idRoom]);

    useEffect(() => {
        const block = bodyRef.current;
        block.scrollTop = block.scrollHeight;

    }, [messages])

    const handleSendMessage = async (event) => {
        event.preventDefault();

        const room = idRoom;
        const author = user.username;
        const message = textField.current.value;

        textField.current.value = '';

        await sendMessage(author, message, room, null);
    };

    return (
        <section className="chat">
            <div className="chat__top">

            </div>

            <div
                ref={bodyRef}
                className="chat__body"
            >
                {messages.map(message =>
                    message.isAdmin ? (
                            <Message
                                key={message._id}
                                isAdmin={message.isAdmin}
                                message={message.message}
                            />
                        )
                        : (
                            <Message
                                key={message._id}
                                message={message.message}
                                isSelf={message.author.id === user._id}
                                author={message.author}
                                createdAt={message.createdAt}
                            />
                        )
                )}
            </div>

            <form
                className="chat__tools"
                onSubmit={handleSendMessage}
            >
                <input
                    className="chat__field"
                    defaultValue=""
                    ref={textField}
                    placeholder="Type your message..."
                    autoComplete="off"
                />

                <div className="chat__controls">
                    <button
                        className="chat__button"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </section>
    );
}



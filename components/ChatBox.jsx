"use client"
import React, { use, useEffect, useState } from 'react'
import { useChannel } from 'ably/react';
import styles from './styling/ChatBox.module.css'

const ChatBox = () => {
    const [sentMessages, setSentMessages] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);
    const messageTextIsEmpty = sentMessages.length === 0;

    let inputBox = null;
    let messageEnd = null;

    const { channel, ably } = useChannel('chat-app', (message) => {
        const history = receivedMessages.slice(-199);
        setReceivedMessages([...history, message]);
    });

    const sentChatMessage = (event) => {
        channel.publish({ name: "chat-message", data: event })
        setSentMessages("")
        inputBox.focus()
    }

    const handleFormSubmission = (e) => {
        e.preventDefault()
        sentChatMessage(sentMessages)
    }

    const handleKeyPress = (e) => {
        if (e.charCode !== 13 || sentMessages.length === 0) {
            return;
        }
        sentChatMessage(sentMessages)
        e.preventDefault()
    }

    const msg = receivedMessages.map((message, index) => {
        const author = message.connectionId === ably.connection.id ? "me" : "other"
        return <div key={index} className={`message ${author}`}>
            <div className="author">{author}</div>
            <div className="text">{message.data}</div></div>
    })

    useEffect(() => {
        messageEnd.scrollIntoView({ behavior: "smooth" })
    }, [])

    return (
        <>
            <div className={styles.chatHolder}>
                <div className={styles.chatText}>
                    {msg}
                    <div ref={(element) => { messageEnd = element; }}></div>
                </div>
                <form onSubmit={handleFormSubmission} className={styles.form}>
                    <textarea
                        ref={(element) => { inputBox = element; }}
                        value={sentMessages}
                        placeholder="Type a message..."
                        onChange={e => setSentMessages(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className={styles.textarea}
                    ></textarea>
                    <button type="submit" className={styles.button} disabled={messageTextIsEmpty}>Send</button>
                </form>
            </div>
        </>
    )
}

export default ChatBox
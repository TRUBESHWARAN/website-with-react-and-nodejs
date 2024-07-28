import React from 'react';
import { Link } from 'react-router-dom';
import '../css/chatList.css'; // Import the CSS file for styling

const ChatList = () => {
    return (
        <div className="chat-container">
            <div className="chat-list-container">
                <h2>Friends</h2>
                <ul className="user-list">
                    <li className="user-item">
                        <div className="user-link">
                            Raj
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ChatList;

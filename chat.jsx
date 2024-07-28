import React, { useState, useEffect } from 'react';
import svg from '../assets/react.svg';
import '../css/chat.css'; // Import the CSS file for styling
import ChatList from '../ChatList'; // Import ChatList component

const Chat = () => {
    const [message, setMessage] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const sendMessage = async () => {
        console.log('Message:', message);
    };

    return (
        <div className="chat-container">
            <div className={`drawer-toggle ${isDrawerOpen ? 'open' : ''}`} onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                {/* Toggle Drawer */}
            </div>
            <div className={`chat-list-container ${isDrawerOpen ? 'open' : ''}`}>
                <ChatList />
            </div>
            <div className="messages-container">
                <h2>Chat with Raj</h2>
                <div className="message-container own">
                    <div className="message">
                        <p>Hi</p>
                    </div>
                </div>
                <div className="message-container other">
                    <div className="message">
                        <p>Hello</p>
                    </div>
                </div>
                <div className="message-container own">
                    <div className="message">
                        <img src={svg} alt="Uploaded" style={{ width: '100%', maxHeight: '200px' }} />
                    </div>
                </div>
            </div>
            <div className="input-container">
                <input
                    className="type-message"
                    type="text"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder="Type your message here..."
                />
                <label className="upload-button">
                    <input type="file" style={{ display: 'none' }} />
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                        <path d="M728-33040 104-73 1777470-809-1040-177-732-73-1774-3708-7552-5-127-51275 52.51588-700-35000 46-32 78t-76 320-46 0-78-321-32-78v-370h88v370q0 13 8.5 21.57470-320413 0 21.5-8.57500-350v-3504-1-42-29.5-717400-0000-420-71 296-29 71-3782-1.71 49 120.57470-16070119-51640-330v-398h80v3902" />
                    </svg>
                </label>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;

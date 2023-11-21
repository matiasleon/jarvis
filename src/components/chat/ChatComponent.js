// ChatComponent.js

import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import InputComponent from '../input/InputComponent';
import './ChatMessage.css'; // Import the CSS file


const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { role: 'user', message: "Hello, how are you?" },
    { role: 'assistant', message: "Hi there! Im doing well, thanks" },
  ]);

  const handleSentMessageChanged = (message) => {
    let messageToAdd = {role:'user', message:message}
    setMessages(prevMessages => [...prevMessages, messageToAdd])
    getResponseFromJarvis(message) // do function async
  }

  const getResponseFromJarvis = (message) => {
    // send
    console.log("sending message ...")
  }

  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <ChatMessage key={index} sender={msg.role} message={msg.message} />
      ))}
      <InputComponent onSentMessageChanged={handleSentMessageChanged}></InputComponent>
    </div>
  );
};

export default ChatComponent;

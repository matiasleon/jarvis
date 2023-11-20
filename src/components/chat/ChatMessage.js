// ChatMessage.js

import React from 'react';

const ChatMessage = ({ message, role }) => {
  return (
    <div className={`chat-message ${role === 'user' ? 'sent' : 'received'}`}>
      <span className="role">{role}</span>
      <p className="message">{message}</p>
    </div>
  );
};

export default ChatMessage;

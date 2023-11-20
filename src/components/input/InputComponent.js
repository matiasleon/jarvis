import React, { useState } from 'react';
import './InputComponent.css'

const InputComponent = ({onSentMessageChanged}) => {
    const [inputText, setInputText] = useState("");

    return (
        <div className="input-container">
            <input
                type="text"
                className="text-input"
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button className="send-button" onClick={(e) => onSentMessageChanged(inputText)}>
                Send
            </button>
        </div>
    )
};
export default InputComponent;

import React, { useState } from 'react';
import './MainContent.css';

function MainContent() {
  const [clickCount, setClickCount] = useState(0);

  const messages = [
    "My Love,",
    "Even though we're apart,",
    "You're always in my heart.",
    "Every moment without you feels incomplete,",
    "But I know our love is strong and sweet.",
    "I can't wait to see you again,",
    "And make more beautiful memories, my forever friend.",
    "Happy Valentine's Day, my love. 💕",
  ];

  const handleClick = () => {
    if (clickCount < messages.length - 1) {
      setClickCount(clickCount + 1);
    }
  };

  return (
    <div className="main-content">
      <div className="message-container">
        {messages.slice(0, clickCount + 1).map((message, index) => (
          <p key={index} className="message">{message}</p>
        ))}
      </div>
      <button onClick={handleClick} className="love-button">
        {clickCount < messages.length - 1 ? "Click for More 💌" : "I Love You! 💖"}
      </button>
    </div>
  );
}

export default MainContent;